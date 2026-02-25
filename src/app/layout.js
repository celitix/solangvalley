import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Solang Valley | Solang Valley Manali | Adventure Tourism in India | Manali",
  description: "Solang Valley is one of the best attractions of adventure tourism in India. Visit Solang valley in Manali and enjoy the scenic beauty of nature.",
  alternates: {
    canonical: "https://www.solangvalley.in/",
  },
  icons: {
    icon: [
      { url: '/solang-valley-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/solang-valley-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/solang-valley-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
