"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";

interface Guest {
  _id: string;
  guestName: string;
  familyCount: number;
  attending: boolean | null;
  respondedAt: string | null;
  token: string;
}

interface Wedding {
  _id: string;
  brideName: string;
  groomName: string;
  weddingDate: string;
  venue: string;
}

interface Stats {
  total: { count: number; seats: number };
  accepted: { count: number; seats: number };
  declined: { count: number; seats: number };
  pending: { count: number; seats: number };
}

interface Activity {
  _id: string;
  guestName: string;
  action: string;
  respondedAt: string;
}

export default function ClientDashboardPage({
  params,
}: {
  params: Promise<{ weddingId: string }>;
}) {
  const { weddingId } = use(params);

  // States
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [guests, setGuests] = useState<Guest[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  // Search & Filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // WhatsApp Message Template
  const [showTemplateEditor, setShowTemplateEditor] = useState(false);
  const [whatsappTemplate, setWhatsappTemplate] = useState(
    `Hello *{guestName}*! 🌸\n\nWe are delighted to invite you to celebrate our special day with us. We would be honored by your presence at the wedding of *{groom} & {bride}*.\n\n📅 *Date:* {date}\n📍 *Venue:* {venue}\n🎟️ *Reserved Seats:* {seats}\n\nPlease confirm your RSVP by clicking this link:\n{link}\n\nLooking forward to celebrating with you! ✨`
  );

  // General States
  const [origin, setOrigin] = useState("");
  const [copiedGuestId, setCopiedGuestId] = useState<string | null>(null);

  // Poll dashboard data in real-time
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }

    // Load initial data
    fetchDashboardData(true);

    // Set up polling interval (every 5 seconds)
    const interval = setInterval(() => {
      fetchDashboardData(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [weddingId, search, statusFilter]);

  async function fetchDashboardData(showLoadingIndicator = false) {
    if (showLoadingIndicator) setLoading(true);
    try {
      const res = await fetch(
        `/api/client/dashboard?weddingId=${weddingId}&search=${encodeURIComponent(search)}&status=${statusFilter}`
      );
      const data = await res.json();
      if (res.ok) {
        setWedding(data.wedding);
        setStats(data.stats);
        setGuests(data.guests);
        setActivities(data.activities);
      }
    } catch (err) {
      console.error("Error polling client dashboard:", err);
    } finally {
      if (showLoadingIndicator) setLoading(false);
    }
  }

  // Compile template for a specific guest
  function compileTemplate(guest: Guest): string {
    if (!wedding) return "";

    const inviteLink = `${origin}/invite/${guest.token}`;
    return whatsappTemplate
      .replace(/{guestName}/g, guest.guestName)
      .replace(/{groom}/g, wedding.groomName)
      .replace(/{bride}/g, wedding.brideName)
      .replace(/{date}/g, wedding.weddingDate)
      .replace(/{venue}/g, wedding.venue)
      .replace(/{seats}/g, guest.familyCount.toString())
      .replace(/{link}/g, inviteLink);
  }

  // Share via WhatsApp
  function handleWhatsAppShare(guest: Guest) {
    const text = compileTemplate(guest);
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  }

  // Copy link helper
  function handleCopyLink(guest: Guest) {
    const inviteLink = `${origin}/invite/${guest.token}`;
    navigator.clipboard.writeText(inviteLink);
    setCopiedGuestId(guest._id);
    setTimeout(() => setCopiedGuestId(null), 2000);
  }

  if (loading && !wedding) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="text-slate-400 text-sm">Preparing your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!wedding) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-sm p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-4xl">⚠️</span>
          <h3 className="text-lg font-bold text-slate-100 mt-4">Invalid Dashboard Link</h3>
          <p className="text-sm text-slate-400">
            This dashboard does not exist or has been removed. Please contact your wedding administrator.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* Premium Header */}
      <header className="relative bg-gradient-to-b from-rose-950/30 to-slate-950/0 border-b border-slate-900 px-6 py-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-3">
          <span className="inline-block bg-pink-500/10 text-pink-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-pink-500/20">
            💖 Client Celebration Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-300 via-rose-350 to-amber-300 bg-clip-text text-transparent">
            {wedding.groomName} & {wedding.brideName}
          </h1>
          <p className="text-slate-400 text-sm max-w-lg mx-auto flex flex-wrap items-center justify-center gap-3 mt-4">
            <span className="flex items-center gap-1">📅 {wedding.weddingDate}</span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1">📍 {wedding.venue}</span>
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Stats and Realtime feed */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* Real-time Status Card */}
          {stats && (
            <section className="bg-slate-900/50 backdrop-blur-md border border-slate-850 rounded-3xl p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-slate-200 text-base">Real-time RSVP Overview</h4>
                <span className="flex items-center gap-1.5 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  LIVE
                </span>
              </div>

              {/* Grid of RSVP categories */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-2xl relative overflow-hidden">
                  <span className="text-xs text-slate-400 font-medium">Invited</span>
                  <p className="text-2xl font-extrabold text-white mt-1">{stats.total.count}</p>
                  <span className="text-[10px] text-slate-500 mt-1 block">{stats.total.seats} total seats</span>
                </div>
                <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-2xl relative overflow-hidden">
                  <span className="text-xs text-emerald-400 font-medium">Accepted</span>
                  <p className="text-2xl font-extrabold text-emerald-455 mt-1">{stats.accepted.count}</p>
                  <span className="text-[10px] text-slate-500 mt-1 block">{stats.accepted.seats} seats filled</span>
                </div>
                <div className="bg-slate-950/40 border border-slate-855 p-4 rounded-2xl relative overflow-hidden">
                  <span className="text-xs text-rose-400 font-medium">Declined</span>
                  <p className="text-2xl font-extrabold text-rose-455 mt-1">{stats.declined.count}</p>
                  <span className="text-[10px] text-slate-500 mt-1 block">{stats.declined.seats} seats freed</span>
                </div>
                <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-2xl relative overflow-hidden">
                  <span className="text-xs text-amber-400 font-medium">Pending</span>
                  <p className="text-2xl font-extrabold text-amber-455 mt-1">{stats.pending.count}</p>
                  <span className="text-[10px] text-slate-500 mt-1 block">{stats.pending.seats} seats waiting</span>
                </div>
              </div>

              {/* Progress Bar Visualizer */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>RSVP Response rate</span>
                  <span>
                    {stats.total.count > 0
                      ? Math.round(
                          ((stats.accepted.count + stats.declined.count) / stats.total.count) * 100
                        )
                      : 0}
                    %
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  {stats.total.count > 0 && (
                    <>
                      <div
                        style={{ width: `${(stats.accepted.count / stats.total.count) * 100}%` }}
                        className="bg-emerald-500 h-full"
                      ></div>
                      <div
                        style={{ width: `${(stats.declined.count / stats.total.count) * 100}%` }}
                        className="bg-rose-500 h-full"
                      ></div>
                    </>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Live Responses Activity Feed */}
          <section className="bg-slate-900/50 backdrop-blur-md border border-slate-855 rounded-3xl p-6">
            <h4 className="font-bold text-slate-200 text-base mb-4 flex items-center gap-2">
              <span>⚡</span> Activity Stream
            </h4>
            
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
              {activities.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-8">
                  Guests haven't responded yet. Once they click Accept/Decline, updates will appear here instantly.
                </p>
              ) : (
                activities.map((act) => {
                  const date = new Date(act.respondedAt);
                  const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                  return (
                    <div key={act._id} className="flex gap-3 p-3 bg-slate-950/30 border border-slate-900 rounded-2xl hover:border-slate-800 transition-colors">
                      <span className="text-lg">{act.action === "Accepted" ? "✅" : "❌"}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-350 leading-relaxed">
                          <strong className="text-slate-100 font-semibold">{act.guestName}</strong>{" "}
                          {act.action === "Accepted" ? (
                            <span className="text-emerald-400">confirmed attendance</span>
                          ) : (
                            <span className="text-rose-400">declined attendance</span>
                          )}
                        </p>
                        <span className="text-[10px] text-slate-500 mt-1 block">
                          Just now ({time})
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </section>
        </div>

        {/* Right Side: Guest list, search, custom message template sharing */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Customizable Template Panel */}
          <section className="bg-slate-900/50 backdrop-blur-md border border-slate-850 rounded-3xl p-6">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-slate-200 text-base flex items-center gap-2">
                <span>💬</span> WhatsApp Invitation Template
              </h4>
              <button
                onClick={() => setShowTemplateEditor(!showTemplateEditor)}
                className="text-xs text-pink-400 hover:text-pink-300 font-semibold hover:underline"
              >
                {showTemplateEditor ? "Collapse Editor" : "Customize Message"}
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              When you click the WhatsApp share button for any guest, the platform compiles this template dynamically.
            </p>

            {showTemplateEditor ? (
              <div className="mt-4 space-y-4">
                <textarea
                  value={whatsappTemplate}
                  onChange={(e) => setWhatsappTemplate(e.target.value)}
                  rows={7}
                  className="w-full bg-slate-950 border border-slate-850 rounded-2xl p-4 text-xs font-mono text-slate-205 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all leading-relaxed"
                ></textarea>

                {/* Available Variables Legend */}
                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-900">
                  <h5 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">Available Placeholders</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-mono text-slate-505">
                    <div><span className="text-pink-400">{"{guestName}"}</span> - Guest's Name</div>
                    <div><span className="text-pink-400">{"{groom}"}</span> - Groom's Name</div>
                    <div><span className="text-pink-400">{"{bride}"}</span> - Bride's Name</div>
                    <div><span className="text-pink-400">{"{seats}"}</span> - Guest seats</div>
                    <div><span className="text-pink-400">{"{date}"}</span> - Wedding Date</div>
                    <div><span className="text-pink-400">{"{venue}"}</span> - Wedding Venue</div>
                    <div><span className="text-pink-400">{"{link}"}</span> - Invitation URL</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-4 bg-slate-950/40 border border-slate-900 rounded-2xl p-4 text-xs font-mono text-slate-400 whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto">
                {whatsappTemplate}
              </div>
            )}
          </section>

          {/* Guest Directory and Sharing Controls */}
          <section className="bg-slate-900/50 backdrop-blur-md border border-slate-850 rounded-3xl p-6">
            <h4 className="font-bold text-slate-200 text-base mb-6 flex items-center gap-2">
              <span>📋</span> Send Invitations & Manage RSVPs
            </h4>

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="🔍 Search guest by name..."
                className="flex-1 bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
              />

              <div className="flex rounded-xl bg-slate-950 border border-slate-850 p-0.5">
                {[
                  { value: "all", label: "All" },
                  { value: "accepted", label: "Accepted" },
                  { value: "declined", label: "Declined" },
                  { value: "pending", label: "Pending" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setStatusFilter(opt.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      statusFilter === opt.value
                        ? "bg-slate-805 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Directory List */}
            <div className="overflow-x-auto border border-slate-855 rounded-2xl bg-slate-950/20">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-950/60 border-b border-slate-850 text-slate-400 font-semibold uppercase tracking-wider">
                    <th className="p-4">Guest Name</th>
                    <th className="p-4 text-center">Seats</th>
                    <th className="p-4 text-center">RSVP Status</th>
                    <th className="p-4 text-right">Quick Invite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {guests.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-12 text-center text-slate-505 font-medium">
                        No guests found. Import your guest list first or adjust search filters.
                      </td>
                    </tr>
                  ) : (
                    guests.map((g) => (
                      <tr key={g._id} className="hover:bg-slate-950/30 transition-colors group">
                        <td className="p-4 font-semibold text-slate-200">
                          {g.guestName}
                        </td>
                        <td className="p-4 text-center text-slate-400">
                          {g.familyCount}
                        </td>
                        <td className="p-4 text-center">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            g.attending === true
                              ? "bg-emerald-500/10 text-emerald-450 border border-emerald-500/20"
                              : g.attending === false
                              ? "bg-rose-500/10 text-rose-455 border border-rose-500/20"
                              : "bg-amber-500/10 text-amber-450 border border-amber-500/20"
                          }`}>
                            {g.attending === true ? "Accepted" : g.attending === false ? "Declined" : "Pending"}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {/* Copy Link Button */}
                            <button
                              onClick={() => handleCopyLink(g)}
                              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border ${
                                copiedGuestId === g._id
                                  ? "bg-emerald-600 border-emerald-500 text-white"
                                  : "bg-slate-900 border-slate-800 text-slate-350 hover:bg-slate-800 hover:text-slate-200"
                              }`}
                            >
                              {copiedGuestId === g._id ? "Copied!" : "📋 Copy Link"}
                            </button>

                            {/* Share on WhatsApp Button */}
                            <button
                              onClick={() => handleWhatsAppShare(g)}
                              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-[10px] transition-all flex items-center gap-1.5"
                            >
                              <span>💬</span> Share WhatsApp
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
