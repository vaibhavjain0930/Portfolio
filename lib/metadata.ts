import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-vaibhavjain.vercel.app/"),

  title: {
    default:
      "Vaibhav Jain - Full Stack Developer | Turning Ideas into Web Experiences",
    template: "%s | Vaibhav Jain",
  },

  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },

  description:
    "Portfolio of Vaibhav Jain, a software developer specializing in modern web applications using Next.js, React, and scalable full stack architectures.",

  keywords: [
    "Vaibhav Jain",
    "Software Developer",
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "JavaScript",
    "TypeScript",
  ],

  authors: [{ name: "Vaibhav Jain" }],
  creator: "Vaibhav Jain",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-vaibhavjain.vercel.app/",
    title: "Vaibhav Jain | Software Developer",
    description:
      "Explore projects, GitHub activity, and technical expertise of Vaibhav Jain.",
    siteName: "Portfolio",
    images: [
      {
        url: "/user.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Jain Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Jain | Software Developer | Full-Stack Developer",
    description:
      "Modern web developer portfolio showcasing projects, GitHub stats, and technical skills.",
    creator: "@VaibhavJain",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
