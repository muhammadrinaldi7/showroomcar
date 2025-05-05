import Navbar from "@/components/Navbar";
import { HeroSection } from "@/sections/heroSection";
import { metadata } from "./layout";
import { BannerSection } from "@/sections/bannerSection";
import { ProductSection } from "@/sections/productSection";

export default function HomePage() {
  metadata.title = "Anugerah Utama Motor";
  metadata.description = "Spesialis Mobil Bekas";
  metadata.openGraph = {
    title: "Anugerah Utama Motor",
    description: "Spesialis Mobil Bekas",
    url: "https://anugerahutama-motor.vercel.app/",
    siteName: "Anugerah Utama Motor",
    images: [
      {
        url: "/AUMMOTR.ico",
        width: 800,
        height: 600,
        alt: "Anugerah Utama Motor",
      },
    ],
  };
  metadata.icons = {
    icon: "/AUMMOTR.ico",
    shortcut: "/AUMMOTR.ico",
    apple: "/AUMMOTR.ico",
  };
  return (
    <>
      <Navbar />
      <div className="container px-4 bg-gray-100 mx-auto">
        <HeroSection />
        <BannerSection />
        <ProductSection />
      </div>
    </>
  );
}
