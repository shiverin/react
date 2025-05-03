import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "PDFiledit",
    description:
      "PDFILEdit is a Flask-based web app that enables seamless editing, signing, merging, and converting of PDF files directly in the browser. It leverages session-based file management and dynamic tool rendering based on user uploads.",
    getImageSrc: () => require("../images/pdfile.jpg"),
    url: "https://github.com/shiverin/PDFILEdit",
  },
  {
    title: "CS50 Finance",
    description:
      "Developed a finance app using Python Flask for the backend, linked to a PostgreSQL server on Render. The app features stock quotes, portfolio management, and buy/sell functionality, with basic HTML and CSS for the frontend.",
    getImageSrc: () => require("../images/finance.png"),
    url: "https://github.com/shiverin/finance",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor=
      //"#4C5C68"
      //"#D4AF37"
      "#1C1C1C"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color="#DAA520">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
