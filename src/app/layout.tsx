import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BeritaRandom from "./components/RandomNews";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Tribun-dukuh-waluh",
  description: "Tribun dukuh waluh, satu untuk wong ngapak",
  icons: {
    icon: [{ url: '/img/favicon-32x32.png', sizes: '32x32' }, { url: '/img/favicon-16x16.png', sizes: '16' }],
    apple: {
      url: '/img/apple-touch-icon.png',
      sizes: '180x180'
    }
  },
  manifest: '/img/site.webmanifest',
  openGraph: {
    title: 'Tribun dukuh waluh',
    description: 'Tribun dukuh waluh, satu untuk wong ngapak',
    type: 'article',
    authors: 'yunifputra--@1_darren.armani'
  },
  keywords: ['berita', 'news', 'tribun-dukuh-waluh', 'ngapak']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="px-2 md:px-20 text-white">
          <Header/>
          <Navbar/>
          {/* bagi dua  */}
          <section className="flex justify-between">
            {children}
            <BeritaRandom/>
          </section>
        </main>
      </body>
    </html>
  );
}
