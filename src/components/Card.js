import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url}) => {
    //console.log("Card received imageSrc:", imageSrc);
  return (
    <VStack
      key={title}
      color="black"
      backgroundColor="white"
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
      _hover={{
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",  // Hover effect for depth
        borderColor: "#B8860B",  // Slightly darker gold border on hover
      }}
      overflow="hidden"
      justifyContent="space-between"
      border="5px solid #DAA520"
      borderRadius="12px"
    >
      <Box>
      <Image
      src={imageSrc}
      alt="Card Image"
      width="100%"
      height="auto" />

      <Box p="10px"
      width="100%"
      height="auto">
        <Heading as="h3" size="md" marginBottom="10px" alignSelf="start"
                          fontSize={{
                            base: "12px",   // Mobile devices (default screen size)
                            sm: "10px",     // Small devices like tablets
                            md: "18px",     // Medium devices like laptops
                            lg: "20px",     // Large devices like desktops
                            xl: "22px",     // Extra-large screens
                          }}>
          {title}
        </Heading>
        <Text marginBottom="10px"
                  fontSize={{
                    base: "5px",   // Mobile devices (default screen size)
                    sm: "7px",     // Small devices like tablets
                    md: "16px",     // Medium devices like laptops
                    lg: "16px",     // Large devices like desktops
                    xl: "16px",     // Extra-large screens
                  }}
        >
          {description}
        </Text>
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
      </Box>
  </VStack>);
};

export default Card;

      //<Link href={card.url} color="teal.500" isExternal>
        //Visit Site
      //</Link>
