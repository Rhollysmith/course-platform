import "./globals.css";

export const metadata = {
  title: "Coursework — Learn from real practitioners",
  description: "Online courses with lifetime access",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">
        <nav className="border-b border-line bg-paper sticky top-0 z-10">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <a href="/" className="font-display text-xl">Coursework</a>
            <div className="flex gap-6 items-center text-sm">
              <a href="/courses" className="hover:opacity-70">Courses</a>
              <a href="/dashboard" className="hover:opacity-70">My learning</a>
              <a href="/login" className="btn-outline text-sm py-2 px-4">Log in</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-line mt-24 py-10 text-sm text-center text-ink/60">
          © {new Date().getFullYear()} Coursework. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
