export default function DashboardLoading() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="h-4 w-28 animate-pulse rounded-full bg-slate-200" />
              <div className="h-8 w-56 animate-pulse rounded-full bg-slate-200" />
            </div>
            <div className="flex items-center gap-3 rounded-full bg-[#861E1D]/10 px-4 py-3 text-sm font-semibold text-[#861E1D]">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#861E1D] border-t-transparent" />
              Loading dashboard...
            </div>
          </div>
          <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded-full bg-slate-200" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6"
            >
              <div className="h-40 rounded-2xl bg-slate-200" />
              <div className="mt-5 space-y-3">
                <div className="h-5 w-3/4 rounded-full bg-slate-200" />
                <div className="h-4 w-full rounded-full bg-slate-200" />
                <div className="h-4 w-2/3 rounded-full bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
