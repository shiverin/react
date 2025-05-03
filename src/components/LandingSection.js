import React, { useEffect, useState } from "react";
import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myselfImage from "../images/myself.jpg";

const greeting = "Hello there, I'm Shizhen Zhao!";
const bio1 = "NUS Computer Science undergrad";
const bio2 = "Python, SQL, C, R, Flask, and React, with a focus on web development and data analysis";

const LandingSection = () => {
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight;

      // Rotation
      const rotationValue = scrollPosition / 0.5;
      setRotation(rotationValue);

      // Opacity
      let opacityValue = 1 - scrollPosition / sectionHeight;
      if (scrollPosition >= sectionHeight * 0.8) {
        opacityValue = 0;
      }
      if (opacityValue >= 0) {
        setOpacity(opacityValue);
      }

      // Scale: shrink to 0.8 size by 80% scroll
      const shrinkLimit = sectionHeight * 0.8;
      let scaleValue = 1;
      if (scrollPosition <= shrinkLimit) {
        scaleValue = 1 - (scrollPosition / shrinkLimit); // Shrink to 0
      } else {
        scaleValue = 0;
      }
      setScale(scaleValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#121212"
      w="100vw"
      style={{
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity: opacity,
        transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
      }}
    >
      <Box height={["15vh", "0vh", "0vh"]} ></Box>
      <VStack zIndex={1} spacing={[4, 6, 8]} align="center" >
        <Avatar boxSize={["150px", "200px", "250px"]} src={myselfImage} alt="Avatar" />
        <Text>{greeting}</Text>
        <Heading mt={["10px", "15px", "20px"]} align="center">
          <Text fontSize={["sm", "md", "lg"]} mb={2} color="#DAA520">
            {bio1}
          </Text>
          <Text fontSize={["xs", "sm", "md"]} color="#D3D3D3">
            {bio2}
          </Text>
        </Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
