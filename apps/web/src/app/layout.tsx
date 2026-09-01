import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* Sidebar */}
          <aside
            style={{
              width: "240px",
              borderRight: "1px solid #eee",
              padding: "16px",
            }}
          >
            <h2>JobPilot</h2>

            <nav
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/applications">Applications</Link>
              <Link href="/settings">Settings</Link>
            </nav>
          </aside>

          {/* Main */}
          <main style={{ flex: 1, padding: "24px" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
