"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";

interface Guest {
  _id: string;
  guestName: string;
  familyCount: number;
  attending: boolean | null;
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

export default function WeddingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Search and filter
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // File Upload
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [isErrorMsg, setIsErrorMsg] = useState(false);

  // General state
  const [copiedLink, setCopiedLink] = useState(false);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
    fetchData();
  }, [id, search, statusFilter]);

  async function fetchData() {
    try {
      const res = await fetch(
        `/api/client/dashboard?weddingId=${id}&search=${encodeURIComponent(search)}&status=${statusFilter}`
      );
      const data = await res.json();
      if (res.ok) {
        setWedding(data.wedding);
        setStats(data.stats);
        setGuests(data.guests);
      }
    } catch (err) {
      console.error("Error fetching wedding detail:", err);
    } finally {
      setLoading(false);
    }
  }

  // Handle Excel upload
  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setUploadMessage("");
    setIsErrorMsg(false);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("weddingId", id);

    try {
      const res = await fetch("/api/upload-guests", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setUploadMessage(`✅ Successfully imported ${data.total} guests!`);
        setFile(null);
        // Clear file input
        const fileInput = document.getElementById("excel-file") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
        
        fetchData(); // refresh table & stats
      } else {
        setIsErrorMsg(true);
        setUploadMessage(`❌ Error: ${data.error || "Failed to upload guest list"}`);
      }
    } catch (err: any) {
      setIsErrorMsg(true);
      setUploadMessage(`❌ Error: ${err.message || "An unexpected error occurred"}`);
    } finally {
      setUploading(false);
    }
  }

  // Delete individual guest
  async function handleDeleteGuest(guestId: string) {
    if (!confirm("Are you sure you want to delete this guest?")) return;

    try {
      const res = await fetch(`/api/admin/guests?guestId=${guestId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchData();
      } else {
        alert("Failed to delete guest");
      }
    } catch (err) {
      console.error("Error deleting guest:", err);
    }
  }

  // Delete all guests
  async function handleClearGuests() {
    if (
      !confirm(
        "⚠️ WARNING: This will permanently delete ALL guests and their RSVP history for this wedding. Do you want to continue?"
      )
    )
      return;

    try {
      const res = await fetch(`/api/admin/guests?weddingId=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchData();
      } else {
        alert("Failed to clear guest list");
      }
    } catch (err) {
      console.error("Error clearing guest list:", err);
    }
  }

  // Copy client dashboard link to clipboard
  function handleCopyClientLink() {
    const clientLink = `${origin}/client/${id}`;
    navigator.clipboard.writeText(clientLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  }

  if (loading && !wedding) {
    return (
      <div className="flex justify-center py-24">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (!wedding) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">Wedding registry not found.</p>
        <Link href="/admin/weddings" className="text-pink-400 hover:underline mt-4 inline-block">
          &larr; Back to Weddings
        </Link>
      </div>
    );
  }

  const clientDashboardUrl = `${origin}/client/${id}`;

  return (
    <div className="space-y-8">
      {/* Back button and title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Link href="/admin/weddings" className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 mb-2">
            &larr; Back to Weddings
          </Link>
          <h3 className="text-2xl font-bold text-slate-100">
            💍 {wedding.groomName} & {wedding.brideName}
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-1">
            📅 {wedding.weddingDate} &nbsp;|&nbsp; 📍 {wedding.venue}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Export Links button */}
          <a
            href={`/api/export-links?weddingId=${id}`}
            download
            className="bg-slate-800 hover:bg-slate-700 text-slate-250 font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2 border border-slate-750"
          >
            <span>📥</span> Export Guest Links
          </a>

          {/* Client Dashboard Link sharing */}
          <button
            onClick={handleCopyClientLink}
            className={`font-semibold px-4 py-2.5 rounded-xl text-xs transition-all duration-200 flex items-center gap-2 ${
              copiedLink
                ? "bg-emerald-600 text-white"
                : "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-md shadow-pink-500/10"
            }`}
          >
            <span>🔗</span>
            {copiedLink ? "Client Link Copied!" : "Copy Client Dashboard URL"}
          </button>
        </div>
      </div>

      {/* Stats Widget */}
      {stats && (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950/30 border border-slate-850 rounded-xl p-4">
            <h5 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Invited</h5>
            <p className="text-2xl font-bold text-white mt-1">{stats.total.count} <span className="text-xs text-slate-500 font-normal">({stats.total.seats} seats)</span></p>
          </div>
          <div className="bg-slate-950/30 border border-slate-850 rounded-xl p-4">
            <h5 className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Accepted RSVPs</h5>
            <p className="text-2xl font-bold text-emerald-450 mt-1">{stats.accepted.count} <span className="text-xs text-slate-500 font-normal">({stats.accepted.seats} seats)</span></p>
          </div>
          <div className="bg-slate-950/30 border border-slate-850 rounded-xl p-4">
            <h5 className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">Declined RSVPs</h5>
            <p className="text-2xl font-bold text-rose-450 mt-1">{stats.declined.count} <span className="text-xs text-slate-500 font-normal">({stats.declined.seats} seats)</span></p>
          </div>
          <div className="bg-slate-950/30 border border-slate-850 rounded-xl p-4">
            <h5 className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Pending Response</h5>
            <p className="text-2xl font-bold text-amber-450 mt-1">{stats.pending.count} <span className="text-xs text-slate-500 font-normal">({stats.pending.seats} seats)</span></p>
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Upload excel card */}
        <div className="space-y-6">
          <section className="bg-slate-950/20 border border-slate-800 rounded-2xl p-6">
            <h4 className="font-bold text-slate-200 mb-2 flex items-center gap-2">
              <span>📊</span> Import Guest List
            </h4>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Upload an Excel (.xlsx or .xls) file containing the guest names. The file should contain these columns:
            </p>

            <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-850 text-xs font-mono text-slate-400 mb-6 space-y-1.5">
              <div className="flex justify-between border-b border-slate-800 pb-1.5 font-bold text-slate-300">
                <span>GuestName</span>
                <span>FamilyCount</span>
              </div>
              <div className="flex justify-between">
                <span>Mr. David Miller</span>
                <span>4</span>
              </div>
              <div className="flex justify-between">
                <span>Sophia Jones</span>
                <span>2</span>
              </div>
            </div>

            <form onSubmit={handleUpload} className="space-y-4">
              <div className="border-2 border-dashed border-slate-800 rounded-xl p-6 text-center hover:border-slate-700 transition-colors bg-slate-950/10">
                <input
                  type="file"
                  id="excel-file"
                  accept=".xlsx, .xls"
                  required
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
                <label htmlFor="excel-file" className="cursor-pointer block space-y-2">
                  <span className="text-3xl block">📁</span>
                  <span className="text-xs font-semibold text-slate-300 block">
                    {file ? file.name : "Select Excel File"}
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    Supports .xlsx, .xls
                  </span>
                </label>
              </div>

              {uploadMessage && (
                <div className={`p-3 rounded-xl text-xs ${
                  isErrorMsg 
                    ? "bg-rose-500/10 border border-rose-500/20 text-rose-400" 
                    : "bg-emerald-500/10 border border-emerald-500/20 text-emerald-450"
                }`}>
                  {uploadMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={uploading || !file}
                className="w-full bg-slate-100 hover:bg-white text-slate-900 font-bold py-2.5 rounded-xl text-xs transition-colors disabled:opacity-40"
              >
                {uploading ? "Importing..." : "Upload & Parse Guests"}
              </button>
            </form>
          </section>

          {/* Quick Stats information */}
          <section className="bg-slate-950/20 border border-slate-800 rounded-2xl p-6 text-xs text-slate-400 space-y-3 leading-relaxed">
            <h5 className="font-bold text-slate-300">💡 Sharing Information</h5>
            <p>
              As the super admin, you import the list. Once imported, the client can access their real-time dashboard here:
            </p>
            <div className="bg-slate-950 border border-slate-850 p-2.5 rounded-xl font-mono text-[10px] text-pink-400 break-all select-all">
              {clientDashboardUrl}
            </div>
            <p>
              Give this link to your client so they can track responses and send WhatsApp invitations themselves.
            </p>
          </section>
        </div>

        {/* Right Side: Guest List Table */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-slate-950/20 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
              <h4 className="font-bold text-slate-200 flex items-center gap-2">
                <span>📋</span> Guest Registry
              </h4>

              {guests.length > 0 && (
                <button
                  onClick={handleClearGuests}
                  className="text-xs text-rose-400 hover:text-rose-350 font-semibold border border-rose-500/20 bg-rose-500/5 px-2.5 py-1.5 rounded-xl hover:bg-rose-500/10 transition-colors w-fit self-end"
                >
                  Clear Guest List
                </button>
              )}
            </div>

            {/* Filters panel */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="🔍 Search guests..."
                className="flex-1 bg-slate-950 border border-slate-850 rounded-xl px-3 py-2 text-xs text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
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
                        ? "bg-slate-800 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-slate-850 rounded-xl bg-slate-950/20">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-950/60 border-b border-slate-850 text-slate-400 font-semibold uppercase tracking-wider">
                    <th className="p-4">Guest Name</th>
                    <th className="p-4 text-center">Seats</th>
                    <th className="p-4 text-center">RSVP</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {guests.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-slate-500">
                        {loading ? "Loading guests..." : "No guests found matching filters."}
                      </td>
                    </tr>
                  ) : (
                    guests.map((g) => (
                      <tr key={g._id} className="hover:bg-slate-950/30 transition-colors">
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
                              ? "bg-rose-500/10 text-rose-450 border border-rose-500/20"
                              : "bg-amber-500/10 text-amber-450 border border-amber-500/20"
                          }`}>
                            {g.attending === true ? "Accepted" : g.attending === false ? "Declined" : "Pending"}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <a
                              href={`${origin}/invite/${g.token}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:underline hover:text-pink-300"
                            >
                              Invite Link
                            </a>
                            <button
                              onClick={() => handleDeleteGuest(g._id)}
                              className="text-rose-500 hover:text-rose-400 font-bold"
                              title="Delete Guest"
                            >
                              🗑️
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
      </div>
    </div>
  );
}
