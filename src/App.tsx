import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Safety } from "./components/Safety";
import { Cases } from "./components/Cases";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-base overflow-x-hidden">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        Spring til hovedindhold
      </a>

      <Header />

      <main id="main-content" className="flex flex-col w-full">
        <Hero />

        {/* Features Section (Services + Safety) - Dark Background */}
        <div className="bg-[rgb(4,12,21)] flex flex-col items-center w-full">
          <Services />
          <Safety />
        </div>

        {/* Cases Section - Gradient Background */}
        <div className="w-full bg-gradient-to-b from-[#0a1f2f] to-[#09101e] flex justify-center">
          <Cases />
        </div>

        {/* Contact Section - Dark Background */}
        <div id="contact" className="w-full bg-[#0c111d] flex justify-center">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
