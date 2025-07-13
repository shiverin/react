import React from "react";
import { VStack, Heading, Text, Box, Avatar, SimpleGrid } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const hackathons = [
  {
    title: "DSTA BrainHack 2025 (Semi-finalist)",
    description:
      "ASR, CV, OCR, RL.",
  },
];

const HackathonSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#121212"
      w="100vw"
    >
      <Box height={["15vh", "0vh", "0vh"]}></Box>

      <VStack zIndex={1} spacing={[4, 6, 8]} align="center">

        <Heading as="h1" color="#DAA520">
        Hackathons & Competitions
        </Heading>

        <Text
          fontSize={["sm", "md", "lg"]}
          color="#D3D3D3"
          maxW="80%"
          textAlign="center"
        >
          A list of hackathons and competition that I have participated in
        </Text>

        {/* Step 2: Map over the hackathons array */}
        <SimpleGrid columns={[1, 1, 2]} spacing={8} maxW="80%" pt={6}>
          {hackathons.map((hackathon, index) => (
            <Box
              key={index}
              p={5}
              borderRadius="md"
              background="#1E1E1E"
              boxShadow="md"
              color="white"
              minW="400px"
            >
              <Heading size="md" mb={2} color="#DAA520">
                {hackathon.title}
              </Heading>
              <Text fontSize="sm" color="#CCCCCC">
                {hackathon.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </FullScreenSection>
  );
};

export default HackathonSection;
