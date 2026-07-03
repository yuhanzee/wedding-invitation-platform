"use client";

import { useEffect, useState } from "react";

interface Client {
  _id: string;
  name: string;
  email: string;
  phone: string;
  package: string;
  weddingCount: number;
  createdAt: string;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [packageName, setPackageName] = useState("Premium");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    try {
      const res = await fetch("/api/admin/clients");
      const data = await res.json();
      if (Array.isArray(data)) {
        setClients(data);
      }
    } catch (err) {
      console.error("Error fetching clients:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/admin/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, package: packageName }),
      });

      const data = await res.json();

      if (res.ok) {
        // Success
        setName("");
        setEmail("");
        setPhone("");
        setPackageName("Premium");
        setShowModal(false);
        fetchClients(); // refresh list
      } else {
        setError(data.error || "Failed to create client");
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
          <h3 className="text-xl font-bold text-slate-100">Client Accounts</h3>
          <p className="text-sm text-slate-400">Manage client accounts and associate them with weddings.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-md shadow-pink-500/10 flex items-center gap-2"
        >
          <span>➕</span> Add New Client
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
        </div>
      ) : clients.length === 0 ? (
        <div className="text-center py-16 bg-slate-950/20 border border-slate-800 rounded-2xl">
          <p className="text-slate-400 mb-4">No clients found in the directory.</p>
          <button
            onClick={() => setShowModal(true)}
            className="text-pink-400 hover:underline text-sm font-semibold"
          >
            Create your first client account now &rarr;
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client._id}
              className="bg-slate-950/40 border border-slate-800 hover:border-slate-700 transition-all rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-slate-200 text-lg">{client.name}</h4>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                    client.package === "Elite" 
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      : client.package === "Premium"
                      ? "bg-pink-500/10 text-pink-400 border border-pink-500/20"
                      : "bg-slate-800 text-slate-400"
                  }`}>
                    {client.package}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-slate-400 mb-6">
                  {client.email && (
                    <p className="flex items-center gap-2">
                      <span>📧</span> <span className="truncate">{client.email}</span>
                    </p>
                  )}
                  {client.phone && (
                    <p className="flex items-center gap-2">
                      <span>📞</span> <span>{client.phone}</span>
                    </p>
                  )}
                  <p className="flex items-center gap-2">
                    <span>📅</span> <span>Registered: {new Date(client.createdAt).toLocaleDateString()}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-850 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-medium">
                  {client.weddingCount} Associated Wedding{client.weddingCount !== 1 && "s"}
                </span>
                <span className="text-xs text-pink-400 font-semibold hover:underline">
                  Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Client Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
            >
              ✕
            </button>
            <h4 className="text-lg font-bold text-slate-100 mb-4">Add New Client Account</h4>
            
            {error && (
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-3 rounded-xl text-xs mb-4">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Client Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@example.com"
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +1234567890"
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Service Package
                </label>
                <select
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-slate-205 focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="Premium">Premium Package</option>
                  <option value="Elite">Elite Package</option>
                  <option value="Standard">Standard Package</option>
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
                  {submitting ? "Creating..." : "Create Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}