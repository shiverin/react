import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      position="relative"
      overflow="hidden"
    >
      <VStack 
        maxWidth="1280px" 
        minHeight={{ base: "auto", md: "100vh" }} 
        width="100%"
        px={{ base: 2, md: 0 }}
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
