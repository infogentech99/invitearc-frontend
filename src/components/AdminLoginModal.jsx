"use client";

import AdminLoginForm from "./AdminLoginForm";

export default function AdminLoginModal({ open, onClose, onAdminLogin }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
              InviteArc Admin
            </span>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Admin Login</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 px-3 py-1 text-slate-500 transition hover:bg-slate-100"
          >
            ×
          </button>
        </div>

        <AdminLoginForm
          mode="modal"
          onClose={onClose}
          onSuccess={(admin) => {
            if (onAdminLogin) onAdminLogin(admin);
          }}
        />
      </div>
    </div>
  );
}
