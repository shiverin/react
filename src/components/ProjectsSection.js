import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "WhatsApp Clone",
    description:
      "Developed a full-stack, real-time messaging web app as a single-page application (SPA) using Django, Django Channels, and WebSockets. The app provides reload-free navigation and instant messaging between users, with features like phone number authentication, user search, chat archiving, message read indicators, and profile editing. Deployed on Render with ASGI for real-time communication and integrated with a managed PostgreSQL database on Supabase for robust, scalable backend storage.",
    getImageSrc: () => require("../images/whatsapp.png"),
    url: "https://github.com/shiverin/messenger",
  },
  {
    title: "Traffic Sign Classification with CNN using TensorFlow",
    description:
      "Developed a convolutional neural network (CNN) using TensorFlow to classify traffic signs from the German Traffic Sign Recognition Benchmark (GTSRB) dataset. The project explored multiple CNN architectures, achieving a top test accuracy of 98.97% by optimizing network depth, dropout regularization, and training parameters.",
    getImageSrc: () => require("../images/trafficSigns.jpg"),
    url: "https://github.com/shiverin/CNNTraffic",
  },
    {
    title: "AI Crossword Solver",
    description:
      "Developed an AI crossword puzzle solver using Constraint Satisfaction Problem (CSP) techniques to generate valid crossword solutions from a grid structure and word list. This project applies classical AI search algorithms and heuristics to efficiently explore complex solution spaces.",
    getImageSrc: () => require("../images/crossword.png"),
    url: "https://github.com/shiverin/crosswords",
  },
  {
    title: "NimAI",
    description:
      "Developed an AI agent that learns to play Nim using Q-learning. Implemented core Q-learning concepts: state-action value functions (Q-values), Q-table updates, and an epsilon-greedy policy balancing exploration and exploitation.",
    getImageSrc: () => require("../images/nim.png"),
    url: "https://github.com/shiverin/nimAI",
  },
      {
    title: "TicTacToeAI",
    description:
      "This project implements an AI Tic Tac Toe player using the Minimax algorithm with recursive decision-making. The AI evaluates all possible moves to select the optimal action.",
    getImageSrc: () => require("../images/tictactoe.png"),
    url: "https://github.com/shiverin/TTTAi",
  },
  {
    title: "PageRanker",
    description: 
      "Implemented the PageRank algorithm in Python to rank webpages based on link structure. Built a web crawler and computed ranks using both Monte Carlo sampling and iterative matrix methods, applying concepts from probability and graph theory.",
    getImageSrc: () => require("../images/pagerank.png"),
    url: "https://github.com/shiverin/pageranker"
  },
      {
    title: "PDFiledit",
    description:
      "PDFILEdit is a Flask-based web app that enables seamless editing, signing, merging, and converting of PDF files directly in the browser. It leverages session-based file management and dynamic tool rendering based on user uploads.",
    getImageSrc: () => require("../images/pdfile.jpg"),
    url: "https://github.com/shiverin/PDFILEdit",
  },
  {
    title: "Finance Portfolio App",
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
      "#121212"
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
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))", // mobile
          md: "repeat(2, minmax(0, 1fr))",   // desktop (>=768px)
        }}
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
