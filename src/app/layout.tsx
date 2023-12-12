"use client";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Todos", href: "/todos" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  if (pathName.endsWith("/login") || pathName.endsWith("/register")) {
    return (
      <>
        <html lang="en" suppressHydrationWarning>
          <body className={inter.className}>
            <main className="flex flex-col h-screen">
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </main>
          </body>
        </html>
      </>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true} className={inter.className}>
        <main className="flex flex-col h-screen">
          <header className="w-[100%] bg-black h-16 flex-col">
            <ul className="text-white flex gap-10 items-center h-[100%] justify-center relative">
              {navLinks.map((link) => {
                const isActive = pathName.endsWith(link.href);

                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    className={`${
                      isActive ? "text-blue-400 " : "text-white"
                    } h-[100%] flex items-center justify-center px-2 `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
          </header>

          <div className="flex flex-col flex-1">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>

          <footer className="w-[100%] bg-black h-16 flex-col flex items-center justify-center">
            <p className="text-white text-lg">
              {new Date().getFullYear()} © Mattia Valerio
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
