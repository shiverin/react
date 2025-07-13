import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url}) => {
    //console.log("Card received imageSrc:", imageSrc);
  return (
    <VStack
color="black"
      backgroundColor="white"
      // Base glow (default state)
      boxShadow="0 0 10px rgba(254, 255, 247, 1)"
      _hover={{
        // Stronger glow on hover
        boxShadow: "0 0 15px rgba(206, 219, 28, 0.7), 0 0 25px rgba(218, 165, 32, 0.6)",
        transform: "scale(1.02)",
        transition: "all 0.3s ease-in-out",
      }}
      overflow="hidden"
      justifyContent="space-between"
      borderRadius="12px" // Transparent to allow glow-only effect
      backgroundClip="padding-box"
      transition="box-shadow 0.3s ease-in-out"
      spacing={0} // Optional: for tighter layout control
      minH={{ base: "400px", md: "auto" }}  // Adjust values as needed
      height="600px"
    >
      <Box 
      display="flex"
      flexDirection="column"
      height="100%"
      flex="1"
      overflow="hidden"
      >
      <Box flex="1" height="100%"
            overflow="hidden">
      <Image
      src={imageSrc}
      alt="Card Image"
      width="100%"
      height="100%"
      objectFit="cover" 
 />
      </Box>

      <Box 
      flex="1"
      p="10px"
      width="100%"
      height="auto">
        <Heading as="h3" size="md" marginBottom="10px" alignSelf="start"
                          fontSize={{
                            base: "15px",   // Mobile devices (default screen size)
                            sm: "16px",     // Small devices like tablets
                            md: "18px",     // Medium devices like laptops
                            lg: "20px",     // Large devices like desktops
                            xl: "22px",     // Extra-large screens
                          }}>
          {title}
        </Heading>
        <Text marginBottom="10px"
                  fontSize={{
                    base: "14px",   // Mobile devices (default screen size)
                    sm: "15px",     // Small devices like tablets
                    md: "16px",     // Medium devices like laptops
                    lg: "16px",     // Large devices like desktops
                    xl: "16px",     // Extra-large screens
                  }}
        >
          {description}
        </Text>
        </Box>

      </Box>
              <Link

        p="10px"
      width="100%"
      height="auto"
      href={url} color="teal.500" isExternal
      fontSize={{
        base: "10px",   // Mobile devices (default screen size)
        sm: "10px",     // Small devices like tablets
        md: "16px",     // Medium devices like laptops
        lg: "16px",     // Large devices like desktops
        xl: "16px",     // Extra-large screens
      }}
      >
          See more <FontAwesomeIcon icon={faArrowRight} />
        </Link>
  </VStack>);
};

export default Card;

      //<Link href={card.url} color="teal.500" isExternal>
        //Visit Site
      //</Link>
