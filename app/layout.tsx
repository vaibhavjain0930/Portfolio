import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/navbar/nav-bar";
import { inter, poppins } from "@/lib/font";
import { metadata } from "@/lib/metadata";
import { ContactPage } from "./_components/contact/contact-page";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} mx-auto max-w-4xl antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* navbar for the site */}
          <NavBar />
          {/* main content */}
          <main className="px-6 md:px-14">
            {children}
            {/* footer for the site */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}