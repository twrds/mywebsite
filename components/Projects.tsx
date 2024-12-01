"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "Rewind",
    description: "A fun passion project I did with friends. I was responsible for music production, distribution and sourcing of a singer and album art.",
    link: "https://open.spotify.com/track/2thlNRRy2mhoyyPcOFTWzO?si=4489a96e8657439e",
    thumbnail:
      "/photos/Rewind.jpg",
  },
  {
    title: "Oogiri Market",
    description: "Developed a business case for a Subway style Onigiri (Japanese Rice Balls) resturant catering to students and office workers.",
    link: "",
    thumbnail:
      "/photos/oogiri.png",
  },
  {
    title: "Tofumisu",
    description: "Developed a new tofu based tiramisu together with a food scientist from Cornell and was responsible for supply chain strategy.",
    link: "",
    thumbnail:
      "/photos/tofumisu.jpg",
  },
  {
    title: "Bike Sharing",
    description: "Tasked to develop a business case showcasing the potential of bike sharing services. Tools used include IBISWorld, Python, etc.",
    link: "",
    thumbnail:
      "/photos/Bikeshare.png",
  },
  {
    title: "Recover+",
    description: "A project related to declining profits stemming from an inefficient supply chain increasing costs of production and distribution.",
    link: "",
    thumbnail:
      "/photos/Recover.png",
  },
  {
    title: "TWRDS",
    description: "Devloped a custom website using Squarespace and acted temporary consultant to help with the branding and marketing.",
    link: "",
    thumbnail:
      "/photos/TWRDS.jpeg",
  },

  {
    title: "Nawoo",
    description: "A project I did to practice web development using THREE.js and GSAP with React along with some more advanced video controls.",
    link: "https://nawoo.io",
    thumbnail:
      "/photos/Nawoo Home.jpeg",
  },
  {
    title: "eckspand",
    description: "A web app developed using Next.js with the goal of creating a modern minimalistic looking site for a marketing agency.",
    link: "",
    thumbnail:
      "/photos/eckspand.jpeg",
  },
  {
    title: "AI Photo Editor (coming soon...)",
    description: "An AI photo web application project that will help me better understand how AI works and help me expand my frontend development skills.",
    link: "",
    thumbnail:
      "/photos/aiphoto.png",
  },
  {
    title: "Fintech App (coming soon...)",
    description: "I will attempt to build a basic fintech application using Next.js",
    link: "",
    thumbnail:
      "/photos/fintech.png",
  },
  {
    title: "Recruiter Training",
    description: "Internal campaigns focused on motivating new recruiters to be on the look out for, and hire, talent that matches well with EF.",
    link: "",
    thumbnail:
      "/videos/ef-1.mp4",
  },

  {
    title: "Customer Survey 2023",
    description: "Conducted a Customer Survey with 840 participants to better understand the South Korean market and the needs of our customers.",
    link: "",
    thumbnail:
      "/photos/customer.png",
  },
  {
    title: "Ambassador Strategy",
    description: "Developed a CRM strategy based on sales and survey data as well as feedback from EF students and alumnis.", 
    link: "",
    thumbnail:
      "/photos/AmbStrat.png",
  },
  {
    title: "Route One",
    description: "A global marketing campaign targeted at Gen-Z using young influencers showcasing EF and its various campuses and activities.",
    link: "",
    thumbnail:
      "/videos/ef-3.mp4",
  },
  {
    title: "Recruitment",
    description: "An external recruitment campaign targeting Asia, encouraging individuals to apply for job opportunities with EF.",
    link: "",
    thumbnail:
      "videos/ef-2.mp4",
  },
];

const Projects = () => {
  return(
  <section id="projects" className="bg-black-100">
  <HeroParallax products={products} />
  </section>
  )
}

export default Projects