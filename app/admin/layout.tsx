"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: "📊" },
    { name: "Clients", href: "/admin/clients", icon: "👥" },
    { name: "Weddings", href: "/admin/weddings", icon: "💍" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between">
        <div>
          {/* Brand/Logo */}
          <div className="p-6 border-b border-slate-800 flex items-center gap-3">
            <span className="text-2xl">💖</span>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Antigravity Admin
              </h1>
              <p className="text-xs text-slate-500 font-medium">Wedding Planner Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-400 border-l-4 border-pink-500 font-medium"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info */}
        <div className="p-6 border-t border-slate-800 text-xs text-slate-500">
          <p>Super Admin Mode</p>
          <p className="mt-1 font-mono">v1.1.0-alpha</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-slate-850 px-8 flex items-center justify-between bg-slate-950/40 backdrop-blur-md">
          <h2 className="font-semibold text-slate-200">
            {pathname.includes("/clients")
              ? "Client Directory"
              : pathname.includes("/weddings")
              ? "Weddings Manager"
              : "Overview Dashboard"}
          </h2>
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Database Connected</span>
          </div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto bg-slate-900">
          {children}
        </main>
      </div>
    </div>
  );
}
