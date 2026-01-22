import { Heading, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";
import { colors, shadows } from "../theme/constants";

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <MotionVStack
      color="black"
      backgroundColor="white"
      boxShadow={shadows.card}
      overflow="hidden"
      justifyContent="space-between"
      borderRadius="16px"
      backgroundClip="padding-box"
      spacing={0}
      minH={{ base: "auto", md: "auto" }}
      height={{ base: "auto", md: "600px" }}
      position="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: shadows.cardHover,
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight}, ${colors.primary})`,
        opacity: 0,
        transition: "opacity 0.3s ease",
      }}
      _hover={{
        _before: {
          opacity: 1,
        },
      }}
    >
      <Box display="flex" flexDirection="column" height="100%" flex="1" overflow="hidden">
        <MotionBox 
          flex={{ base: "none", md: "1" }}
          height={{ base: "180px", sm: "200px", md: "100%" }}
          minH={{ base: "180px", sm: "200px", md: "auto" }}
          overflow="hidden"
          position="relative"
        >
          <MotionImage
            src={imageSrc}
            alt={`${title} project screenshot`}
            width="100%"
            height="100%"
            objectFit="cover"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          {/* Gradient overlay */}
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            height="50%"
            background="linear-gradient(to top, rgba(0,0,0,0.3), transparent)"
            pointerEvents="none"
          />
        </MotionBox>

        <Box flex={{ base: "none", md: "1" }} p={{ base: "12px", md: "16px" }} width="100%" height="auto">
          <Heading
            as="h3"
            size="md"
            marginBottom={{ base: "8px", md: "12px" }}
            alignSelf="start"
            fontSize={{
              base: "14px",
              sm: "15px",
              md: "18px",
              lg: "20px",
              xl: "22px",
            }}
            color={colors.bgDark}
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-4px",
              left: 0,
              width: "40px",
              height: "2px",
              background: colors.primary,
              transition: "width 0.3s ease",
            }}
            _groupHover={{
              _after: {
                width: "60px",
              },
            }}
          >
            {title}
          </Heading>
          <Text
            marginBottom={{ base: "8px", md: "10px" }}
            fontSize={{
              base: "13px",
              sm: "14px",
              md: "16px",
              lg: "16px",
              xl: "16px",
            }}
            color="gray.700"
            lineHeight="1.5"
            noOfLines={{ base: 4, md: 5 }}
          >
            {description}
          </Text>
        </Box>
      </Box>
      
      <Link
        p={{ base: "12px", md: "16px" }}
        width="100%"
        height="auto"
        href={url}
        isExternal
        fontSize={{
          base: "12px",
          sm: "13px",
          md: "16px",
          lg: "16px",
          xl: "16px",
        }}
        color={colors.primary}
        fontWeight="semibold"
        display="flex"
        alignItems="center"
        gap="8px"
        _hover={{
          color: colors.primaryDark,
          textDecoration: "none",
          gap: "12px",
        }}
        transition="all 0.3s ease"
        borderTop="1px solid"
        borderColor="gray.100"
      >
        View Project <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </MotionVStack>
  );
};

export default Card;
