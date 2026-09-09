"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import config from "../../../config/config";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAdmin = localStorage.getItem("adminUser");
    const token = localStorage.getItem("adminAccessToken");

    if (!savedAdmin || !token) {
      router.replace("/admin/login");
      return;
    }

    try {
      setAdmin(JSON.parse(savedAdmin));
    } catch {
      localStorage.removeItem("adminUser");
      localStorage.removeItem("adminAccessToken");
      router.replace("/admin/login");
      return;
    }

    setLoading(false);
  }, [router]);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${config.api.baseUrl}${config.api.endpoints.admin.logout}`,
        {},
        { withCredentials: true },
      );
    } catch (error) {
      console.log("Admin logout fallback", error);
    } finally {
      localStorage.removeItem("adminAccessToken");
      localStorage.removeItem("adminUser");
      setAdmin(null);
      router.replace("/admin/login");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="text-center text-slate-600 font-bold">Loading admin dashboard...</div>
        </div>
      </main>
    );
  }

  if (!admin) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
              Admin Access
            </span>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              Dashboard
            </h1>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Logout
          </button>
        </div>

        {/* <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="text-sm font-bold uppercase text-slate-500">Signed In</div>
            <div className="mt-3 text-2xl font-bold text-slate-900">{admin.name}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="text-sm font-bold uppercase text-slate-500">Role</div>
            <div className="mt-3 text-2xl font-bold text-slate-900">{admin.role}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="text-sm font-bold uppercase text-slate-500">Status</div>
            <div className="mt-3 text-2xl font-bold text-emerald-600">Active</div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
