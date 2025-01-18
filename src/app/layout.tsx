// RootLayout.tsx

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import SplashScreen from "@/components/splashscreen/splashscreen";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning> 
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <SplashScreen onComplete={() => setShowContent(true)} /> */}
          <ThemeProvider>
            <div className="flex flex-col">
                <Navbar />
                {children}
                <Footer />
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}