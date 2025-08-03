import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title: "FakeStore Landing Page",
  description: "Landing page using SSG, SSR, CSR and dynamic route",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-body">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">EISDStore</div>
            <div className="nav-links">
              <Link href="/">Home (SSG)</Link>
              <Link href="/ssr">SSR</Link>
              <Link href="/csr">CSR</Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} 
        </footer>
      </body>
    </html>
  );
}
