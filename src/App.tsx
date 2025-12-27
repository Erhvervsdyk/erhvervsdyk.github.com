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
    <div className="min-h-screen w-full bg-[#101d36] overflow-x-hidden">
      <Header />
      
      <main className="flex flex-col w-full">
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
