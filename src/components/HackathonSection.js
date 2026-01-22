import React from "react";
import { VStack, Heading, Text, Box, SimpleGrid, Badge, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faCode, faBrain } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import { colors, shadows } from "../theme/constants";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const hackathons = [
  {
    title: "DSTA BrainHack 2025",
    achievement: "Semi-finalist",
    description:
      "Competed in DSTA's flagship hackathon focusing on defense technology solutions. Developed an AI-powered system utilizing Automatic Speech Recognition (ASR), Computer Vision (CV), Optical Character Recognition (OCR), and Reinforcement Learning (RL) to solve complex real-world challenges.",
    tags: ["ASR", "Computer Vision", "OCR", "Reinforcement Learning"],
    icon: faTrophy,
  },
];

const HackathonSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor={colors.bgDark}
      w="100vw"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <MotionBox
        position="absolute"
        top="10%"
        right="5%"
        width="200px"
        height="200px"
        borderRadius="full"
        background={`radial-gradient(circle, ${colors.primary}10 0%, transparent 70%)`}
        filter="blur(40px)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Box height={["15vh", "0vh", "0vh"]} />

      <VStack
        zIndex={1}
        spacing={[4, 6, 8]}
        align="center"
        width="100%"
        maxW="1200px"
        px={4}
      >
        <MotionHeading
          as="h1"
          id="hackathons-section"
          color={colors.primary}
          maxW="80%"
          textAlign="center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "4px",
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            borderRadius: "2px",
          }}
        >
          Hackathons & Competitions
        </MotionHeading>

        <MotionText
          fontSize={["sm", "md", "lg"]}
          color={colors.textMuted}
          maxW="80%"
          textAlign="center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Challenging myself through competitive challenges
        </MotionText>

        <SimpleGrid
          columns={[1, 1, 2]}
          spacing={8}
          maxW="90%"
          pt={6}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hackathons.map((hackathon, index) => (
            <MotionBox
              key={index}
              variants={itemVariants}
              p={6}
              borderRadius="16px"
              background={`linear-gradient(135deg, ${colors.bgCard} 0%, rgba(30, 30, 30, 0.8) 100%)`}
              boxShadow={shadows.card}
              color="white"
              minW={["100%", "300px", "400px"]}
              position="relative"
              overflow="hidden"
              border="1px solid rgba(218, 165, 32, 0.1)"
              whileHover={{
                scale: 1.02,
                boxShadow: shadows.cardHover,
                borderColor: "rgba(218, 165, 32, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight}, ${colors.primary})`,
              }}
            >
              <HStack mb={3} spacing={3}>
                <Box
                  p={2}
                  borderRadius="lg"
                  background={`${colors.primary}20`}
                  color={colors.primary}
                >
                  <FontAwesomeIcon icon={hackathon.icon} size="lg" />
                </Box>
                <Badge
                  colorScheme="yellow"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  {hackathon.achievement}
                </Badge>
              </HStack>

              <Heading size="md" mb={3} color={colors.primary}>
                {hackathon.title}
              </Heading>

              <Text fontSize="sm" color={colors.textDark} mb={4} lineHeight="1.7">
                {hackathon.description}
              </Text>

              <HStack flexWrap="wrap" gap={2}>
                {hackathon.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    colorScheme="yellow"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </FullScreenSection>
  );
};

export default HackathonSection;
