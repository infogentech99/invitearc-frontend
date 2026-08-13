"use client";
import { FaWhatsapp } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";

export default function RsvpEditor({
  editorData = {},
  // fields defined by the template code (fields.js)
  templateRsvpFields = [],
  updateField,
  formatFieldLabel,
}) {
  const selectedMode = editorData.rsvpMode || "whatsapp";
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-3">
        <p className="text-sm font-semibold text-slate-800 font-georgia">
          RSVP option
        </p>

        {/* <div className="mt-3 grid grid-cols-2 gap-3"> */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-3 md:mt-2 mt-4">
          <button
            type="button"
            onClick={() => updateField("rsvpMode", "whatsapp")}
            className={`flex flex-col items-center gap-2 rounded-2xl px-3 py-3 transition border cursor-pointer ${
              selectedMode === "whatsapp"
                ? "border-[#861E1D] bg-[#fff5f5]"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-1">
              <FaWhatsapp />

              <div className="text-sm font-semibold text-slate-900">
                WhatsApp
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => updateField("rsvpMode", "form")}
            className={`flex flex-col items-center gap-2 rounded-2xl px-5 py-3 transition border cursor-pointer ${
              selectedMode === "form"
                ? "border-[#861E1D] bg-[#fff5f5]"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <SiGoogleforms />
              <div>
                <div className="text-sm font-semibold text-slate-900">Form</div> 
              </div>
            </div>
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-800 font-georgia">
          Section heading
        </label>
        <input
          value={editorData.rsvpSectionHeading || ""}
          onChange={(e) => updateField("rsvpSectionHeading", e.target.value)}
          placeholder="Awaiting the Pleasure of Your Company"
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"
        />
      </div>

      {/* <div>
        <label className="block text-sm font-semibold text-slate-800 font-georgia">Subtext</label>
        <textarea
          value={editorData.rsvpSubtext || ""}
          onChange={(e) => updateField("rsvpSubtext", e.target.value)}
          placeholder="Short message shown above the button"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"
        />
      </div> */}

      {selectedMode === "whatsapp" && (
        <>
          <div>
            <label className="block text-sm font-semibold text-slate-800 font-georgia">
              {formatFieldLabel("WhatsApp RSVP number")}
            </label>
            <input
              value={editorData.whatsappNumber || ""}
              onChange={(event) =>
                updateField("whatsappNumber", event.target.value)
              }
              placeholder="+911234567890"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 font-georgia">
              WhatsApp Button Text
            </label>
            <input
              value={editorData.rsvpWhatsappButtonText || ""}
              onChange={(e) => updateField("rsvpWhatsappButtonText", e.target.value)}
              placeholder="RSVP via WhatsApp"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"
            />
          </div>
        </>
      )}

      {selectedMode === "form" && (
        <>
          <div>
            <label className="block text-sm font-semibold text-slate-800 font-georgia">
              Google form link
            </label>
            <input
              value={editorData.rsvpGoogleFormLink || ""}
              onChange={(event) =>
                updateField("rsvpGoogleFormLink", event.target.value)
              }
              placeholder="Paste your Google Form link here"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 font-georgia">
              Form Button Text
            </label>
            <input
              value={editorData.rsvpFormButtonText || ""}
              onChange={(e) => updateField("rsvpFormButtonText", e.target.value)}
              placeholder="Fill RSVP Form"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-900"
            />
          </div>
        </>
      )}

      {/* Render template-defined RSVP fields (editable values only) */}
      {Array.isArray(templateRsvpFields) && templateRsvpFields.length > 0 && (
        <div>
          {/* <label className="block text-sm font-semibold text-slate-800 font-georgia">RSVP Fields</label> */}

          
          <div className="mt-2 space-y-3">
            {templateRsvpFields.map((field, idx) => {
              const value = editorData[field.name] ?? "";
              if (field.type === "textarea") {
                return (
                  <div key={idx}>
                    <label className="text-sm font-semibold text-slate-800 font-georgia">{field.label}</label>
                    <textarea
                      rows={3}
                      value={value}
                      onChange={(e) => updateField(field.name, e.target.value)}
                      className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50 p-2 text-sm text-slate-900"
                    />
                  </div>
                );
              }
              return (
                <div key={idx}>
                  <label className="text-sm font-semibold text-slate-900 font-georgia">{field.label}</label>
                  <input
                    value={value}
                    onChange={(e) => updateField(field.name, e.target.value)}
                    placeholder={field.label}
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50 p-2 text-sm text-slate-900"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
