import connectDB from "@/lib/mongodb";
import Client from "@/models/Client";
import Wedding from "@/models/Wedding";
import Guest from "@/models/Guest";
import Activity from "@/models/Activity";
import Link from "next/link";

export const revalidate = 0; // Disable server cache for real-time counts

export default async function DashboardPage() {
  await connectDB();

  // Fetch counts
  const totalClients = await Client.countDocuments();
  const totalWeddings = await Wedding.countDocuments();
  const totalGuests = await Guest.countDocuments();

  // Calculate RSVPs
  const acceptedGuests = await Guest.countDocuments({ attending: true });
  const declinedGuests = await Guest.countDocuments({ attending: false });
  const pendingGuests = await Guest.countDocuments({ attending: null });

  // Get recent activities
  const recentActivities = await Activity.find()
    .sort({ respondedAt: -1 })
    .limit(8)
    .lean();

  // Get recent weddings
  // Force register Client model
  const _clientRef = Client;
  const recentWeddings = await Wedding.find()
    .populate("clientId")
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:scale-110 transition-transform duration-300">👥</div>
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Total Clients</p>
          <h3 className="text-4xl font-extrabold mt-2 text-white">{totalClients}</h3>
          <Link href="/admin/clients" className="text-xs text-pink-400 font-semibold hover:underline inline-flex items-center gap-1 mt-4">
            Manage Clients &rarr;
          </Link>
        </div>

        <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:scale-110 transition-transform duration-300">💍</div>
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Active Weddings</p>
          <h3 className="text-4xl font-extrabold mt-2 text-white">{totalWeddings}</h3>
          <Link href="/admin/weddings" className="text-xs text-pink-400 font-semibold hover:underline inline-flex items-center gap-1 mt-4">
            Manage Weddings &rarr;
          </Link>
        </div>

        <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:scale-110 transition-transform duration-300">🎟️</div>
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Total Guests Imported</p>
          <h3 className="text-4xl font-extrabold mt-2 text-white">{totalGuests}</h3>
          <div className="flex gap-4 mt-4 text-xs">
            <span className="text-emerald-400 font-medium">✅ {acceptedGuests} Accepted</span>
            <span className="text-rose-400 font-medium">❌ {declinedGuests} Declined</span>
            <span className="text-amber-400 font-medium">⏳ {pendingGuests} Pending</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Weddings */}
        <section className="bg-slate-950/20 border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span>💍</span> Recent Weddings
            </h4>
            <Link href="/admin/weddings" className="text-xs text-pink-400 font-semibold hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {recentWeddings.length === 0 ? (
              <p className="text-sm text-slate-500 text-center py-6">No weddings created yet.</p>
            ) : (
              recentWeddings.map((w: any) => (
                <div key={w._id.toString()} className="flex items-center justify-between p-4 bg-slate-950/30 border border-slate-850 rounded-xl hover:border-slate-700 transition-colors">
                  <div>
                    <h5 className="font-semibold text-slate-200">
                      {w.groomName} & {w.brideName}
                    </h5>
                    <p className="text-xs text-slate-500 mt-1 flex gap-2">
                      <span>📅 {w.weddingDate}</span>
                      <span>📍 {w.venue}</span>
                    </p>
                    {w.clientId && (
                      <span className="inline-block mt-2 text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                        Client: {w.clientId.name || "Unknown"}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/admin/weddings/${w._id.toString()}`}
                    className="bg-slate-800 hover:bg-pink-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 text-slate-300"
                  >
                    Open Panel
                  </Link>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Global Live RSVP Feed */}
        <section className="bg-slate-950/20 border border-slate-800 rounded-2xl p-6">
          <h4 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
            <span>⚡</span> Real-time RSVP Activity Feed
          </h4>

          <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
            {recentActivities.length === 0 ? (
              <p className="text-sm text-slate-500 text-center py-6">No recent RSVP activities.</p>
            ) : (
              recentActivities.map((act: any) => {
                const date = new Date(act.respondedAt);
                const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const dateStr = date.toLocaleDateString([], { month: 'short', day: 'numeric' });

                return (
                  <div key={act._id.toString()} className="flex items-start gap-3 p-3 bg-slate-950/20 border border-slate-900 rounded-xl">
                    <span className="text-xl mt-0.5">
                      {act.action === "Accepted" ? "✅" : "❌"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-300">
                        <strong className="font-semibold text-slate-200">{act.guestName}</strong>{" "}
                        {act.action === "Accepted" ? (
                          <span className="text-emerald-400 font-medium">accepted</span>
                        ) : (
                          <span className="text-rose-400 font-medium">declined</span>
                        )}{" "}
                        the invitation.
                      </p>
                      <span className="text-[10px] text-slate-500 mt-1 block">
                        📅 {dateStr} at {timeStr}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
}