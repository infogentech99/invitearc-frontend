"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import config from "../../../config/config";
import { IoDocumentTextOutline} from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";


export default function AdminDashboardPage() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedNav, setSelectedNav] = useState("Dashboard");
  const [selectedUser, setSelectedUser] = useState(null);
  const [visiblePaymentCount, setVisiblePaymentCount] = useState(6);

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

    const fetchStats = async () => {
      try {
        const response = await axios.get(
          `${config.api.baseUrl}${config.api.endpoints.admin.stats}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          },
        );

        if (response.data?.success) {
          setStats(response.data.data);
          if (response.data.data?.users?.length) {
            setSelectedUser(response.data.data.users[0]);
          }
        } else {
          setError(response.data?.message || "Unable to load dashboard data");
        }
      } catch (fetchError) {
        console.error(fetchError);
        setError("Unable to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
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

  const paymentRecords = useMemo(() => {
    return stats?.payments || stats?.recentOrders || [];
  }, [stats]);

  const visiblePaymentRecords = paymentRecords.slice(0, visiblePaymentCount);
  const hasMorePayments = visiblePaymentCount < paymentRecords.length;

  const summaryCards = useMemo(() => {
    if (!stats?.totals) return [];

    return [
      {
        label: "Total Templates",
        value: stats.totals.templates,
        color: "bg-[#eefbec]",
        icon: <IoDocumentTextOutline />,
      },
      {
        label: "Total Orders",
        value: stats.totals.orders,
         color: "bg-[#eef8ff]",
        icon: <BsCart4 />,
      },
      {
        label: "Total Users",
        value: stats.totals.users,
        color: "bg-[#fff8e8]",
        icon: <FaUser />,
      },
      {
        label: "Total Revenue",
        value: stats.totals.revenueDisplay,
        color: "bg-[#f9eefb]",
        icon: <MdCurrencyRupee />,
      },
    ];
  }, [stats]);

  const salesChart = useMemo(() => {
    const dataset = stats?.monthlySales || [];

    if (!dataset.length) {
      return {
        bars: [],
        maxValue: 1,
      };
    }

    const values = dataset.map((item) => Number(item.count || 0));
    const maxValue = Math.max(...values, 1);

    return {
      bars: dataset.map((item) => {
        const monthKey = String(item._id || "");
        const [year, month] = monthKey.split("-");
        const monthNumber = Number(month || 1);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        return {
          label: `${monthNames[monthNumber - 1]} ${year.slice(-2)}`,
          value: Number(item.count || 0),
        };
      }),
      maxValue,
    };
  }, [stats]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="text-center text-slate-600 font-bold">Loading admin dashboard...</div>
        </div>
      </main>
    );
  }

  if (!admin || !stats) {
    return null;
  }
// dashboard_sidebarbg
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#861E1D]">
      <aside 
      className="fixed left-0 top-0 h-screen w-80 text-white bg-cover bg-center"
      // className="fixed left-0 top-0 h-screen w-80 bg-[#861E1D] text-white"
     style={{
    backgroundImage: "url('/assets/dashboard_sidebarbg.webp')",
  }}
    >
        <div className="flex items-center gap-3 px-7 py-6 border-b border-white/10 ">
         <img
            src="/assets/INLOGO.png"
            alt="InviteArc"
            className="h-20 w-auto object-contain"
          />
        </div>

        <nav className="px-4 py-8">
          <div className="space-y-2">
            {[
              "Dashboard",
              "Users",
              "Team Edit Template",
              "Payments",
              "Settings",
            ].map((item, index) => (
              <div
                key={item}
                onClick={() => setSelectedNav(item)}
                className={`flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  selectedNav === item
                    ? "bg-[#FBE5CB] text-[#861E1D] shadow-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#861E1D] bg-white/5">
                  {index + 1}
                </span>
                <span className="font-bold font-georgia">{item}</span>
              </div>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-4 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">
              Admin
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black text-[#861E1D]">
              Online
            </span>
          </div>
          <div className="mt-2 text-sm font-semibold text-white">{admin.name}</div>
        </div>
      </aside>

      <section className="ml-80 min-h-screen">
        <header className="flex h-20 items-center justify-between border-b border-[#861E1D]/20 bg-white px-8">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-[#861E1D] font-georgia">{selectedNav}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-[#861E1D]/30 px-4 py-2 cursor-pointer text-sm font-bold text-[#861E1D] hover:bg-[#861E1D] hover:text-white"
            >
              Logout
            </button>
          </div>
        </header>

        <div className="px-8 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-[#861E1D] font-bold font-georgia">Good Morning, {admin.name}</h1>
              <p className="mt-1 text-sm font-medium text-slate-500">
                Here’s what’s happening your InviteArc platform today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-[#861E1D] shadow-sm border border-[#861E1D]/20">
                {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </span>
              
            </div>
          </div>

          {error ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-bold text-rose-700">
              {error}
            </div>
          ) : null}

          {selectedNav === "Dashboard" ? (
            <>
              <section className="grid gap-4 md:grid-cols-4">
                {summaryCards.map((item) => (
                  <article key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${item.color}`}>{item.icon}</span>
                    
                    </div>
                    <div className="mt-6">
                      <div className="text-sm font-bold uppercase text-[#8C1E1E] font-georgia">{item.label}</div>
                      <div className="mt-2 text-4xl font-black text-slate-950">{item.value}</div>
                    </div>
                  </article>
                ))}
              </section>

              <section className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
                <article className="rounded-3xl border border-[#861E1D]/20 bg-white p-6 shadow-sm ">
                  <div className="mb-4 flex items-center justify-between ">
                    <div>
                      <span className="text-lg font-black text-[#861E1D] font-georgia">Sales Overview</span>
                      <span className="ml-2 text-xs font-semibold text-slate-400">Revenue from template sales</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-xl border border-[#861E1D]/20 px-3 py-2 text-xs font-bold text-[#861E1D]">This Month</button>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-[#861E1D]/10 bg-[#861E1D]/5 p-5 h-[87%]">
                    <div className="flex h-full items-end justify-between gap-3">
                      {(salesChart.bars || []).length > 0 ? salesChart.bars.map((bar, index) => {
                        const barHeight = Math.max(8, Math.round((bar.value / salesChart.maxValue) * 160));
                        return (
                          <div key={`${bar.label}-${index}`} className="flex flex-1 flex-col items-center justify-end gap-2">
                            <div className="flex h-full w-full items-end justify-center">
                              <div className="w-12 rounded-t-2xl bg-[#861E1D] shadow-md" title={bar.value} style={{ height: `${barHeight}px` }}></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500">{bar.label}</span>
                          </div>
                        );
                      }) : (
                        <div className="text-sm font-bold text-slate-500">No sales data</div>
                      )}
                    </div>
                  </div>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-lg font-black text-[#8C1E1E] font-georgia ">Recent Orders</span>
                 
                  </div>
                  <div className="space-y-3">
                    {(stats.recentOrders || []).map((order, index) => (
                      <div key={order.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-amber-200 to-pink-200 text-lg">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <div className="text-sm font-black text-slate-900">{order.templateTitle}</div>
                          <div className="text-[11px] font-medium text-slate-500">
                            {new Date(order.date).toLocaleDateString("en-IN")} · User: {order.userName}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-black text-slate-900">₹ {order.amount}</div>
                          <div className="text-[11px] font-bold text-emerald-700">{order.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-lg font-black text-[#8C1E1E] font-georgia">Popular Templates</span>
                 
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {(stats.popularTemplates || []).map((template) => (
                      <div key={template.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                        <div className="h-50 rounded-xl border border-slate-200 bg-cover bg-center" style={{ backgroundImage: template.previewImage ? `url(${template.previewImage})` : "none" }}></div>
                        <div className="mt-3">
                          <div className="text-sm font-black text-slate-900">{template.title}</div>
                          <div className="mt-1 text-xs font-semibold text-slate-500">{template.uses} uses</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-lg font-black text-[#8C1E1E] font-georgia">Recent Activity</span>
                    
                  </div>
                  <div className="space-y-4">
                    {(stats.recentOrders || []).slice(0, 5).map((activity, index) => (
                      <div className="flex items-center gap-3" key={activity.id}>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-900">{activity.templateTitle} purchased by {activity.userName}</div>
                          <div className="text-[11px] font-semibold text-slate-500">
                            {new Date(activity.date).toLocaleDateString("en-IN")}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </section>
            </>
          ) : null}

          {selectedNav === "Users" ? (
            <section className="mt-6 grid gap-4 lg:grid-cols-[360px_1fr]">
              <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-black text-[#861E1D]">Users</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black text-slate-600">
                    {stats.users?.length || 0}
                  </span>
                </div>
                <div className="space-y-3">
                  {(stats.users || []).map((user) => (
                    <button
                      key={user.id}
                      type="button"
                      onClick={() => setSelectedUser(user)}
                      className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition ${
                        selectedUser?.id === user.id
                          ? "border-[#861E1D] bg-[#861E1D] text-white"
                          : "border-slate-100 bg-slate-50 text-[#861E1D] hover:bg-slate-100"
                      }`}
                    >
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${
                        selectedUser?.id === user.id ? "bg-white text-[#861E1D]" : "bg-[#861E1D] text-white"
                      }`}>
                        {String(user.name || "U").slice(0, 2).toUpperCase()}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-black">{user.name}</span>
                        <span className={`block text-[11px] font-semibold ${
                          selectedUser?.id === user.id ? "text-slate-300" : "text-slate-500"
                        }`}>{user.email}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </aside>

              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                {selectedUser ? (
                  <div>
                    <div className="mb-6 flex items-center gap-4">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#861E1D] text-xl font-black text-white">
                        {String(selectedUser.name || "U").slice(0, 2).toUpperCase()}
                      </span>
                      <div>
                        <span className="text-xs font-black uppercase tracking-wide text-[#861E1D]">User Profile</span>
                        <h3 className="mt-1 text-2xl font-black text-slate-900">{selectedUser.name}</h3>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="text-[11px] font-black uppercase text-[#861E1D]">Email</div>
                        <div className="mt-2 text-sm font-black text-slate-900">{selectedUser.email}</div>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="text-[11px] font-black uppercase text-[#861E1D]">Mobile Number</div>
                        <div className="mt-2 text-sm font-black text-slate-900">{selectedUser.mobileNumber}</div>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="text-[11px] font-black uppercase text-[#861E1D]">Role</div>
                        <div className="mt-2 text-sm font-black text-slate-900 capitalize">{selectedUser.role}</div>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="text-[11px] font-black uppercase text-[#861E1D]">Joined</div>
                        <div className="mt-2 text-sm font-black text-slate-900">
                          {new Date(selectedUser.createdAt).toLocaleDateString("en-IN")}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm font-bold text-slate-500">No user selected</div>
                )}
              </section>
            </section>
          ) : null}

          {selectedNav === "Payments" ? (
            <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <span className="text-lg font-black text-[#861E1D] font-georgia">Payments</span>
                  <span className="ml-2 text-xs font-semibold text-slate-400">Payment details</span>
                </div>
                
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-[11px] font-black uppercase text-[#861E1D]">Total Revenue</div>
                  <div className="mt-2 text-3xl font-black text-slate-900">{stats.totals.revenueDisplay}</div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-[11px] font-black uppercase text-[#861E1D]">Total Orders</div>
                  <div className="mt-2 text-3xl font-black text-slate-900">{stats.totals.orders}</div>
                </div>
                
              </div>

              <div className="mt-6">
                <div className="mb-3 text-sm uppercase text-[#861E1D] font-georgia font-bold">All Payment Records</div>
                <div className="space-y-3">
                  {visiblePaymentRecords.map((order, index) => (
                    <div key={order.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#861E1D] text-xs font-black text-white">
                          {index + 1}
                        </span>
                        <div>
                          <div className="text-sm font-black text-[#861E1D]">{order.templateTitle}</div>
                          <div className="text-[11px] font-semibold text-slate-500">{order.userName}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-black text-slate-900">₹ {order.amount}</div>
                        <div className="text-[11px] font-bold text-emerald-700">{order.status}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {hasMorePayments ? (
                  <div className="my-10 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setVisiblePaymentCount((currentCount) => Math.min(currentCount + 6, paymentRecords.length));
                      }}
                      className="rounded-2xl bg-[#861E1D] px-5 py-4 text-xs font-black uppercase cursor-pointer text-white shadow-sm font-georgia hover:bg-[#6d1918]"
                    >
                      Load more payment records
                    </button>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {selectedNav === "Settings" ? (
            <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5">
                <span className="text-lg font-black text-slate-900">Settings</span>
                <span className="ml-2 text-xs font-semibold text-slate-400">System details</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-[11px] font-black uppercase text-slate-500">Admin</div>
                  <div className="mt-2 text-sm font-black text-slate-900">{admin.name}</div>
                </div>
               
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-[11px] font-black uppercase text-slate-500">Email</div>
                  <div className="mt-2 text-sm font-black text-slate-900">{admin.email}</div>
                </div>
                
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}
