export default function EditTemplateLoading() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:p-6">
        <div className="w-full rounded-3xl bg-slate-50 p-4 lg:w-72">
          <div className="flex items-center gap-3 rounded-2xl bg-[#861E1D]/10 px-3 py-3 text-sm font-semibold text-[#861E1D]">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#861E1D] border-t-transparent" />
            Loading editor...
          </div>
          <div className="h-10 w-full animate-pulse rounded-2xl bg-slate-200" />
          <div className="mt-4 space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-10 w-full animate-pulse rounded-2xl bg-slate-200"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="h-10 w-40 animate-pulse rounded-full bg-slate-200" />
          <div className="grid gap-4 xl:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-32 animate-pulse rounded-3xl border border-slate-200 bg-slate-50"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
