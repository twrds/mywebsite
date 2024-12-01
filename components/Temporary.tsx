"use client";
import { useState, useRef } from "react";
import { MaskContainer } from "./ui/svg-mask-effect";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Refs for each individual project title (h2)
  const efRouteOneRef = useRef<HTMLHeadingElement | null>(null);
  const efXCemsRef = useRef<HTMLHeadingElement | null>(null);
  const webPortfolioRef = useRef<HTMLHeadingElement | null>(null);
  const k12MarketEntryRef = useRef<HTMLHeadingElement | null>(null);

  const projectContent = {
    "EF Route One": (
      <video controls className="w-full max-w-lg"
        src="videos/ef-3.mp4"
        autoPlay
        muted
        loop
      />
    ),
    "EF x CEMS": (
      <video controls className="w-full max-w-lg"
        src="videos/ef-3.mp4"
        autoPlay
        muted
        loop
      />
    ),
    "Web Portfolio": (
      <video controls className="w-full max-w-lg"
        src="videos/ef-3.mp4"
        autoPlay
        muted
        loop
      />
    ),
    "K12 Market Entry": (
      <video controls className="w-full max-w-lg"
        src="videos/ef-3.mp4"
        autoPlay
        muted
        loop
      />
    ),
  };

  // Helper to handle hover events
  const handleMouseEnter = (projectName: string) => setHoveredProject(projectName);
  const handleMouseLeave = () => setHoveredProject(null);

  return (
    <div className="h-screen w-full flex relative items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <div className="flex flex-col text-6xl font-bold">
            <div
              className="py-10"
              onMouseEnter={() => handleMouseEnter("EF Route One")}
              onMouseLeave={handleMouseLeave}
            >
              <h2 ref={efRouteOneRef}>EF Route One</h2>
            </div>
            <div
              className="py-10"
              onMouseEnter={() => handleMouseEnter("EF x CEMS")}
              onMouseLeave={handleMouseLeave}
            >
              <h2 ref={efXCemsRef}>EF x CEMS</h2>
            </div>
            <div
              className="py-10"
              onMouseEnter={() => handleMouseEnter("Web Portfolio")}
              onMouseLeave={handleMouseLeave}
            >
              <h2 ref={webPortfolioRef}>Web Portfolio</h2>
            </div>
            <div
              className="py-10"
              onMouseEnter={() => handleMouseEnter("K12 Market Entry")}
              onMouseLeave={handleMouseLeave}
            >
              <h2 ref={k12MarketEntryRef}>K12 Market Entry</h2>
            </div>
          </div>
        }
        className="h-screen"
      >
        <div className="flex flex-col text-6xl">
          <div
            className="py-10"
            onMouseEnter={() => handleMouseEnter("EF Route One")}
            onMouseLeave={handleMouseLeave}
          >
            <h2 ref={efRouteOneRef}>EF Route One</h2>
          </div>
          <div
            className="py-10"
            onMouseEnter={() => handleMouseEnter("EF x CEMS")}
            onMouseLeave={handleMouseLeave}
          >
            <h2 ref={efXCemsRef}>EF x CEMS</h2>
          </div>
          <div
            className="py-10"
            onMouseEnter={() => handleMouseEnter("Web Portfolio")}
            onMouseLeave={handleMouseLeave}
          >
            <h2 ref={webPortfolioRef}>Web Portfolio</h2>
          </div>
          <div
            className="py-10"
            onMouseEnter={() => handleMouseEnter("K12 Market Entry")}
            onMouseLeave={handleMouseLeave}
          >
            <h2 ref={k12MarketEntryRef}>K12 Market Entry</h2>
          </div>
        </div>
      </MaskContainer>
      {/* Display content based on hover */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-row md:flex-col items-end p-8 w-1/3">
          <div className="text-2xl font-semibold text-white mb-4">
            {hoveredProject
              ? `Content for: ${hoveredProject}`
              : "Hover over a project to see more details"}
          </div>
          {/* Render content for hovered project (video or description) */}
          {hoveredProject && projectContent[hoveredProject]}
        </div>
    </div>
  );
};

export default Projects;
