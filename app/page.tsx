import React from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home(){
  return(
    <main className="bg-black overflow-hidden">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Grid />

      </div>
    </main>
  );
}
