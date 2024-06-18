import { Josefin_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  title: {
    template: "%s / The CABLOCK",
    default: "Welcome / The CABLOCK",
  },
  description: "Luxurious cabins, located in the mountainous area of Vietnam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-2 py-8 sm:px-8 sm:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>
              {children}
              <SpeedInsights />
            </ReservationProvider>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
