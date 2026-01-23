import * as React from "react";
import { VStack, Box } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, isLanding, sectionId, ...boxProps }) => {
  return (
    <Box
      id={sectionId}
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      position="relative"
      overflow="hidden"
      w="100%"
    >
      <VStack 
        maxWidth="1280px" 
        minHeight={isLanding ? "100vh" : { base: "auto", md: "100vh" }}
        height={isLanding ? "100vh" : "auto"}
        width="100%"
        px={{ base: 4, md: 0 }}
        mx="auto"
        {...boxProps}
      >
        {children}
      </VStack>
    </Box>
  );
};

export default FullScreenSection;
