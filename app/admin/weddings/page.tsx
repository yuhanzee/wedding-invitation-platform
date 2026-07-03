"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Client {
  _id: string;
  name: string;
}

interface Wedding {
  _id: string;
  brideName: string;
  groomName: string;
  weddingDate: string;
  venue: string;
  clientId: Client | null;
  createdAt: string;
}

export default function WeddingsPage() {
  const [weddings, setWeddings] = useState<Wedding[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Form fields
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [venue, setVenue] = useState("");
  const [selectedClientId, setSelectedClientId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [weddingsRes, clientsRes] = await Promise.all([
        fetch("/api/admin/weddings"),
        fetch("/api/admin/clients"),
      ]);

      const weddingsData = await weddingsRes.json();
      const clientsData = await clientsRes.json();

      if (Array.isArray(weddingsData)) setWeddings(weddingsData);
      if (Array.isArray(clientsData)) setClients(clientsData);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/admin/weddings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brideName,
          groomName,
          weddingDate,
          venue,
          clientId: selectedClientId || null,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setBrideName("");
        setGroomName("");
        setWeddingDate("");
        setVenue("");
        setSelectedClientId("");
        setShowModal(false);
        fetchData(); // refresh list
      } else {
        setError(data.error || "Failed to create wedding");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-slate-100">Weddings Registry</h3>
          <p className="text-sm text-slate-400">Register new weddings and assign client dashboards.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-md shadow-pink-500/10 flex items-center gap-2"
        >
          <span>➕</span> Register Wedding
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
        </div>
      ) : weddings.length === 0 ? (
        <div className="text-center py-16 bg-slate-950/20 border border-slate-800 rounded-2xl">
          <p className="text-slate-400 mb-4">No weddings registered yet.</p>
          <button
            onClick={() => setShowModal(true)}
            className="text-pink-400 hover:underline text-sm font-semibold"
          >
            Register the first wedding now &rarr;
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weddings.map((w) => (
            <div
              key={w._id}
              className="bg-slate-950/40 border border-slate-800 hover:border-slate-700 transition-all rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-rose-400 mb-3">
                  <span className="text-xl">💍</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">Wedding Event</span>
                </div>
                <h4 className="font-bold text-slate-100 text-lg mb-4">
                  {w.groomName} & {w.brideName}
                </h4>

                <div className="space-y-2 text-sm text-slate-400 mb-6">
                  <p className="flex items-center gap-2">
                    <span>📅</span> <span>{w.weddingDate}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📍</span> <span className="truncate">{w.venue}</span>
                  </p>
                  {w.clientId && (
                    <p className="flex items-center gap-2 text-xs bg-slate-900/50 border border-slate-850 px-2.5 py-1.5 rounded-lg text-slate-400 w-fit">
                      <span>👤</span> Client: <strong className="text-slate-350">{w.clientId.name}</strong>
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-850 flex justify-between items-center">
                <span className="text-xs text-slate-500">
                  Created {new Date(w.createdAt).toLocaleDateString()}
                </span>
                <Link
                  href={`/admin/weddings/${w._id}`}
                  className="text-sm text-pink-450 hover:text-pink-400 font-semibold hover:underline"
                >
                  Manage Guest List &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Wedding Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
            >
              ✕
            </button>
            <h4 className="text-lg font-bold text-slate-100 mb-4">Register New Wedding</h4>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-3 rounded-xl text-xs mb-4">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Groom's Name
                  </label>
                  <input
                    type="text"
                    required
                    value={groomName}
                    onChange={(e) => setGroomName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Bride's Name
                  </label>
                  <input
                    type="text"
                    required
                    value={brideName}
                    onChange={(e) => setBrideName(e.target.value)}
                    placeholder="e.g. Sarah"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Wedding Date
                </label>
                <input
                  type="text"
                  required
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  placeholder="e.g. October 15, 2026"
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Venue / Location
                </label>
                <input
                  type="text"
                  required
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="e.g. Grand Plaza Hall"
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Associate Client Account
                </label>
                <select
                  value={selectedClientId}
                  onChange={(e) => setSelectedClientId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="">Select a Client Account</option>
                  {clients.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-slate-800 hover:bg-slate-750 text-slate-300 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-4 py-2.5 rounded-xl text-sm disabled:opacity-50 transition-all"
                >
                  {submitting ? "Registering..." : "Register Wedding"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}