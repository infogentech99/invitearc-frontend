"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import config from "../config/config";

export default function AdminLoginForm({
  onSuccess,
  onClose,
  mode = "page",
  redirectTo = "/admin/dashboard",
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (mode !== "page") return;

    const savedAdmin = localStorage.getItem("adminUser");
    const token = localStorage.getItem("adminAccessToken");

    if (savedAdmin && token) {
      router.replace("/admin/dashboard");
    }
  }, [mode, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${config.api.baseUrl}${config.api.endpoints.admin.login}`,
        { email, password },
        { withCredentials: true },
      );

      if (res.data.success) {
        const admin = {
          id: res.data.admin.id,
          name: res.data.admin.name,
          email: res.data.admin.email || email,
          role: res.data.admin.role,
        };

        localStorage.setItem("adminAccessToken", res.data.accessToken);
        localStorage.setItem("adminUser", JSON.stringify(admin));

        if (onSuccess) {
          onSuccess(admin);
        }

        if (mode === "modal") {
          if (onClose) onClose();
        } else {
          window.location.href = redirectTo;
        }
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid admin credentials. Please check your email and password.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (

    <main className="min-h-screen w-full overflow-hidden bg-[#f8f9fb] text-[#182238]">
  <div className="min-h-screen flex items-center justify-center px-4 py-10">
    <section className="w-full max-w-105">

      <div className="flex flex-col items-center justify-center">

        {/* Logo */}
        <div className="mb-5 flex items-center justify-center">
          <img
            src="/assets/INLOGO.png"
            alt="InviteArc"
            className="h-25 w-auto object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-1 text-center text-3xl font-bold tracking-tight text-[#182238]">
          Admin Portal
        </h1>

        <p className="mt-2 text-center text-sm font-medium text-[#64748b]">
          Sign in to access the admin dashboard
        </p>

        {/* Login Card */}
        <div className="mt-8 w-full rounded-[28px] border border-[#e5e7eb] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">

          <form onSubmit={handleSubmit} className="w-full">
            <div className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#334155]">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-[#dfe5ee] bg-[#f8fafc] px-4 py-3.5 text-sm font-medium text-[#182238] outline-none transition placeholder:text-[#94a3b8] focus:border-[#991b1b] focus:bg-white focus:ring-4 focus:ring-[#991b1b]/10"
                  placeholder="example@invitearc.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#334155]">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-[#dfe5ee] bg-[#f8fafc] px-4 py-3.5 text-sm font-medium text-[#182238] outline-none transition placeholder:text-[#94a3b8] focus:border-[#991b1b] focus:bg-white focus:ring-4 focus:ring-[#991b1b]/10"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-[#991b1b] px-4 py-3.5 cursor-pointer text-sm font-bold tracking-wide text-white shadow-md shadow-red-900/10 transition hover:bg-[#7f1d1d] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

            </div>
          </form>

        </div>
           </div>
    </section>
  </div>
</main>
  );
}