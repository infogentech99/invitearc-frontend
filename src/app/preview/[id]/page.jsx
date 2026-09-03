"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

import config from "../../../config/config";
import { AuthContext } from "../../../context/AuthContext";
import { templateComponents } from "../../templates/templateLoader";

export default function PreviewPage() {
  const { token, loading: authLoading } = useContext(AuthContext);
const [liveData, setLiveData] = useState(null);
  const params = useParams();
  const templateId = params.id;

  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!token || !templateId) {
      setLoading(false);
      return;
    }

    const fetchTemplate = async () => {
      try {
        const response = await axios.get(
          `${config.api.baseUrl}/api/client-templates/${templateId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        setTemplate(response.data.data);
      } catch (error) {
        console.error("Preview fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [token, templateId, authLoading]);

//   useEffect(() => {
//   const handleMessage = (event) => {
//     if (event.origin !== window.location.origin) return;

//     if (event.data?.type === "EDITOR_UPDATE") {
//       setLiveData(event.data.data);
//     }
//   };

//   window.addEventListener("message", handleMessage);

//   return () => {
//     window.removeEventListener("message", handleMessage);
//   };
// }, []);


useEffect(() => {
  const handleMessage = (event) => {
    if (event.origin !== window.location.origin) return;

    if (event.data?.type === "EDITOR_UPDATE") {
      setLiveData(event.data.data);
    }

    if (event.data?.type === "SCROLL_TO_DETAILS") {
      const element = document.getElementById("details-section");

      if (!element) {
        console.log("details-section not found");
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

// for event tab
if (event.data?.type === "SCROLL_TO_EVENTS") {
      const element = document.getElementById("events-section");

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }


// for couple tab

if (event.data?.type === "SCROLL_TO_COUPLE") {
      const element = document.getElementById("couple-section");

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }


 // for rsvp tab   

if (event.data?.type === "SCROLL_TO_RSVP") {
      const element = document.getElementById("rsvp-section");

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

// countdown tab


if (event.data?.type === "SCROLL_TO_COUNTDOWN") {
      const element = document.getElementById("countdown-section");

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

  };

  window.addEventListener("message", handleMessage);

  return () => {
    window.removeEventListener("message", handleMessage);
  };
}, []);





  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading Preview...
      </div>
    );
  }

  if (!template) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Template not found
      </div>
    );
  }

  const TemplateComponent =
    templateComponents[template.templateId?.slug];

  if (!TemplateComponent) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Template component not found
      </div>
    );
  }

  const templateData = {
  ...template.templateId.defaultData,
  ...template.customData,
  ...(liveData || {}),
};

  return (
    <TemplateComponent
      data={templateData}
      token={token}
      templateId={templateId}
      isOwner={true}
    />
  );
}