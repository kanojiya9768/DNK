import { CopyrightSection } from "@/app/components/constant/footer/CopyrightSection";
import { Footer } from "@/app/components/constant/footer/Footer";
import { Navbar } from "@/app/components/constant/navbar/Navbar";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <div className="w-full h-full">
          <Navbar />
          <div className="w-full h-full">{children}</div>
          <Footer />
          <CopyrightSection />
        </div>
      </body>
    </html>
  );
}
