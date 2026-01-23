import React, { useEffect, useState, useCallback } from "react";
import { Avatar, Heading, VStack, Text, Box, Button, HStack } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import myselfImage from "../images/myself.jpg";
import { colors, shadows } from "../theme/constants";

const MotionVStack = motion(VStack);
const MotionAvatar = motion(Avatar);
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const greeting = "Hello there, I'm Shizhen Zhao!";
const bio1 = "NUS Computer Science Y1";
const bio2 = "Passionate about AI and developing solutions";

// Throttle function for scroll performance
const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const LandingSection = () => {
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const controls = useAnimation();

  const handleScroll = useCallback(
    throttle(() => {
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

      // Scale: shrink to 0 by 80% scroll
      const shrinkLimit = sectionHeight * 0.8;
      let scaleValue = 1;
      if (scrollPosition <= shrinkLimit) {
        scaleValue = 1 - scrollPosition / shrinkLimit;
      } else {
        scaleValue = 0;
      }
      setScale(scaleValue);
    }, 16),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      isLanding
      backgroundColor={colors.bgDark}
      w="100vw"
      position="relative"
      overflow="hidden"
      style={{
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity: opacity,
        transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
      }}
    >
      {/* Background glow effect */}
      <MotionBox
        position="absolute"
        width={{ base: "300px", md: "600px" }}
        height={{ base: "300px", md: "600px" }}
        borderRadius="full"
        background={`radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`}
        filter="blur(60px)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <MotionVStack
        zIndex={1}
        spacing={{ base: 4, md: 6, lg: 8 }}
        align="center"
        justify="center"
        flex="1"
        w="100%"
        px={4}
        pt={{ base: 0, sm: "3vh", md: "5vh", lg: "8vh" }}
        sectionId="landing-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionAvatar
          boxSize={["150px", "200px", "250px"]}
          src={myselfImage}
          alt="Shizhen Zhao Avatar"
          variants={avatarVariants}
          animate={floatingAnimation}
          border={`4px solid ${colors.primary}`}
          boxShadow={`0 0 30px ${colors.primary}50, 0 0 60px ${colors.primary}30`}
          _hover={{
            boxShadow: `0 0 40px ${colors.primary}70, 0 0 80px ${colors.primary}50`,
            transform: "scale(1.05)",
          }}
          transition="all 0.3s ease"
        />
        
        <MotionText
          variants={itemVariants}
          fontSize={["md", "lg", "xl"]}
          fontWeight="medium"
          bgGradient={`linear(to-r, ${colors.textLight}, ${colors.primary}, ${colors.textLight})`}
          bgClip="text"
          backgroundSize="200% 100%"
          animation="shimmer 3s ease-in-out infinite"
        >
          {greeting}
        </MotionText>
        
        <Heading mt={["10px", "15px", "20px"]} align="center">
          <MotionText
            variants={itemVariants}
            fontSize={["sm", "md", "lg"]}
            mb={2}
            color={colors.primary}
            fontWeight="bold"
            textShadow={`0 0 20px ${colors.primary}50`}
          >
            {bio1}
          </MotionText>
          <MotionText
            variants={itemVariants}
            fontSize={["xs", "sm", "md"]}
            color={colors.textMuted}
          >
            {bio2}
          </MotionText>
        </Heading>

        {/* CTA Buttons */}
        <MotionBox
          variants={itemVariants}
          mt={4}
        >
          <HStack spacing={4} flexWrap="wrap" justify="center">
            <MotionButton
              as="a"
              href="/zhaoshizhen_resume.pdf"
              download="Shizhen_Zhao_Resume.pdf"
              size={{ base: "md", md: "lg" }}
              bg={colors.primary}
              color={colors.bgDark}
              fontWeight="bold"
              px={6}
              borderRadius="full"
              leftIcon={<FontAwesomeIcon icon={faFileDownload} />}
              _hover={{
                bg: colors.primaryLight,
                transform: "translateY(-2px)",
                boxShadow: shadows.glow,
              }}
              _active={{
                transform: "translateY(0)",
              }}
              transition="all 0.3s ease"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Grab My Resume
            </MotionButton>
          </HStack>
        </MotionBox>

        {/* Scroll indicator */}
        <MotionBox
          mt={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <MotionBox
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Text fontSize="sm" color={colors.textMuted} opacity={0.7}>
              Scroll to explore ↓
            </Text>
          </MotionBox>
        </MotionBox>
      </MotionVStack>
    </FullScreenSection>
  );
};

export default LandingSection;
