// "use client";

// import { useEffect, useState, use } from "react";
// import Link from "next/link";

// interface Guest {
//   _id: string;
//   guestName: string;
//   familyCount: number;
//   attending: boolean | null;
//   respondedAt: string | null;
//   token: string;
// }

// interface Wedding {
//   _id: string;
//   brideName: string;
//   groomName: string;
//   weddingDate: string;
//   venue: string;
// }

// interface Stats {
//   total: { count: number; seats: number };
//   accepted: { count: number; seats: number };
//   declined: { count: number; seats: number };
//   pending: { count: number; seats: number };
// }

// interface Activity {
//   _id: string;
//   guestName: string;
//   action: string;
//   respondedAt: string;
// }

// export default function ClientDashboardPage({
//   params,
// }: {
//   params: Promise<{ weddingId: string }>;
// }) {
//   const { weddingId } = use(params);

//   // States
//   const [wedding, setWedding] = useState<Wedding | null>(null);
//   const [stats, setStats] = useState<Stats | null>(null);
//   const [guests, setGuests] = useState<Guest[]>([]);
//   const [activities, setActivities] = useState<Activity[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Search & Filters
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");

//   // WhatsApp Message Template
//   const [showTemplateEditor, setShowTemplateEditor] = useState(false);
//   const [whatsappTemplate, setWhatsappTemplate] = useState(
//     `Hello *{guestName}*! 🌸\n\nWe are delighted to invite you to celebrate our special day with us. We would be honored by your presence at the wedding of *{groom} & {bride}*.\n\n📅 *Date:* {date}\n📍 *Venue:* {venue}\n🎟️ *Reserved Seats:* {seats}\n\nPlease confirm your RSVP by clicking this link:\n{link}\n\nLooking forward to celebrating with you! ✨`
//   );

//   // General States
//   const [origin, setOrigin] = useState("");
//   const [copiedGuestId, setCopiedGuestId] = useState<string | null>(null);

//   // Poll dashboard data in real-time
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setOrigin(window.location.origin);
//     }

//     // Load initial data
//     fetchDashboardData(true);

//     // Set up polling interval (every 5 seconds)
//     const interval = setInterval(() => {
//       fetchDashboardData(false);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [weddingId, search, statusFilter]);

//   async function fetchDashboardData(showLoadingIndicator = false) {
//     if (showLoadingIndicator) setLoading(true);
//     try {
//       const res = await fetch(
//         `/api/client/dashboard?weddingId=${weddingId}&search=${encodeURIComponent(search)}&status=${statusFilter}`
//       );
//       const data = await res.json();
//       if (res.ok) {
//         setWedding(data.wedding);
//         setStats(data.stats);
//         setGuests(data.guests);
//         setActivities(data.activities);
//       }
//     } catch (err) {
//       console.error("Error polling client dashboard:", err);
//     } finally {
//       if (showLoadingIndicator) setLoading(false);
//     }
//   }

//   // Compile template for a specific guest
//   function compileTemplate(guest: Guest): string {
//     if (!wedding) return "";

//     const inviteLink = `${origin}/invite/${guest.token}`;
//     return whatsappTemplate
//       .replace(/{guestName}/g, guest.guestName)
//       .replace(/{groom}/g, wedding.groomName)
//       .replace(/{bride}/g, wedding.brideName)
//       .replace(/{date}/g, wedding.weddingDate)
//       .replace(/{venue}/g, wedding.venue)
//       .replace(/{seats}/g, guest.familyCount.toString())
//       .replace(/{link}/g, inviteLink);
//   }

//   // Share via WhatsApp
//   function handleWhatsAppShare(guest: Guest) {
//     const text = compileTemplate(guest);
//     const encodedText = encodeURIComponent(text);
//     const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
//     window.open(whatsappUrl, "_blank");
//   }

//   // Copy link helper
//   function handleCopyLink(guest: Guest) {
//     const inviteLink = `${origin}/invite/${guest.token}`;
//     navigator.clipboard.writeText(inviteLink);
//     setCopiedGuestId(guest._id);
//     setTimeout(() => setCopiedGuestId(null), 2000);
//   }

//   // Share invitation via Web Share API (native share sheet) —
//   // falls back to clipboard copy. Shares ONLY the /invite/[token]
//   // URL so guests never see an admin or client dashboard URL.
//   async function handleShareInvitation(guest: Guest) {
//     const inviteLink = `${origin}/invite/${guest.token}`;
//     if (
//       typeof navigator !== "undefined" &&
//       typeof navigator.share === "function"
//     ) {
//       try {
//         await navigator.share({
//           title: "Wedding Invitation",
//           text: `You're invited to the wedding of ${wedding?.groomName} & ${wedding?.brideName}! 💍`,
//           url: inviteLink,
//         });
//       } catch {
//         // User cancelled share or API unavailable — fall back to copy
//         navigator.clipboard.writeText(inviteLink);
//         setCopiedGuestId(guest._id);
//         setTimeout(() => setCopiedGuestId(null), 2000);
//       }
//     } else {
//       // Web Share API not available (e.g., desktop) — copy to clipboard
//       navigator.clipboard.writeText(inviteLink);
//       setCopiedGuestId(guest._id);
//       setTimeout(() => setCopiedGuestId(null), 2000);
//     }
//   }

//   if (loading && !wedding) {
//     return (
//       <div className="min-h-screen bg-slate-950 flex items-center justify-center">
//         <div className="text-center space-y-4">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
//           <p className="text-slate-400 text-sm">Preparing your dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!wedding) {
//     return (
//       <div className="min-h-screen bg-slate-950 flex items-center justify-center">
//         <div className="text-center space-y-4 max-w-sm p-6 bg-slate-900 border border-slate-800 rounded-2xl">
//           <span className="text-4xl">⚠️</span>
//           <h3 className="text-lg font-bold text-slate-100 mt-4">Invalid Dashboard Link</h3>
//           <p className="text-sm text-slate-400">
//             This dashboard does not exist or has been removed. Please contact your wedding administrator.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
//       {/* Premium Header */}
//       <header className="relative bg-gradient-to-b from-rose-950/30 to-slate-950/0 border-b border-slate-900 px-6 py-12 text-center overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(255,255,255,0))]"></div>
//         <div className="max-w-7xl mx-auto relative z-10 space-y-3">
//           <span className="inline-block bg-pink-500/10 text-pink-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-pink-500/20">
//             💖 Client Celebration Hub
//           </span>
//           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-300 via-rose-350 to-amber-300 bg-clip-text text-transparent">
//             {wedding.groomName} & {wedding.brideName}
//           </h1>
//           <p className="text-slate-400 text-sm max-w-lg mx-auto flex flex-wrap items-center justify-center gap-3 mt-4">
//             <span className="flex items-center gap-1">📅 {wedding.weddingDate}</span>
//             <span className="text-slate-700">|</span>
//             <span className="flex items-center gap-1">📍 {wedding.venue}</span>
//           </p>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <main className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* Left Side: Stats and Realtime feed */}
//         <div className="lg:col-span-1 space-y-8">
          
//           {/* Real-time Status Card */}
//           {stats && (
//             <section className="bg-slate-900/50 backdrop-blur-md border border-slate-850 rounded-3xl p-6 space-y-6">
//               <div className="flex justify-between items-center">
//                 <h4 className="font-bold text-slate-200 text-base">Real-time RSVP Overview</h4>
//                 <span className="flex items-center gap-1.5 text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded-full">
//                   <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
//                   LIVE
//                 </span>
//               </div>

//               {/* Grid of RSVP categories */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-2xl relative overflow-hidden">
//                   <span className="text-xs text-slate-400 font-medium">Invited</span>
//                   <p className="text-2xl font-extrabold text-white mt-1">{stats.total.count}</p>
//                   <span className="text-[10px] text-slate-500 mt-1 block">{stats.total.seats} total seats</span>
//                 </div>
//                 <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-2xl relative overflow-hidden">
//                   <span className="text-xs text-emerald-400 font-medium">Accepted</span>
//                   <p className="text-2xl font-extrabold text-emerald-455 mt-1">{stats.accepted.count}</p>
//                   <span className="text-[10px] text-slate-500 mt-1 block">{stats.accepted.seats} seats filled</span>
//                 </div>
//                 <div className="bg-slate-950/40 border border-slate-855 p-4 rounded-2xl relative overflow-hidden">
//                   <span className="text-xs text-rose-400 font-medium">Declined</span>
//                   <p className="text-2xl font-extrabold text-rose-455 mt-1">{stats.declined.count}</p>
//                   <span className="text-[10px] text-slate-500 mt-1 block">{stats.declined.seats} seats freed</span>
//                 </div>
//                 <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-2xl relative overflow-hidden">
//                   <span className="text-xs text-amber-400 font-medium">Pending</span>
//                   <p className="text-2xl font-extrabold text-amber-455 mt-1">{stats.pending.count}</p>
//                   <span className="text-[10px] text-slate-500 mt-1 block">{stats.pending.seats} seats waiting</span>
//                 </div>
//               </div>

//               {/* Progress Bar Visualizer */}
//               <div className="space-y-2 pt-2">
//                 <div className="flex justify-between text-[11px] text-slate-400 font-medium">
//                   <span>RSVP Response rate</span>
//                   <span>
//                     {stats.total.count > 0
//                       ? Math.round(
//                           ((stats.accepted.count + stats.declined.count) / stats.total.count) * 100
//                         )
//                       : 0}
//                     %
//                   </span>
//                 </div>
//                 <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
//                   {stats.total.count > 0 && (
//                     <>
//                       <div
//                         style={{ width: `${(stats.accepted.count / stats.total.count) * 100}%` }}
//                         className="bg-emerald-500 h-full"
//                       ></div>
//                       <div
//                         style={{ width: `${(stats.declined.count / stats.total.count) * 100}%` }}
//                         className="bg-rose-500 h-full"
//                       ></div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </section>
//           )}

//           {/* Live Responses Activity Feed */}
//           <section className="bg-slate-900/50 backdrop-blur-md border border-slate-855 rounded-3xl p-6">
//             <h4 className="font-bold text-slate-200 text-base mb-4 flex items-center gap-2">
//               <span>⚡</span> Activity Stream
//             </h4>
            
//             <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
//               {activities.length === 0 ? (
//                 <p className="text-xs text-slate-500 text-center py-8">
//                   Guests haven't responded yet. Once they click Accept/Decline, updates will appear here instantly.
//                 </p>
//               ) : (
//                 activities.map((act) => {
//                   const date = new Date(act.respondedAt);
//                   const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//                   return (
//                     <div key={act._id} className="flex gap-3 p-3 bg-slate-950/30 border border-slate-900 rounded-2xl hover:border-slate-800 transition-colors">
//                       <span className="text-lg">{act.action === "Accepted" ? "✅" : "❌"}</span>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-xs text-slate-350 leading-relaxed">
//                           <strong className="text-slate-100 font-semibold">{act.guestName}</strong>{" "}
//                           {act.action === "Accepted" ? (
//                             <span className="text-emerald-400">confirmed attendance</span>
//                           ) : (
//                             <span className="text-rose-400">declined attendance</span>
//                           )}
//                         </p>
//                         <span className="text-[10px] text-slate-500 mt-1 block">
//                           Just now ({time})
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })
//               )}
//             </div>
//           </section>
//         </div>

//         {/* Right Side: Guest list, search, custom message template sharing */}
//         <div className="lg:col-span-2 space-y-8">
          
//           {/* Customizable Template Panel */}
//           <section className="bg-slate-900/50 backdrop-blur-md border border-slate-850 rounded-3xl p-6">
//             <div className="flex justify-between items-center">
//               <h4 className="font-bold text-slate-200 text-base flex items-center gap-2">
//                 <span>💬</span> WhatsApp Invitation Template
//               </h4>
//               <button
//                 onClick={() => setShowTemplateEditor(!showTemplateEditor)}
//                 className="text-xs text-pink-400 hover:text-pink-300 font-semibold hover:underline"
//               >
//                 {showTemplateEditor ? "Collapse Editor" : "Customize Message"}
//               </button>
//             </div>

//             <p className="text-xs text-slate-400 mt-2 leading-relaxed">
//               When you click the WhatsApp share button for any guest, the platform compiles this template dynamically.
//             </p>

//             {showTemplateEditor ? (
//               <div className="mt-4 space-y-4">
//                 <textarea
//                   value={whatsappTemplate}
//                   onChange={(e) => setWhatsappTemplate(e.target.value)}
//                   rows={7}
//                   className="w-full bg-slate-950 border border-slate-850 rounded-2xl p-4 text-xs font-mono text-slate-205 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all leading-relaxed"
//                 ></textarea>

//                 {/* Available Variables Legend */}
//                 <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-900">
//                   <h5 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">Available Placeholders</h5>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-mono text-slate-505">
//                     <div><span className="text-pink-400">{"{guestName}"}</span> - Guest's Name</div>
//                     <div><span className="text-pink-400">{"{groom}"}</span> - Groom's Name</div>
//                     <div><span className="text-pink-400">{"{bride}"}</span> - Bride's Name</div>
//                     <div><span className="text-pink-400">{"{seats}"}</span> - Guest seats</div>
//                     <div><span className="text-pink-400">{"{date}"}</span> - Wedding Date</div>
//                     <div><span className="text-pink-400">{"{venue}"}</span> - Wedding Venue</div>
//                     <div><span className="text-pink-400">{"{link}"}</span> - Invitation URL</div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="mt-4 bg-slate-950/40 border border-slate-900 rounded-2xl p-4 text-xs font-mono text-slate-400 whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto">
//                 {whatsappTemplate}
//               </div>
//             )}
//           </section>

//           {/* Guest Directory and Sharing Controls */}
//           <section className="bg-slate-900/50 backdrop-blur-md border border-slate-850 rounded-3xl p-6">
//             <h4 className="font-bold text-slate-200 text-base mb-6 flex items-center gap-2">
//               <span>📋</span> Send Invitations & Manage RSVPs
//             </h4>

//             {/* Filters and Search */}
//             <div className="flex flex-col sm:flex-row gap-3 mb-6">
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="🔍 Search guest by name..."
//                 className="flex-1 bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
//               />

//               <div className="flex rounded-xl bg-slate-950 border border-slate-850 p-0.5">
//                 {[
//                   { value: "all", label: "All" },
//                   { value: "accepted", label: "Accepted" },
//                   { value: "declined", label: "Declined" },
//                   { value: "pending", label: "Pending" },
//                 ].map((opt) => (
//                   <button
//                     key={opt.value}
//                     onClick={() => setStatusFilter(opt.value)}
//                     className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
//                       statusFilter === opt.value
//                         ? "bg-slate-805 text-white"
//                         : "text-slate-400 hover:text-slate-200"
//                     }`}
//                   >
//                     {opt.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Guest Directory List */}
//             <div className="overflow-x-auto border border-slate-855 rounded-2xl bg-slate-950/20">
//               <table className="w-full text-left border-collapse text-xs">
//                 <thead>
//                   <tr className="bg-slate-950/60 border-b border-slate-850 text-slate-400 font-semibold uppercase tracking-wider">
//                     <th className="p-4">Guest Name</th>
//                     <th className="p-4 text-center">Seats</th>
//                     <th className="p-4 text-center">RSVP Status</th>
//                     <th className="p-4 text-right">Quick Invite</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-850">
//                   {guests.length === 0 ? (
//                     <tr>
//                       <td colSpan={4} className="p-12 text-center text-slate-505 font-medium">
//                         No guests found. Import your guest list first or adjust search filters.
//                       </td>
//                     </tr>
//                   ) : (
//                     guests.map((g) => (
//                       <tr key={g._id} className="hover:bg-slate-950/30 transition-colors group">
//                         <td className="p-4 font-semibold text-slate-200">
//                           {g.guestName}
//                         </td>
//                         <td className="p-4 text-center text-slate-400">
//                           {g.familyCount}
//                         </td>
//                         <td className="p-4 text-center">
//                           <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
//                             g.attending === true
//                               ? "bg-emerald-500/10 text-emerald-450 border border-emerald-500/20"
//                               : g.attending === false
//                               ? "bg-rose-500/10 text-rose-455 border border-rose-500/20"
//                               : "bg-amber-500/10 text-amber-450 border border-amber-500/20"
//                           }`}>
//                             {g.attending === true ? "Accepted" : g.attending === false ? "Declined" : "Pending"}
//                           </span>
//                         </td>
//                         <td className="p-4 text-right">
//                           <div className="flex flex-wrap items-center justify-end gap-2">
//                             {/* Copy Link Button */}
//                             <button
//                               onClick={() => handleCopyLink(g)}
//                               className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border ${
//                                 copiedGuestId === g._id
//                                   ? "bg-emerald-600 border-emerald-500 text-white"
//                                   : "bg-slate-900 border-slate-800 text-slate-350 hover:bg-slate-800 hover:text-slate-200"
//                               }`}
//                             >
//                               {copiedGuestId === g._id ? "Copied!" : "📋 Copy Link"}
//                             </button>

//                             {/* Share on WhatsApp Button */}
//                             <button
//                               onClick={() => handleWhatsAppShare(g)}
//                               className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-[10px] transition-all flex items-center gap-1.5"
//                             >
//                               <span>💬</span> WhatsApp
//                             </button>

//                             {/* Share Invitation — Web Share API (clean native share on mobile) */}
//                             <button
//                               onClick={() => handleShareInvitation(g)}
//                               className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-3 py-1.5 rounded-lg text-[10px] transition-all flex items-center gap-1.5"
//                               title={`Share invitation link for ${g.guestName}`}
//                             >
//                               <span>🔗</span> Share Invitation
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState, use } from "react";

// /* =========================================
//    TYPES
// ========================================= */

// interface Guest {
//   _id: string;
//   guestName: string;
//   familyCount: number;
//   attending: boolean | null;
//   respondedAt: string | null;
//   token: string;
//   message?: string;
// }

// interface Wedding {
//   _id: string;
//   brideName: string;
//   groomName: string;
//   weddingDate: string;
//   venue: string;
// }

// interface Stats {
//   total: {
//     count: number;
//     seats: number;
//   };

//   accepted: {
//     count: number;
//     seats: number;
//   };

//   declined: {
//     count: number;
//     seats: number;
//   };

//   pending: {
//     count: number;
//     seats: number;
//   };
// }

// interface Activity {
//   _id: string;
//   guestName: string;
//   action: string;
//   respondedAt: string;
// }

// /* =========================================
//    CLIENT DASHBOARD
// ========================================= */

// export default function ClientDashboardPage({
//   params,
// }: {
//   params: Promise<{ weddingId: string }>;
// }) {
//   const { weddingId } = use(params);

//   /* =======================================
//      DASHBOARD STATES
//   ======================================== */

//   const [wedding, setWedding] =
//     useState<Wedding | null>(null);

//   const [stats, setStats] =
//     useState<Stats | null>(null);

//   const [guests, setGuests] =
//     useState<Guest[]>([]);

//   const [activities, setActivities] =
//     useState<Activity[]>([]);

//   const [loading, setLoading] =
//     useState(true);

//   /* =======================================
//      SEARCH + FILTER
//   ======================================== */

//   const [search, setSearch] =
//     useState("");

//   const [statusFilter, setStatusFilter] =
//     useState("all");

//   /* =======================================
//      WHATSAPP TEMPLATE
//   ======================================== */

//   const [
//     showTemplateEditor,
//     setShowTemplateEditor,
//   ] = useState(false);

//   const [
//     whatsappTemplate,
//     setWhatsappTemplate,
//   ] = useState(
//     `Hello *{guestName}*! 🌸

// We are delighted to invite you to celebrate our special day with us. We would be honored by your presence at the wedding of *{groom} & {bride}*.

// 📅 *Date:* {date}
// 📍 *Venue:* {venue}
// 🎟️ *Reserved Seats:* {seats}

// Please confirm your RSVP by clicking this link:
// {link}

// Looking forward to celebrating with you! ✨`
//   );

//   /* =======================================
//      GENERAL STATES
//   ======================================== */

//   const [origin, setOrigin] =
//     useState("");

//   const [
//     copiedGuestId,
//     setCopiedGuestId,
//   ] = useState<string | null>(null);

//   /* RSVP message modal */

//   const [
//     selectedMessageGuest,
//     setSelectedMessageGuest,
//   ] = useState<Guest | null>(null);

//   /* =======================================
//      LOAD DASHBOARD DATA
//   ======================================== */

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setOrigin(window.location.origin);
//     }

//     fetchDashboardData(true);

//     /* Poll every 5 seconds */

//     const interval = setInterval(() => {
//       fetchDashboardData(false);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [weddingId, search, statusFilter]);

//   /* =======================================
//      FETCH DASHBOARD
//   ======================================== */

//   async function fetchDashboardData(
//     showLoadingIndicator = false
//   ) {
//     if (showLoadingIndicator) {
//       setLoading(true);
//     }

//     try {
//       const res = await fetch(
//         `/api/client/dashboard?weddingId=${weddingId}&search=${encodeURIComponent(
//           search
//         )}&status=${statusFilter}`
//       );

//       const data = await res.json();

//       if (res.ok) {
//         setWedding(data.wedding);
//         setStats(data.stats);
//         setGuests(data.guests);
//         setActivities(data.activities);
//       }
//     } catch (err) {
//       console.error(
//         "Error polling client dashboard:",
//         err
//       );
//     } finally {
//       if (showLoadingIndicator) {
//         setLoading(false);
//       }
//     }
//   }

//   /* =======================================
//      COMPILE WHATSAPP TEMPLATE
//   ======================================== */

//   function compileTemplate(
//     guest: Guest
//   ): string {
//     if (!wedding) return "";

//     const inviteLink =
//       `${origin}/invite/${guest.token}`;

//     return whatsappTemplate
//       .replace(
//         /{guestName}/g,
//         guest.guestName
//       )
//       .replace(
//         /{groom}/g,
//         wedding.groomName
//       )
//       .replace(
//         /{bride}/g,
//         wedding.brideName
//       )
//       .replace(
//         /{date}/g,
//         wedding.weddingDate
//       )
//       .replace(
//         /{venue}/g,
//         wedding.venue
//       )
//       .replace(
//         /{seats}/g,
//         guest.familyCount.toString()
//       )
//       .replace(
//         /{link}/g,
//         inviteLink
//       );
//   }

//   /* =======================================
//      WHATSAPP SHARE
//   ======================================== */

//   function handleWhatsAppShare(
//     guest: Guest
//   ) {
//     const text =
//       compileTemplate(guest);

//     const encodedText =
//       encodeURIComponent(text);

//     const whatsappUrl =
//       `https://api.whatsapp.com/send?text=${encodedText}`;

//     window.open(
//       whatsappUrl,
//       "_blank"
//     );
//   }

//   /* =======================================
//      COPY INVITATION LINK
//   ======================================== */

//   function handleCopyLink(
//     guest: Guest
//   ) {
//     const inviteLink =
//       `${origin}/invite/${guest.token}`;

//     navigator.clipboard.writeText(
//       inviteLink
//     );

//     setCopiedGuestId(guest._id);

//     setTimeout(() => {
//       setCopiedGuestId(null);
//     }, 2000);
//   }

//   /* =======================================
//      NATIVE SHARE
//   ======================================== */

//   async function handleShareInvitation(
//     guest: Guest
//   ) {
//     const inviteLink =
//       `${origin}/invite/${guest.token}`;

//     if (
//       typeof navigator !== "undefined" &&
//       typeof navigator.share === "function"
//     ) {
//       try {
//         await navigator.share({
//           title: "Wedding Invitation",

//           text:
//             `You're invited to the wedding of ` +
//             `${wedding?.groomName} & ` +
//             `${wedding?.brideName}! 💍`,

//           url: inviteLink,
//         });
//       } catch {
//         await navigator.clipboard.writeText(
//           inviteLink
//         );

//         setCopiedGuestId(
//           guest._id
//         );

//         setTimeout(() => {
//           setCopiedGuestId(null);
//         }, 2000);
//       }
//     } else {
//       await navigator.clipboard.writeText(
//         inviteLink
//       );

//       setCopiedGuestId(
//         guest._id
//       );

//       setTimeout(() => {
//         setCopiedGuestId(null);
//       }, 2000);
//     }
//   }

//   /* =======================================
//      LOADING
//   ======================================== */

//   if (loading && !wedding) {
//     return (
//       <div
//         className="
//           flex
//           min-h-screen
//           items-center
//           justify-center
//           bg-slate-950
//         "
//       >
//         <div className="space-y-4 text-center">
//           <div
//             className="
//               mx-auto
//               h-12
//               w-12
//               animate-spin
//               rounded-full
//               border-b-2
//               border-pink-500
//             "
//           />

//           <p className="text-sm text-slate-400">
//             Preparing your dashboard...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   /* =======================================
//      INVALID DASHBOARD
//   ======================================== */

//   if (!wedding) {
//     return (
//       <div
//         className="
//           flex
//           min-h-screen
//           items-center
//           justify-center
//           bg-slate-950
//         "
//       >
//         <div
//           className="
//             max-w-sm
//             space-y-4
//             rounded-2xl
//             border
//             border-slate-800
//             bg-slate-900
//             p-6
//             text-center
//           "
//         >
//           <span className="text-4xl">
//             ⚠️
//           </span>

//           <h3
//             className="
//               mt-4
//               text-lg
//               font-bold
//               text-slate-100
//             "
//           >
//             Invalid Dashboard Link
//           </h3>

//           <p
//             className="
//               text-sm
//               text-slate-400
//             "
//           >
//             This dashboard does not
//             exist or has been removed.
//             Please contact your wedding
//             administrator.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   /* =======================================
//      DASHBOARD
//   ======================================== */

//   return (
//     <div
//       className="
//         min-h-screen
//         bg-slate-950
//         pb-16
//         font-sans
//         text-slate-100
//       "
//     >
//       {/* ===================================
//           HEADER
//       ==================================== */}

//       <header
//         className="
//           relative
//           overflow-hidden
//           border-b
//           border-slate-900
//           bg-gradient-to-b
//           from-rose-950/30
//           to-slate-950/0
//           px-6
//           py-12
//           text-center
//         "
//       >
//         <div
//           className="
//             absolute
//             inset-0
//             bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(255,255,255,0))]
//           "
//         />

//         <div
//           className="
//             relative
//             z-10
//             mx-auto
//             max-w-7xl
//             space-y-3
//           "
//         >
//           <span
//             className="
//               inline-block
//               rounded-full
//               border
//               border-pink-500/20
//               bg-pink-500/10
//               px-4
//               py-1.5
//               text-xs
//               font-semibold
//               text-pink-400
//             "
//           >
//             💖 Client Celebration Hub
//           </span>

//           <h1
//             className="
//               bg-gradient-to-r
//               from-pink-300
//               via-rose-300
//               to-amber-300
//               bg-clip-text
//               text-4xl
//               font-extrabold
//               tracking-tight
//               text-transparent
//               md:text-5xl
//             "
//           >
//             {wedding.groomName} &{" "}
//             {wedding.brideName}
//           </h1>

//           <p
//             className="
//               mx-auto
//               mt-4
//               flex
//               max-w-lg
//               flex-wrap
//               items-center
//               justify-center
//               gap-3
//               text-sm
//               text-slate-400
//             "
//           >
//             <span>
//               📅 {wedding.weddingDate}
//             </span>

//             <span className="text-slate-700">
//               |
//             </span>

//             <span>
//               📍 {wedding.venue}
//             </span>
//           </p>
//         </div>
//       </header>

//       {/* ===================================
//           MAIN
//       ==================================== */}

//       <main
//         className="
//           mx-auto
//           mt-12
//           grid
//           max-w-7xl
//           grid-cols-1
//           gap-8
//           px-6
//           lg:grid-cols-3
//         "
//       >
//         {/* =================================
//             LEFT COLUMN
//         ================================== */}

//         <div
//           className="
//             space-y-8
//             lg:col-span-1
//           "
//         >
//           {/* RSVP OVERVIEW */}

//           {stats && (
//             <section
//               className="
//                 space-y-6
//                 rounded-3xl
//                 border
//                 border-slate-800
//                 bg-slate-900/50
//                 p-6
//                 backdrop-blur-md
//               "
//             >
//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                 "
//               >
//                 <h4
//                   className="
//                     text-base
//                     font-bold
//                     text-slate-200
//                   "
//                 >
//                   Real-time RSVP Overview
//                 </h4>

//                 <span
//                   className="
//                     flex
//                     items-center
//                     gap-1.5
//                     rounded-full
//                     border
//                     border-emerald-500/20
//                     bg-emerald-500/10
//                     px-2
//                     py-1
//                     text-[10px]
//                     text-emerald-400
//                   "
//                 >
//                   <span
//                     className="
//                       h-1.5
//                       w-1.5
//                       animate-pulse
//                       rounded-full
//                       bg-emerald-500
//                     "
//                   />

//                   LIVE
//                 </span>
//               </div>

//               {/* STATS */}

//               <div
//                 className="
//                   grid
//                   grid-cols-2
//                   gap-4
//                 "
//               >
//                 <div
//                   className="
//                     rounded-2xl
//                     border
//                     border-slate-800
//                     bg-slate-950/40
//                     p-4
//                   "
//                 >
//                   <span
//                     className="
//                       text-xs
//                       font-medium
//                       text-slate-400
//                     "
//                   >
//                     Invited
//                   </span>

//                   <p
//                     className="
//                       mt-1
//                       text-2xl
//                       font-extrabold
//                       text-white
//                     "
//                   >
//                     {stats.total.count}
//                   </p>

//                   <span
//                     className="
//                       mt-1
//                       block
//                       text-[10px]
//                       text-slate-500
//                     "
//                   >
//                     {stats.total.seats} total
//                     seats
//                   </span>
//                 </div>

//                 <div
//                   className="
//                     rounded-2xl
//                     border
//                     border-slate-800
//                     bg-slate-950/40
//                     p-4
//                   "
//                 >
//                   <span
//                     className="
//                       text-xs
//                       font-medium
//                       text-emerald-400
//                     "
//                   >
//                     Accepted
//                   </span>

//                   <p
//                     className="
//                       mt-1
//                       text-2xl
//                       font-extrabold
//                       text-emerald-400
//                     "
//                   >
//                     {stats.accepted.count}
//                   </p>

//                   <span
//                     className="
//                       mt-1
//                       block
//                       text-[10px]
//                       text-slate-500
//                     "
//                   >
//                     {stats.accepted.seats} seats
//                     filled
//                   </span>
//                 </div>

//                 <div
//                   className="
//                     rounded-2xl
//                     border
//                     border-slate-800
//                     bg-slate-950/40
//                     p-4
//                   "
//                 >
//                   <span
//                     className="
//                       text-xs
//                       font-medium
//                       text-rose-400
//                     "
//                   >
//                     Declined
//                   </span>

//                   <p
//                     className="
//                       mt-1
//                       text-2xl
//                       font-extrabold
//                       text-rose-400
//                     "
//                   >
//                     {stats.declined.count}
//                   </p>

//                   <span
//                     className="
//                       mt-1
//                       block
//                       text-[10px]
//                       text-slate-500
//                     "
//                   >
//                     {stats.declined.seats} seats
//                     freed
//                   </span>
//                 </div>

//                 <div
//                   className="
//                     rounded-2xl
//                     border
//                     border-slate-800
//                     bg-slate-950/40
//                     p-4
//                   "
//                 >
//                   <span
//                     className="
//                       text-xs
//                       font-medium
//                       text-amber-400
//                     "
//                   >
//                     Pending
//                   </span>

//                   <p
//                     className="
//                       mt-1
//                       text-2xl
//                       font-extrabold
//                       text-amber-400
//                     "
//                   >
//                     {stats.pending.count}
//                   </p>

//                   <span
//                     className="
//                       mt-1
//                       block
//                       text-[10px]
//                       text-slate-500
//                     "
//                   >
//                     {stats.pending.seats} seats
//                     waiting
//                   </span>
//                 </div>
//               </div>

//               {/* RESPONSE RATE */}

//               <div className="space-y-2 pt-2">
//                 <div
//                   className="
//                     flex
//                     justify-between
//                     text-[11px]
//                     font-medium
//                     text-slate-400
//                   "
//                 >
//                   <span>
//                     RSVP Response rate
//                   </span>

//                   <span>
//                     {stats.total.count > 0
//                       ? Math.round(
//                           ((stats.accepted.count +
//                             stats.declined.count) /
//                             stats.total.count) *
//                             100
//                         )
//                       : 0}
//                     %
//                   </span>
//                 </div>

//                 <div
//                   className="
//                     flex
//                     h-2
//                     w-full
//                     overflow-hidden
//                     rounded-full
//                     bg-slate-800
//                   "
//                 >
//                   {stats.total.count > 0 && (
//                     <>
//                       <div
//                         style={{
//                           width: `${
//                             (stats.accepted.count /
//                               stats.total.count) *
//                             100
//                           }%`,
//                         }}
//                         className="
//                           h-full
//                           bg-emerald-500
//                         "
//                       />

//                       <div
//                         style={{
//                           width: `${
//                             (stats.declined.count /
//                               stats.total.count) *
//                             100
//                           }%`,
//                         }}
//                         className="
//                           h-full
//                           bg-rose-500
//                         "
//                       />
//                     </>
//                   )}
//                 </div>
//               </div>
//             </section>
//           )}

//           {/* =================================
//               ACTIVITY STREAM
//           ================================== */}

//           <section
//             className="
//               rounded-3xl
//               border
//               border-slate-800
//               bg-slate-900/50
//               p-6
//               backdrop-blur-md
//             "
//           >
//             <h4
//               className="
//                 mb-4
//                 flex
//                 items-center
//                 gap-2
//                 text-base
//                 font-bold
//                 text-slate-200
//               "
//             >
//               <span>⚡</span>
//               Activity Stream
//             </h4>

//             <div
//               className="
//                 max-h-[300px]
//                 space-y-4
//                 overflow-y-auto
//                 pr-1
//               "
//             >
//               {activities.length === 0 ? (
//                 <p
//                   className="
//                     py-8
//                     text-center
//                     text-xs
//                     text-slate-500
//                   "
//                 >
//                   Guests haven&apos;t responded
//                   yet. Once they click
//                   Accept/Decline, updates will
//                   appear here instantly.
//                 </p>
//               ) : (
//                 activities.map((act) => {
//                   const date =
//                     new Date(
//                       act.respondedAt
//                     );

//                   const time =
//                     date.toLocaleTimeString(
//                       [],
//                       {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       }
//                     );

//                   return (
//                     <div
//                       key={act._id}
//                       className="
//                         flex
//                         gap-3
//                         rounded-2xl
//                         border
//                         border-slate-900
//                         bg-slate-950/30
//                         p-3
//                         transition-colors
//                         hover:border-slate-800
//                       "
//                     >
//                       <span className="text-lg">
//                         {act.action ===
//                         "Accepted"
//                           ? "✅"
//                           : "❌"}
//                       </span>

//                       <div
//                         className="
//                           min-w-0
//                           flex-1
//                         "
//                       >
//                         <p
//                           className="
//                             text-xs
//                             leading-relaxed
//                             text-slate-300
//                           "
//                         >
//                           <strong
//                             className="
//                               font-semibold
//                               text-slate-100
//                             "
//                           >
//                             {act.guestName}
//                           </strong>{" "}
//                           {act.action ===
//                           "Accepted" ? (
//                             <span
//                               className="
//                                 text-emerald-400
//                               "
//                             >
//                               confirmed attendance
//                             </span>
//                           ) : (
//                             <span
//                               className="
//                                 text-rose-400
//                               "
//                             >
//                               declined attendance
//                             </span>
//                           )}
//                         </p>

//                         <span
//                           className="
//                             mt-1
//                             block
//                             text-[10px]
//                             text-slate-500
//                           "
//                         >
//                           Just now ({time})
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })
//               )}
//             </div>
//           </section>
//         </div>

//         {/* =================================
//             RIGHT COLUMN
//         ================================== */}

//         <div
//           className="
//             space-y-8
//             lg:col-span-2
//           "
//         >
//           {/* =================================
//               WHATSAPP TEMPLATE
//           ================================== */}

//           <section
//             className="
//               rounded-3xl
//               border
//               border-slate-800
//               bg-slate-900/50
//               p-6
//               backdrop-blur-md
//             "
//           >
//             <div
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 gap-4
//               "
//             >
//               <h4
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   text-base
//                   font-bold
//                   text-slate-200
//                 "
//               >
//                 <span>💬</span>
//                 WhatsApp Invitation Template
//               </h4>

//               <button
//                 onClick={() =>
//                   setShowTemplateEditor(
//                     !showTemplateEditor
//                   )
//                 }
//                 className="
//                   text-xs
//                   font-semibold
//                   text-pink-400
//                   hover:text-pink-300
//                   hover:underline
//                 "
//               >
//                 {showTemplateEditor
//                   ? "Collapse Editor"
//                   : "Customize Message"}
//               </button>
//             </div>

//             <p
//               className="
//                 mt-2
//                 text-xs
//                 leading-relaxed
//                 text-slate-400
//               "
//             >
//               When you click the WhatsApp
//               share button for any guest, the
//               platform compiles this template
//               dynamically.
//             </p>

//             {showTemplateEditor ? (
//               <div className="mt-4 space-y-4">
//                 <textarea
//                   value={whatsappTemplate}
//                   onChange={(e) =>
//                     setWhatsappTemplate(
//                       e.target.value
//                     )
//                   }
//                   rows={7}
//                   className="
//                     w-full
//                     rounded-2xl
//                     border
//                     border-slate-800
//                     bg-slate-950
//                     p-4
//                     font-mono
//                     text-xs
//                     leading-relaxed
//                     text-slate-200
//                     transition-all
//                     focus:border-pink-500
//                     focus:outline-none
//                     focus:ring-1
//                     focus:ring-pink-500
//                   "
//                 />

//                 <div
//                   className="
//                     rounded-xl
//                     border
//                     border-slate-900
//                     bg-slate-950/60
//                     p-3
//                   "
//                 >
//                   <h5
//                     className="
//                       mb-2
//                       text-[10px]
//                       font-bold
//                       uppercase
//                       tracking-wider
//                       text-slate-400
//                     "
//                   >
//                     Available Placeholders
//                   </h5>

//                   <div
//                     className="
//                       grid
//                       grid-cols-2
//                       gap-2
//                       font-mono
//                       text-[10px]
//                       text-slate-500
//                       md:grid-cols-4
//                     "
//                   >
//                     <div>
//                       <span className="text-pink-400">
//                         {"{guestName}"}
//                       </span>{" "}
//                       - Guest&apos;s Name
//                     </div>

//                     <div>
//                       <span className="text-pink-400">
//                         {"{groom}"}
//                       </span>{" "}
//                       - Groom&apos;s Name
//                     </div>

//                     <div>
//                       <span className="text-pink-400">
//                         {"{bride}"}
//                       </span>{" "}
//                       - Bride&apos;s Name
//                     </div>

//                     <div>
//                       <span className="text-pink-400">
//                         {"{seats}"}
//                       </span>{" "}
//                       - Guest seats
//                     </div>

//                     <div>
//                       <span className="text-pink-400">
//                         {"{date}"}
//                       </span>{" "}
//                       - Wedding Date
//                     </div>

//                     <div>
//                       <span className="text-pink-400">
//                         {"{venue}"}
//                       </span>{" "}
//                       - Wedding Venue
//                     </div>

//                     <div>
//                       <span className="text-pink-400">
//                         {"{link}"}
//                       </span>{" "}
//                       - Invitation URL
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div
//                 className="
//                   mt-4
//                   max-h-36
//                   overflow-y-auto
//                   whitespace-pre-line
//                   rounded-2xl
//                   border
//                   border-slate-900
//                   bg-slate-950/40
//                   p-4
//                   font-mono
//                   text-xs
//                   leading-relaxed
//                   text-slate-400
//                 "
//               >
//                 {whatsappTemplate}
//               </div>
//             )}
//           </section>

//           {/* =================================
//               GUEST DIRECTORY
//           ================================== */}

//           <section
//             className="
//               rounded-3xl
//               border
//               border-slate-800
//               bg-slate-900/50
//               p-6
//               backdrop-blur-md
//             "
//           >
//             <h4
//               className="
//                 mb-6
//                 flex
//                 items-center
//                 gap-2
//                 text-base
//                 font-bold
//                 text-slate-200
//               "
//             >
//               <span>📋</span>
//               Send Invitations & Manage RSVPs
//             </h4>

//             {/* FILTERS */}

//             <div
//               className="
//                 mb-6
//                 flex
//                 flex-col
//                 gap-3
//                 sm:flex-row
//               "
//             >
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(
//                     e.target.value
//                   )
//                 }
//                 placeholder="🔍 Search guest by name..."
//                 className="
//                   flex-1
//                   rounded-xl
//                   border
//                   border-slate-800
//                   bg-slate-950
//                   px-4
//                   py-2.5
//                   text-xs
//                   text-slate-200
//                   transition-colors
//                   focus:border-pink-500
//                   focus:outline-none
//                 "
//               />

//               <div
//                 className="
//                   flex
//                   rounded-xl
//                   border
//                   border-slate-800
//                   bg-slate-950
//                   p-0.5
//                 "
//               >
//                 {[
//                   {
//                     value: "all",
//                     label: "All",
//                   },
//                   {
//                     value: "accepted",
//                     label: "Accepted",
//                   },
//                   {
//                     value: "declined",
//                     label: "Declined",
//                   },
//                   {
//                     value: "pending",
//                     label: "Pending",
//                   },
//                 ].map((opt) => (
//                   <button
//                     key={opt.value}
//                     onClick={() =>
//                       setStatusFilter(
//                         opt.value
//                       )
//                     }
//                     className={`
//                       rounded-lg
//                       px-3
//                       py-1.5
//                       text-xs
//                       font-semibold
//                       transition-all
//                       ${
//                         statusFilter ===
//                         opt.value
//                           ? "bg-slate-800 text-white"
//                           : "text-slate-400 hover:text-slate-200"
//                       }
//                     `}
//                   >
//                     {opt.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* =================================
//                 GUEST TABLE
//             ================================== */}

//             <div
//               className="
//                 overflow-x-auto
//                 rounded-2xl
//                 border
//                 border-slate-800
//                 bg-slate-950/20
//               "
//             >
//               <table
//                 className="
//                   w-full
//                   border-collapse
//                   text-left
//                   text-xs
//                 "
//               >
//                 <thead>
//                   <tr
//                     className="
//                       border-b
//                       border-slate-800
//                       bg-slate-950/60
//                       font-semibold
//                       uppercase
//                       tracking-wider
//                       text-slate-400
//                     "
//                   >
//                     <th className="p-4">
//                       Guest Name
//                     </th>

//                     <th
//                       className="
//                         p-4
//                         text-center
//                       "
//                     >
//                       Seats
//                     </th>

//                     <th
//                       className="
//                         p-4
//                         text-center
//                       "
//                     >
//                       RSVP Status
//                     </th>

//                     <th
//                       className="
//                         p-4
//                         text-center
//                       "
//                     >
//                       Message
//                     </th>

//                     <th
//                       className="
//                         p-4
//                         text-right
//                       "
//                     >
//                       Quick Invite
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody
//                   className="
//                     divide-y
//                     divide-slate-800
//                   "
//                 >
//                   {guests.length === 0 ? (
//                     <tr>
//                       <td
//                         colSpan={5}
//                         className="
//                           p-12
//                           text-center
//                           font-medium
//                           text-slate-500
//                         "
//                       >
//                         No guests found. Import
//                         your guest list first or
//                         adjust search filters.
//                       </td>
//                     </tr>
//                   ) : (
//                     guests.map((g) => (
//                       <tr
//                         key={g._id}
//                         className="
//                           group
//                           transition-colors
//                           hover:bg-slate-950/30
//                         "
//                       >
//                         {/* GUEST NAME */}

//                         <td
//                           className="
//                             p-4
//                             font-semibold
//                             text-slate-200
//                           "
//                         >
//                           {g.guestName}
//                         </td>

//                         {/* SEATS */}

//                         <td
//                           className="
//                             p-4
//                             text-center
//                             text-slate-400
//                           "
//                         >
//                           {g.familyCount}
//                         </td>

//                         {/* RSVP STATUS */}

//                         <td
//                           className="
//                             p-4
//                             text-center
//                           "
//                         >
//                           <span
//                             className={`
//                               inline-block
//                               rounded-full
//                               border
//                               px-2.5
//                               py-0.5
//                               text-[10px]
//                               font-bold
//                               ${
//                                 g.attending ===
//                                 true
//                                   ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
//                                   : g.attending ===
//                                     false
//                                   ? "border-rose-500/20 bg-rose-500/10 text-rose-400"
//                                   : "border-amber-500/20 bg-amber-500/10 text-amber-400"
//                               }
//                             `}
//                           >
//                             {g.attending ===
//                             true
//                               ? "Accepted"
//                               : g.attending ===
//                                 false
//                               ? "Declined"
//                               : "Pending"}
//                           </span>
//                         </td>

//                         {/* =================================
//                             RSVP MESSAGE
//                         ================================== */}

//                         <td
//                           className="
//                             p-4
//                             text-center
//                           "
//                         >
//                           {g.message?.trim() ? (
//                             <button
//                               type="button"
//                               onClick={() =>
//                                 setSelectedMessageGuest(
//                                   g
//                                 )
//                               }
//                               className="
//                                 inline-flex
//                                 items-center
//                                 gap-1.5
//                                 whitespace-nowrap
//                                 rounded-lg
//                                 border
//                                 border-pink-500/20
//                                 bg-pink-500/10
//                                 px-3
//                                 py-1.5
//                                 text-[10px]
//                                 font-bold
//                                 text-pink-400
//                                 transition-all
//                                 hover:bg-pink-500/20
//                                 hover:text-pink-300
//                               "
//                             >
//                               💌 View Message
//                             </button>
//                           ) : (
//                             <span
//                               className="
//                                 text-[10px]
//                                 text-slate-600
//                               "
//                             >
//                               —
//                             </span>
//                           )}
//                         </td>

//                         {/* QUICK INVITE */}

//                         <td
//                           className="
//                             p-4
//                             text-right
//                           "
//                         >
//                           <div
//                             className="
//                               flex
//                               flex-wrap
//                               items-center
//                               justify-end
//                               gap-2
//                             "
//                           >
//                             {/* COPY */}

//                             <button
//                               onClick={() =>
//                                 handleCopyLink(
//                                   g
//                                 )
//                               }
//                               className={`
//                                 rounded-lg
//                                 border
//                                 px-3
//                                 py-1.5
//                                 text-[10px]
//                                 font-bold
//                                 transition-all
//                                 ${
//                                   copiedGuestId ===
//                                   g._id
//                                     ? "border-emerald-500 bg-emerald-600 text-white"
//                                     : "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-slate-200"
//                                 }
//                               `}
//                             >
//                               {copiedGuestId ===
//                               g._id
//                                 ? "Copied!"
//                                 : "📋 Copy Link"}
//                             </button>

//                             {/* WHATSAPP */}

//                             <button
//                               onClick={() =>
//                                 handleWhatsAppShare(
//                                   g
//                                 )
//                               }
//                               className="
//                                 flex
//                                 items-center
//                                 gap-1.5
//                                 rounded-lg
//                                 bg-emerald-500
//                                 px-3
//                                 py-1.5
//                                 text-[10px]
//                                 font-bold
//                                 text-slate-950
//                                 transition-all
//                                 hover:bg-emerald-600
//                               "
//                             >
//                               <span>
//                                 💬
//                               </span>
//                               WhatsApp
//                             </button>

//                             {/* SHARE */}

//                             <button
//                               onClick={() =>
//                                 handleShareInvitation(
//                                   g
//                                 )
//                               }
//                               className="
//                                 flex
//                                 items-center
//                                 gap-1.5
//                                 rounded-lg
//                                 bg-pink-500
//                                 px-3
//                                 py-1.5
//                                 text-[10px]
//                                 font-bold
//                                 text-white
//                                 transition-all
//                                 hover:bg-pink-600
//                               "
//                               title={`Share invitation link for ${g.guestName}`}
//                             >
//                               <span>
//                                 🔗
//                               </span>
//                               Share Invitation
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         </div>
//       </main>

//       {/* =====================================
//           RSVP MESSAGE MODAL
//       ====================================== */}

//       {selectedMessageGuest && (
//         <div
//           className="
//             fixed
//             inset-0
//             z-[100]
//             flex
//             items-center
//             justify-center
//             bg-slate-950/80
//             p-4
//             backdrop-blur-sm
//           "
//           onClick={() =>
//             setSelectedMessageGuest(null)
//           }
//         >
//           <div
//             className="
//               relative
//               w-full
//               max-w-md
//               rounded-3xl
//               border
//               border-slate-800
//               bg-slate-900
//               p-6
//               shadow-2xl
//             "
//             onClick={(e) =>
//               e.stopPropagation()
//             }
//           >
//             {/* CLOSE */}

//             <button
//               type="button"
//               onClick={() =>
//                 setSelectedMessageGuest(
//                   null
//                 )
//               }
//               className="
//                 absolute
//                 right-4
//                 top-4
//                 flex
//                 h-8
//                 w-8
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-slate-800
//                 text-slate-400
//                 transition-colors
//                 hover:bg-slate-700
//                 hover:text-white
//               "
//             >
//               ✕
//             </button>

//             {/* HEADER */}

//             <div className="mb-5">
//               <div
//                 className="
//                   mb-4
//                   flex
//                   h-12
//                   w-12
//                   items-center
//                   justify-center
//                   rounded-2xl
//                   border
//                   border-pink-500/20
//                   bg-pink-500/10
//                   text-xl
//                 "
//               >
//                 💌
//               </div>

//               <p
//                 className="
//                   text-[10px]
//                   font-bold
//                   uppercase
//                   tracking-[0.18em]
//                   text-pink-400
//                 "
//               >
//                 RSVP Message
//               </p>

//               <h3
//                 className="
//                   mt-1
//                   pr-10
//                   text-xl
//                   font-bold
//                   text-white
//                 "
//               >
//                 {
//                   selectedMessageGuest.guestName
//                 }
//               </h3>

//               <div
//                 className="
//                   mt-2
//                   flex
//                   flex-wrap
//                   items-center
//                   gap-2
//                 "
//               >
//                 <span
//                   className={`
//                     rounded-full
//                     border
//                     px-2.5
//                     py-1
//                     text-[10px]
//                     font-bold
//                     ${
//                       selectedMessageGuest.attending ===
//                       true
//                         ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
//                         : selectedMessageGuest.attending ===
//                           false
//                         ? "border-rose-500/20 bg-rose-500/10 text-rose-400"
//                         : "border-amber-500/20 bg-amber-500/10 text-amber-400"
//                     }
//                   `}
//                 >
//                   {selectedMessageGuest.attending ===
//                   true
//                     ? "✓ Accepted"
//                     : selectedMessageGuest.attending ===
//                       false
//                     ? "✕ Declined"
//                     : "Pending"}
//                 </span>

//                 <span
//                   className="
//                     text-xs
//                     text-slate-500
//                   "
//                 >
//                   {
//                     selectedMessageGuest.familyCount
//                   }{" "}
//                   {selectedMessageGuest.familyCount ===
//                   1
//                     ? "seat"
//                     : "seats"}
//                 </span>
//               </div>
//             </div>

//             {/* MESSAGE */}

//             <div
//               className="
//                 rounded-2xl
//                 border
//                 border-slate-800
//                 bg-slate-950/60
//                 p-5
//               "
//             >
//               <p
//                 className="
//                   whitespace-pre-wrap
//                   break-words
//                   text-sm
//                   leading-7
//                   text-slate-300
//                 "
//               >
//                 “
//                 {
//                   selectedMessageGuest.message
//                 }
//                 ”
//               </p>
//             </div>

//             {/* RESPONSE TIME */}

//             {selectedMessageGuest.respondedAt && (
//               <p
//                 className="
//                   mt-4
//                   text-right
//                   text-[10px]
//                   text-slate-500
//                 "
//               >
//                 Received{" "}
//                 {new Date(
//                   selectedMessageGuest.respondedAt
//                 ).toLocaleString()}
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import { useEffect, useState, use } from "react";

/* =========================================
   TYPES
========================================= */

interface Guest {
  _id: string;
  guestName: string;
  familyCount: number;
  attending: boolean | null;
  respondedAt: string | null;
  token: string;
  message?: string;
}

interface Wedding {
  _id: string;
  brideName: string;
  groomName: string;
  weddingDate: string;
  venue: string;
}

interface Stats {
  total: {
    count: number;
    seats: number;
  };

  accepted: {
    count: number;
    seats: number;
  };

  declined: {
    count: number;
    seats: number;
  };

  pending: {
    count: number;
    seats: number;
  };
}

interface Activity {
  _id: string;
  guestName: string;
  action: string;
  respondedAt: string;
}

/* =========================================
   CLIENT DASHBOARD
========================================= */

export default function ClientDashboardPage({
  params,
}: {
  params: Promise<{ weddingId: string }>;
}) {
  const { weddingId } = use(params);

  /* =======================================
     DASHBOARD STATES
  ======================================== */

  const [wedding, setWedding] =
    useState<Wedding | null>(null);

  const [stats, setStats] =
    useState<Stats | null>(null);

  const [guests, setGuests] =
    useState<Guest[]>([]);

  const [activities, setActivities] =
    useState<Activity[]>([]);

  const [loading, setLoading] =
    useState(true);

  /* =======================================
     SEARCH + FILTER
  ======================================== */

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");

  /* =======================================
     WHATSAPP TEMPLATE
  ======================================== */

  const [
    showTemplateEditor,
    setShowTemplateEditor,
  ] = useState(false);

  const [
    whatsappTemplate,
    setWhatsappTemplate,
  ] = useState(
    `Hello *{guestName}*! 🌸

We are delighted to invite you to celebrate our special day with us. We would be honored by your presence at the wedding of *{groom} & {bride}*.

📅 *Date:* {date}
📍 *Venue:* {venue}
🎟️ *Reserved Seats:* {seats}

Please confirm your RSVP by clicking this link:
{link}

Looking forward to celebrating with you! ✨`
  );

  /* =======================================
     GENERAL STATES
  ======================================== */

  const [origin, setOrigin] =
    useState("");

  const [
    copiedGuestId,
    setCopiedGuestId,
  ] = useState<string | null>(null);

  const [
    generalLinkCopied,
    setGeneralLinkCopied,
  ] = useState(false);

  /* RSVP message modal */

  const [
    selectedMessageGuest,
    setSelectedMessageGuest,
  ] = useState<Guest | null>(null);

  /* =======================================
     LOAD DASHBOARD DATA
  ======================================== */

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }

    fetchDashboardData(true);

    /* Poll every 5 seconds */

    const interval = setInterval(() => {
      fetchDashboardData(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [weddingId, search, statusFilter]);

  /* =======================================
     FETCH DASHBOARD
  ======================================== */

  async function fetchDashboardData(
    showLoadingIndicator = false
  ) {
    if (showLoadingIndicator) {
      setLoading(true);
    }

    try {
      const res = await fetch(
        `/api/client/dashboard?weddingId=${weddingId}&search=${encodeURIComponent(
          search
        )}&status=${statusFilter}`
      );

      const data = await res.json();

      if (res.ok) {
        setWedding(data.wedding);
        setStats(data.stats);
        setGuests(data.guests);
        setActivities(data.activities);
      }
    } catch (err) {
      console.error(
        "Error polling client dashboard:",
        err
      );
    } finally {
      if (showLoadingIndicator) {
        setLoading(false);
      }
    }
  }

  /* =======================================
     COMPILE WHATSAPP TEMPLATE
  ======================================== */

  function compileTemplate(
    guest: Guest
  ): string {
    if (!wedding) return "";

    const inviteLink =
      `${origin}/invite/${guest.token}`;

    return whatsappTemplate
      .replace(
        /{guestName}/g,
        guest.guestName
      )
      .replace(
        /{groom}/g,
        wedding.groomName
      )
      .replace(
        /{bride}/g,
        wedding.brideName
      )
      .replace(
        /{date}/g,
        wedding.weddingDate
      )
      .replace(
        /{venue}/g,
        wedding.venue
      )
      .replace(
        /{seats}/g,
        guest.familyCount.toString()
      )
      .replace(
        /{link}/g,
        inviteLink
      );
  }

  /* =======================================
     WHATSAPP SHARE
  ======================================== */

  function handleWhatsAppShare(
    guest: Guest
  ) {
    const text =
      compileTemplate(guest);

    const encodedText =
      encodeURIComponent(text);

    const whatsappUrl =
      `https://api.whatsapp.com/send?text=${encodedText}`;

    window.open(
      whatsappUrl,
      "_blank"
    );
  }

  /* =======================================
     COPY PERSONAL INVITATION LINK
  ======================================== */

  function handleCopyLink(
    guest: Guest
  ) {
    const inviteLink =
      `${origin}/invite/${guest.token}`;

    navigator.clipboard.writeText(
      inviteLink
    );

    setCopiedGuestId(guest._id);

    setTimeout(() => {
      setCopiedGuestId(null);
    }, 2000);
  }

  /* =======================================
     PERSONAL INVITATION SHARE
  ======================================== */

  async function handleShareInvitation(
    guest: Guest
  ) {
    const inviteLink =
      `${origin}/invite/${guest.token}`;

    if (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function"
    ) {
      try {
        await navigator.share({
          title: "Wedding Invitation",

          text:
            `You're invited to the wedding of ` +
            `${wedding?.groomName} & ` +
            `${wedding?.brideName}! 💍`,

          url: inviteLink,
        });

        return;
      } catch {
        // Native share cancelled/failed.
      }
    }

    await navigator.clipboard.writeText(
      inviteLink
    );

    setCopiedGuestId(
      guest._id
    );

    setTimeout(() => {
      setCopiedGuestId(null);
    }, 2000);
  }

  /* =======================================
     GENERAL INVITATION LINK
  ======================================== */

  function getGeneralInvitationLink() {
    return `${origin}/invite/general/${weddingId}`;
  }

  /* =======================================
     COPY GENERAL INVITATION
  ======================================== */

  async function handleCopyGeneralLink() {
    const generalLink =
      getGeneralInvitationLink();

    await navigator.clipboard.writeText(
      generalLink
    );

    setGeneralLinkCopied(true);

    setTimeout(() => {
      setGeneralLinkCopied(false);
    }, 2000);
  }

  /* =======================================
     VIEW GENERAL INVITATION
  ======================================== */

  function handleViewGeneralInvitation() {
    const generalLink =
      getGeneralInvitationLink();

    window.open(
      generalLink,
      "_blank",
      "noopener,noreferrer"
    );
  }

  /* =======================================
     SHARE GENERAL INVITATION
  ======================================== */

  async function handleShareGeneralInvitation() {
    const generalLink =
      getGeneralInvitationLink();

    if (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function"
    ) {
      try {
        await navigator.share({
          title: "Wedding Invitation",

          text:
            `You're invited to celebrate the wedding of ` +
            `${wedding?.groomName} & ` +
            `${wedding?.brideName}! 💍`,

          url: generalLink,
        });

        return;
      } catch {
        // Native share cancelled/failed.
      }
    }

    await navigator.clipboard.writeText(
      generalLink
    );

    setGeneralLinkCopied(true);

    setTimeout(() => {
      setGeneralLinkCopied(false);
    }, 2000);
  }

  /* =======================================
     GENERAL WHATSAPP SHARE
  ======================================== */

  function handleGeneralWhatsAppShare() {
    if (!wedding) return;

    const generalLink =
      getGeneralInvitationLink();

    const text =
      `💍 *Wedding Invitation*\n\n` +
      `We are delighted to invite you to celebrate the wedding of ` +
      `*${wedding.groomName} & ${wedding.brideName}*.\n\n` +
      `📅 *Date:* ${wedding.weddingDate}\n` +
      `📍 *Venue:* ${wedding.venue}\n\n` +
      `View the invitation here:\n${generalLink}\n\n` +
      `We look forward to celebrating with you! ✨`;

    const whatsappUrl =
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        text
      )}`;

    window.open(
      whatsappUrl,
      "_blank"
    );
  }

  /* =======================================
     LOADING
  ======================================== */

  if (loading && !wedding) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-950
        "
      >
        <div className="space-y-4 text-center">
          <div
            className="
              mx-auto
              h-12
              w-12
              animate-spin
              rounded-full
              border-b-2
              border-pink-500
            "
          />

          <p className="text-sm text-slate-400">
            Preparing your dashboard...
          </p>
        </div>
      </div>
    );
  }

  /* =======================================
     INVALID DASHBOARD
  ======================================== */

  if (!wedding) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-950
        "
      >
        <div
          className="
            max-w-sm
            space-y-4
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-6
            text-center
          "
        >
          <span className="text-4xl">
            ⚠️
          </span>

          <h3
            className="
              mt-4
              text-lg
              font-bold
              text-slate-100
            "
          >
            Invalid Dashboard Link
          </h3>

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            This dashboard does not exist or has
            been removed. Please contact your
            wedding administrator.
          </p>
        </div>
      </div>
    );
  }

  /* =======================================
     DASHBOARD
  ======================================== */

  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        pb-16
        font-sans
        text-slate-100
      "
    >
      {/* ===================================
          HEADER
      ==================================== */}

      <header
        className="
          relative
          overflow-hidden
          border-b
          border-slate-900
          bg-gradient-to-b
          from-rose-950/30
          to-slate-950/0
          px-6
          py-12
          text-center
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,63,94,0.15),rgba(255,255,255,0))]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            space-y-3
          "
        >
          <span
            className="
              inline-block
              rounded-full
              border
              border-pink-500/20
              bg-pink-500/10
              px-4
              py-1.5
              text-xs
              font-semibold
              text-pink-400
            "
          >
            💖 Client Celebration Hub
          </span>

          <h1
            className="
              bg-gradient-to-r
              from-pink-300
              via-rose-300
              to-amber-300
              bg-clip-text
              text-4xl
              font-extrabold
              tracking-tight
              text-transparent
              md:text-5xl
            "
          >
            {wedding.groomName} &{" "}
            {wedding.brideName}
          </h1>

          <p
            className="
              mx-auto
              mt-4
              flex
              max-w-lg
              flex-wrap
              items-center
              justify-center
              gap-3
              text-sm
              text-slate-400
            "
          >
            <span>
              📅 {wedding.weddingDate}
            </span>

            <span className="text-slate-700">
              |
            </span>

            <span>
              📍 {wedding.venue}
            </span>
          </p>
        </div>
      </header>

      {/* ===================================
          MAIN
      ==================================== */}

      <main
        className="
          mx-auto
          mt-12
          grid
          max-w-7xl
          grid-cols-1
          gap-8
          px-6
          lg:grid-cols-3
        "
      >
        {/* =================================
            LEFT COLUMN
        ================================== */}

        <div
          className="
            space-y-8
            lg:col-span-1
          "
        >
          {/* RSVP OVERVIEW */}

          {stats && (
            <section
              className="
                space-y-6
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/50
                p-6
                backdrop-blur-md
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <h4
                  className="
                    text-base
                    font-bold
                    text-slate-200
                  "
                >
                  Real-time RSVP Overview
                </h4>

                <span
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-2
                    py-1
                    text-[10px]
                    text-emerald-400
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-emerald-500
                    "
                  />

                  LIVE
                </span>
              </div>

              {/* STATS */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-4
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/40
                    p-4
                  "
                >
                  <span
                    className="
                      text-xs
                      font-medium
                      text-slate-400
                    "
                  >
                    Invited
                  </span>

                  <p
                    className="
                      mt-1
                      text-2xl
                      font-extrabold
                      text-white
                    "
                  >
                    {stats.total.count}
                  </p>

                  <span
                    className="
                      mt-1
                      block
                      text-[10px]
                      text-slate-500
                    "
                  >
                    {stats.total.seats} total seats
                  </span>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/40
                    p-4
                  "
                >
                  <span
                    className="
                      text-xs
                      font-medium
                      text-emerald-400
                    "
                  >
                    Accepted
                  </span>

                  <p
                    className="
                      mt-1
                      text-2xl
                      font-extrabold
                      text-emerald-400
                    "
                  >
                    {stats.accepted.count}
                  </p>

                  <span
                    className="
                      mt-1
                      block
                      text-[10px]
                      text-slate-500
                    "
                  >
                    {stats.accepted.seats} seats filled
                  </span>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/40
                    p-4
                  "
                >
                  <span
                    className="
                      text-xs
                      font-medium
                      text-rose-400
                    "
                  >
                    Declined
                  </span>

                  <p
                    className="
                      mt-1
                      text-2xl
                      font-extrabold
                      text-rose-400
                    "
                  >
                    {stats.declined.count}
                  </p>

                  <span
                    className="
                      mt-1
                      block
                      text-[10px]
                      text-slate-500
                    "
                  >
                    {stats.declined.seats} seats freed
                  </span>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/40
                    p-4
                  "
                >
                  <span
                    className="
                      text-xs
                      font-medium
                      text-amber-400
                    "
                  >
                    Pending
                  </span>

                  <p
                    className="
                      mt-1
                      text-2xl
                      font-extrabold
                      text-amber-400
                    "
                  >
                    {stats.pending.count}
                  </p>

                  <span
                    className="
                      mt-1
                      block
                      text-[10px]
                      text-slate-500
                    "
                  >
                    {stats.pending.seats} seats waiting
                  </span>
                </div>
              </div>

              {/* RESPONSE RATE */}

              <div className="space-y-2 pt-2">
                <div
                  className="
                    flex
                    justify-between
                    text-[11px]
                    font-medium
                    text-slate-400
                  "
                >
                  <span>
                    RSVP Response rate
                  </span>

                  <span>
                    {stats.total.count > 0
                      ? Math.round(
                          ((stats.accepted.count +
                            stats.declined.count) /
                            stats.total.count) *
                            100
                        )
                      : 0}
                    %
                  </span>
                </div>

                <div
                  className="
                    flex
                    h-2
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-slate-800
                  "
                >
                  {stats.total.count > 0 && (
                    <>
                      <div
                        style={{
                          width: `${
                            (stats.accepted.count /
                              stats.total.count) *
                            100
                          }%`,
                        }}
                        className="
                          h-full
                          bg-emerald-500
                        "
                      />

                      <div
                        style={{
                          width: `${
                            (stats.declined.count /
                              stats.total.count) *
                            100
                          }%`,
                        }}
                        className="
                          h-full
                          bg-rose-500
                        "
                      />
                    </>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* =================================
              ACTIVITY STREAM
          ================================== */}

          <section
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/50
              p-6
              backdrop-blur-md
            "
          >
            <h4
              className="
                mb-4
                flex
                items-center
                gap-2
                text-base
                font-bold
                text-slate-200
              "
            >
              <span>⚡</span>
              Activity Stream
            </h4>

            <div
              className="
                max-h-[300px]
                space-y-4
                overflow-y-auto
                pr-1
              "
            >
              {activities.length === 0 ? (
                <p
                  className="
                    py-8
                    text-center
                    text-xs
                    text-slate-500
                  "
                >
                  Guests haven&apos;t responded yet.
                  Once they click Accept/Decline,
                  updates will appear here instantly.
                </p>
              ) : (
                activities.map((act) => {
                  const date =
                    new Date(act.respondedAt);

                  const time =
                    date.toLocaleTimeString(
                      [],
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    );

                  return (
                    <div
                      key={act._id}
                      className="
                        flex
                        gap-3
                        rounded-2xl
                        border
                        border-slate-900
                        bg-slate-950/30
                        p-3
                        transition-colors
                        hover:border-slate-800
                      "
                    >
                      <span className="text-lg">
                        {act.action ===
                        "Accepted"
                          ? "✅"
                          : "❌"}
                      </span>

                      <div
                        className="
                          min-w-0
                          flex-1
                        "
                      >
                        <p
                          className="
                            text-xs
                            leading-relaxed
                            text-slate-300
                          "
                        >
                          <strong
                            className="
                              font-semibold
                              text-slate-100
                            "
                          >
                            {act.guestName}
                          </strong>{" "}
                          {act.action ===
                          "Accepted" ? (
                            <span
                              className="
                                text-emerald-400
                              "
                            >
                              confirmed attendance
                            </span>
                          ) : (
                            <span
                              className="
                                text-rose-400
                              "
                            >
                              declined attendance
                            </span>
                          )}
                        </p>

                        <span
                          className="
                            mt-1
                            block
                            text-[10px]
                            text-slate-500
                          "
                        >
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

        {/* =================================
            RIGHT COLUMN
        ================================== */}

        <div
          className="
            space-y-8
            lg:col-span-2
          "
        >
          {/* =================================
              GENERAL INVITATION
          ================================== */}

          <section
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-pink-500/20
              bg-gradient-to-br
              from-pink-500/10
              via-slate-900/70
              to-amber-500/5
              p-6
              backdrop-blur-md
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-pink-500/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="min-w-0 flex-1">
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-pink-500/20
                      bg-pink-500/10
                      text-xl
                    "
                  >
                    💌
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-pink-400
                      "
                    >
                      Shareable Link
                    </p>

                    <h4
                      className="
                        text-base
                        font-bold
                        text-slate-100
                      "
                    >
                      General Invitation
                    </h4>
                  </div>
                </div>

                <p
                  className="
                    max-w-lg
                    text-xs
                    leading-relaxed
                    text-slate-400
                  "
                >
                  Share this invitation with guests
                  who don&apos;t need a personalized
                  name or reserved seat count.
                </p>

                <div
                  className="
                    mt-4
                    max-w-full
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-950/60
                    px-4
                    py-3
                  "
                >
                  <p
                    className="
                      truncate
                      font-mono
                      text-[10px]
                      text-slate-500
                    "
                  >
                    {origin
                      ? `${origin}/invite/general/${weddingId}`
                      : `/invite/general/${weddingId}`}
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  shrink-0
                  flex-wrap
                  gap-2
                  sm:max-w-[260px]
                  sm:justify-end
                "
              >
                <button
                  type="button"
                  onClick={
                    handleViewGeneralInvitation
                  }
                  className="
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-slate-200
                    transition-all
                    hover:border-slate-600
                    hover:bg-slate-800
                  "
                >
                  👁 View
                </button>

                <button
                  type="button"
                  onClick={
                    handleCopyGeneralLink
                  }
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    transition-all
                    ${
                      generalLinkCopied
                        ? "border-emerald-500 bg-emerald-600 text-white"
                        : "border-pink-500/30 bg-pink-500 text-white hover:bg-pink-600"
                    }
                  `}
                >
                  {generalLinkCopied
                    ? "✓ Copied!"
                    : "📋 Copy Link"}
                </button>

                <button
                  type="button"
                  onClick={
                    handleGeneralWhatsAppShare
                  }
                  className="
                    rounded-xl
                    bg-emerald-500
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-slate-950
                    transition-all
                    hover:bg-emerald-600
                  "
                >
                  💬 WhatsApp
                </button>

                <button
                  type="button"
                  onClick={
                    handleShareGeneralInvitation
                  }
                  className="
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-800
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-slate-200
                    transition-all
                    hover:bg-slate-700
                  "
                >
                  🔗 Share
                </button>
              </div>
            </div>
          </section>

          {/* =================================
              WHATSAPP TEMPLATE
          ================================== */}

          <section
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/50
              p-6
              backdrop-blur-md
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <h4
                className="
                  flex
                  items-center
                  gap-2
                  text-base
                  font-bold
                  text-slate-200
                "
              >
                <span>💬</span>
                WhatsApp Invitation Template
              </h4>

              <button
                onClick={() =>
                  setShowTemplateEditor(
                    !showTemplateEditor
                  )
                }
                className="
                  text-xs
                  font-semibold
                  text-pink-400
                  hover:text-pink-300
                  hover:underline
                "
              >
                {showTemplateEditor
                  ? "Collapse Editor"
                  : "Customize Message"}
              </button>
            </div>

            <p
              className="
                mt-2
                text-xs
                leading-relaxed
                text-slate-400
              "
            >
              When you click the WhatsApp share
              button for any guest, the platform
              compiles this template dynamically.
            </p>

            {showTemplateEditor ? (
              <div className="mt-4 space-y-4">
                <textarea
                  value={whatsappTemplate}
                  onChange={(e) =>
                    setWhatsappTemplate(
                      e.target.value
                    )
                  }
                  rows={7}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950
                    p-4
                    font-mono
                    text-xs
                    leading-relaxed
                    text-slate-200
                    transition-all
                    focus:border-pink-500
                    focus:outline-none
                    focus:ring-1
                    focus:ring-pink-500
                  "
                />

                <div
                  className="
                    rounded-xl
                    border
                    border-slate-900
                    bg-slate-950/60
                    p-3
                  "
                >
                  <h5
                    className="
                      mb-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    Available Placeholders
                  </h5>

                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-2
                      font-mono
                      text-[10px]
                      text-slate-500
                      md:grid-cols-4
                    "
                  >
                    <div>
                      <span className="text-pink-400">
                        {"{guestName}"}
                      </span>{" "}
                      - Guest&apos;s Name
                    </div>

                    <div>
                      <span className="text-pink-400">
                        {"{groom}"}
                      </span>{" "}
                      - Groom&apos;s Name
                    </div>

                    <div>
                      <span className="text-pink-400">
                        {"{bride}"}
                      </span>{" "}
                      - Bride&apos;s Name
                    </div>

                    <div>
                      <span className="text-pink-400">
                        {"{seats}"}
                      </span>{" "}
                      - Guest seats
                    </div>

                    <div>
                      <span className="text-pink-400">
                        {"{date}"}
                      </span>{" "}
                      - Wedding Date
                    </div>

                    <div>
                      <span className="text-pink-400">
                        {"{venue}"}
                      </span>{" "}
                      - Wedding Venue
                    </div>

                    <div>
                      <span className="text-pink-400">
                        {"{link}"}
                      </span>{" "}
                      - Invitation URL
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="
                  mt-4
                  max-h-36
                  overflow-y-auto
                  whitespace-pre-line
                  rounded-2xl
                  border
                  border-slate-900
                  bg-slate-950/40
                  p-4
                  font-mono
                  text-xs
                  leading-relaxed
                  text-slate-400
                "
              >
                {whatsappTemplate}
              </div>
            )}
          </section>

          {/* =================================
              GUEST DIRECTORY
          ================================== */}

          <section
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/50
              p-6
              backdrop-blur-md
            "
          >
            <h4
              className="
                mb-6
                flex
                items-center
                gap-2
                text-base
                font-bold
                text-slate-200
              "
            >
              <span>📋</span>
              Send Invitations & Manage RSVPs
            </h4>

            {/* FILTERS */}

            <div
              className="
                mb-6
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="🔍 Search guest by name..."
                className="
                  flex-1
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-950
                  px-4
                  py-2.5
                  text-xs
                  text-slate-200
                  transition-colors
                  focus:border-pink-500
                  focus:outline-none
                "
              />

              <div
                className="
                  flex
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-950
                  p-0.5
                "
              >
                {[
                  {
                    value: "all",
                    label: "All",
                  },
                  {
                    value: "accepted",
                    label: "Accepted",
                  },
                  {
                    value: "declined",
                    label: "Declined",
                  },
                  {
                    value: "pending",
                    label: "Pending",
                  },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      setStatusFilter(
                        opt.value
                      )
                    }
                    className={`
                      rounded-lg
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      transition-all
                      ${
                        statusFilter ===
                        opt.value
                          ? "bg-slate-800 text-white"
                          : "text-slate-400 hover:text-slate-200"
                      }
                    `}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* GUEST TABLE */}

            <div
              className="
                overflow-x-auto
                rounded-2xl
                border
                border-slate-800
                bg-slate-950/20
              "
            >
              <table
                className="
                  w-full
                  border-collapse
                  text-left
                  text-xs
                "
              >
                <thead>
                  <tr
                    className="
                      border-b
                      border-slate-800
                      bg-slate-950/60
                      font-semibold
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    <th className="p-4">
                      Guest Name
                    </th>

                    <th className="p-4 text-center">
                      Seats
                    </th>

                    <th className="p-4 text-center">
                      RSVP Status
                    </th>

                    <th className="p-4 text-center">
                      Message
                    </th>

                    <th className="p-4 text-right">
                      Quick Invite
                    </th>
                  </tr>
                </thead>

                <tbody
                  className="
                    divide-y
                    divide-slate-800
                  "
                >
                  {guests.length === 0 ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="
                          p-12
                          text-center
                          font-medium
                          text-slate-500
                        "
                      >
                        No guests found. Import your
                        guest list first or adjust
                        search filters.
                      </td>
                    </tr>
                  ) : (
                    guests.map((g) => (
                      <tr
                        key={g._id}
                        className="
                          group
                          transition-colors
                          hover:bg-slate-950/30
                        "
                      >
                        <td
                          className="
                            p-4
                            font-semibold
                            text-slate-200
                          "
                        >
                          {g.guestName}
                        </td>

                        <td
                          className="
                            p-4
                            text-center
                            text-slate-400
                          "
                        >
                          {g.familyCount}
                        </td>

                        <td className="p-4 text-center">
                          <span
                            className={`
                              inline-block
                              rounded-full
                              border
                              px-2.5
                              py-0.5
                              text-[10px]
                              font-bold
                              ${
                                g.attending === true
                                  ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                  : g.attending === false
                                    ? "border-rose-500/20 bg-rose-500/10 text-rose-400"
                                    : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                              }
                            `}
                          >
                            {g.attending === true
                              ? "Accepted"
                              : g.attending === false
                                ? "Declined"
                                : "Pending"}
                          </span>
                        </td>

                        <td className="p-4 text-center">
                          {g.message?.trim() ? (
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedMessageGuest(
                                  g
                                )
                              }
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                                whitespace-nowrap
                                rounded-lg
                                border
                                border-pink-500/20
                                bg-pink-500/10
                                px-3
                                py-1.5
                                text-[10px]
                                font-bold
                                text-pink-400
                                transition-all
                                hover:bg-pink-500/20
                                hover:text-pink-300
                              "
                            >
                              💌 View Message
                            </button>
                          ) : (
                            <span
                              className="
                                text-[10px]
                                text-slate-600
                              "
                            >
                              —
                            </span>
                          )}
                        </td>

                        <td className="p-4 text-right">
                          <div
                            className="
                              flex
                              flex-wrap
                              items-center
                              justify-end
                              gap-2
                            "
                          >
                            <button
                              onClick={() =>
                                handleCopyLink(g)
                              }
                              className={`
                                rounded-lg
                                border
                                px-3
                                py-1.5
                                text-[10px]
                                font-bold
                                transition-all
                                ${
                                  copiedGuestId ===
                                  g._id
                                    ? "border-emerald-500 bg-emerald-600 text-white"
                                    : "border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-slate-200"
                                }
                              `}
                            >
                              {copiedGuestId === g._id
                                ? "Copied!"
                                : "📋 Copy Link"}
                            </button>

                            <button
                              onClick={() =>
                                handleWhatsAppShare(
                                  g
                                )
                              }
                              className="
                                flex
                                items-center
                                gap-1.5
                                rounded-lg
                                bg-emerald-500
                                px-3
                                py-1.5
                                text-[10px]
                                font-bold
                                text-slate-950
                                transition-all
                                hover:bg-emerald-600
                              "
                            >
                              <span>💬</span>
                              WhatsApp
                            </button>

                            <button
                              onClick={() =>
                                handleShareInvitation(
                                  g
                                )
                              }
                              className="
                                flex
                                items-center
                                gap-1.5
                                rounded-lg
                                bg-pink-500
                                px-3
                                py-1.5
                                text-[10px]
                                font-bold
                                text-white
                                transition-all
                                hover:bg-pink-600
                              "
                              title={`Share invitation link for ${g.guestName}`}
                            >
                              <span>🔗</span>
                              Share Invitation
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

      {/* =====================================
          RSVP MESSAGE MODAL
      ====================================== */}

      {selectedMessageGuest && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-slate-950/80
            p-4
            backdrop-blur-sm
          "
          onClick={() =>
            setSelectedMessageGuest(null)
          }
        >
          <div
            className="
              relative
              w-full
              max-w-md
              rounded-3xl
              border
              border-slate-800
              bg-slate-900
              p-6
              shadow-2xl
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              type="button"
              onClick={() =>
                setSelectedMessageGuest(
                  null
                )
              }
              className="
                absolute
                right-4
                top-4
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-slate-800
                text-slate-400
                transition-colors
                hover:bg-slate-700
                hover:text-white
              "
            >
              ✕
            </button>

            <div className="mb-5">
              <div
                className="
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-pink-500/20
                  bg-pink-500/10
                  text-xl
                "
              >
                💌
              </div>

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-pink-400
                "
              >
                RSVP Message
              </p>

              <h3
                className="
                  mt-1
                  pr-10
                  text-xl
                  font-bold
                  text-white
                "
              >
                {selectedMessageGuest.guestName}
              </h3>

              <div
                className="
                  mt-2
                  flex
                  flex-wrap
                  items-center
                  gap-2
                "
              >
                <span
                  className={`
                    rounded-full
                    border
                    px-2.5
                    py-1
                    text-[10px]
                    font-bold
                    ${
                      selectedMessageGuest.attending ===
                      true
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                        : selectedMessageGuest.attending ===
                            false
                          ? "border-rose-500/20 bg-rose-500/10 text-rose-400"
                          : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                    }
                  `}
                >
                  {selectedMessageGuest.attending ===
                  true
                    ? "✓ Accepted"
                    : selectedMessageGuest.attending ===
                        false
                      ? "✕ Declined"
                      : "Pending"}
                </span>

                <span className="text-xs text-slate-500">
                  {selectedMessageGuest.familyCount}{" "}
                  {selectedMessageGuest.familyCount ===
                  1
                    ? "seat"
                    : "seats"}
                </span>
              </div>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-950/60
                p-5
              "
            >
              <p
                className="
                  whitespace-pre-wrap
                  break-words
                  text-sm
                  leading-7
                  text-slate-300
                "
              >
                “{selectedMessageGuest.message}”
              </p>
            </div>

            {selectedMessageGuest.respondedAt && (
              <p
                className="
                  mt-4
                  text-right
                  text-[10px]
                  text-slate-500
                "
              >
                Received{" "}
                {new Date(
                  selectedMessageGuest.respondedAt
                ).toLocaleString()}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}