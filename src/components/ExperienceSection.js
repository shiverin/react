import React from "react";
import {
  VStack,
  Heading,
  Text,
  Box,
  HStack,
  Badge,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faRobot,
  faCloud,
  faChartLine,
  faUsers,
  faCogs,
  faGraduationCap,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import { colors, shadows } from "../theme/constants";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// Experience data - easily editable array
const experiences = [
  {
    company: "National University of Singapore (NUS)",
    role: "DevOps ML Engineer",
    department: "Internal Learning Platform",
    duration: "Jan 2026 – May 2026",
    icon: faGraduationCap,
    color: "#E65100", // Orange for NUS
    highlights: [
      {
        text: "Trained LLM AI chatbot with internal knowledge base and Retrieval-Augmented Generation (RAG) techniques.",
        icon: faRobot,
      },
      {
        text: "Deployed models on AWS Lambda and Docker for scalable inference.",
        icon: faCloud,
      },
      {
        text: "Improved inference speed and accuracy by over 50% by implementing efficient chunking methods.",
        icon: faChartLine,
      },
    ],
    tags: ["LLM Training", "RAG", "AWS Lambda", "Docker", "Python"],
  },
  {
    company: "Shopee",
    role: "Product Manager Intern",
    department: "Internal HR Systems",
    duration: "Sep 2025 – Dec 2025",
    icon: faBuilding,
    color: "#EE4D2D", // Shopee orange
    highlights: [
      {
        text: "Designed agentic AI workflows using prompt engineering and tool integration to streamline HR processes.",
        icon: faRobot,
      },
      {
        text: "Integrated LLMs with APIs, databases, and internal systems to automate workflows, reducing processing time by 90%.",
        icon: faCogs,
      },
      {
        text: "Coordinated with development team to schedule requests within quarterly roadmaps, balancing user needs with engineering bandwidth through impact and priority-based frameworks such as RICE scoring and North Star Metrics.",
        icon: faUsers,
      },
    ],
    tags: ["Product Management", "LLM Integration", "Prompt Engineering"],
  },
];

// Individual Experience Card Component
const ExperienceCard = ({ experience, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.3 + i * 0.1,
      },
    }),
  };

  return (
    <MotionBox
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      w="100%"
      position="relative"
    >
      {/* Timeline connector */}
      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        left="50%"
        top="0"
        bottom="0"
        w="2px"
        bg={`linear-gradient(180deg, ${colors.primary}40 0%, ${colors.primary} 50%, ${colors.primary}40 100%)`}
        transform="translateX(-50%)"
        zIndex={0}
      />

      {/* Timeline dot */}
      <MotionBox
        display={{ base: "none", md: "block" }}
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        w="16px"
        h="16px"
        borderRadius="full"
        bg={colors.primary}
        boxShadow={shadows.glow}
        zIndex={2}
        whileHover={{ scale: 1.3 }}
      />

      <Flex
        direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
        align="center"
        justify="center"
        gap={{ base: 4, md: 8 }}
      >
        {/* Card */}
        <MotionBox
          flex="1"
          maxW={{ base: "100%", md: "45%" }}
          p={6}
          borderRadius="20px"
          background={`linear-gradient(135deg, ${colors.bgCard} 0%, rgba(30, 30, 30, 0.9) 100%)`}
          boxShadow={shadows.card}
          border="1px solid rgba(218, 165, 32, 0.1)"
          position="relative"
          overflow="hidden"
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
            height: "4px",
            background: `linear-gradient(90deg, ${experience.color}, ${colors.primary}, ${experience.color})`,
          }}
        >
          {/* Company Header */}
          <HStack mb={4} spacing={4} align="flex-start">
            <Box
              p={3}
              borderRadius="xl"
              background={`${experience.color}20`}
              color={experience.color}
              flexShrink={0}
            >
              <FontAwesomeIcon icon={experience.icon} size="lg" />
            </Box>
            <VStack align="flex-start" spacing={1}>
              <Heading size="md" color={colors.textLight} lineHeight="1.2">
                {experience.company}
              </Heading>
              <Text
                fontSize="sm"
                color={colors.primary}
                fontWeight="semibold"
              >
                {experience.role}
              </Text>
              <Text fontSize="xs" color={colors.textMuted}>
                {experience.department}
              </Text>
            </VStack>
          </HStack>

          {/* Duration Badge */}
          <Badge
            position="absolute"
            top={4}
            right={4}
            colorScheme="yellow"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
          >
            {experience.duration}
          </Badge>

          {/* Highlights */}
          <VStack align="stretch" spacing={3} mt={4}>
            {experience.highlights.map((highlight, i) => (
              <MotionBox
                key={i}
                custom={i}
                variants={highlightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <HStack
                  align="flex-start"
                  spacing={3}
                  p={3}
                  borderRadius="lg"
                  background="rgba(218, 165, 32, 0.05)"
                  border="1px solid rgba(218, 165, 32, 0.1)"
                  _hover={{
                    background: "rgba(218, 165, 32, 0.1)",
                    borderColor: "rgba(218, 165, 32, 0.2)",
                  }}
                  transition="all 0.2s ease"
                >
                  <Box
                    color={colors.primary}
                    opacity={0.8}
                    mt={0.5}
                    flexShrink={0}
                  >
                    <FontAwesomeIcon icon={highlight.icon} size="sm" />
                  </Box>
                  <Text fontSize="sm" color={colors.textDark} lineHeight="1.6">
                    {highlight.text}
                  </Text>
                </HStack>
              </MotionBox>
            ))}
          </VStack>

          {/* Tags */}
          <HStack flexWrap="wrap" gap={2} mt={4}>
            {experience.tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="outline"
                colorScheme="yellow"
                px={2}
                py={1}
                borderRadius="md"
                fontSize="xs"
                _hover={{
                  background: `${colors.primary}20`,
                }}
                transition="all 0.2s ease"
              >
                {tag}
              </Badge>
            ))}
          </HStack>
        </MotionBox>

        {/* Spacer for alternating layout */}
        <Box flex="1" maxW="45%" display={{ base: "none", md: "block" }} />
      </Flex>
    </MotionBox>
  );
};

const ExperienceSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor={colors.bgDarker}
      w="100vw"
      position="relative"
      overflow="hidden"
      minHeight="auto"
      py={{ base: 16, md: 20 }}
    >
      {/* Background decorative elements */}
      <MotionBox
        position="absolute"
        top="20%"
        left="5%"
        width="250px"
        height="250px"
        borderRadius="full"
        background={`radial-gradient(circle, ${colors.primary}08 0%, transparent 70%)`}
        filter="blur(50px)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        right="10%"
        width="200px"
        height="200px"
        borderRadius="full"
        background={`radial-gradient(circle, ${colors.primary}10 0%, transparent 70%)`}
        filter="blur(40px)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <VStack
        zIndex={1}
        spacing={{ base: 8, md: 12 }}
        align="center"
        width="100%"
        maxW="1280px"
        px={4}
      >
        {/* Section Header */}
        <VStack spacing={4}>
          <HStack spacing={3}>
            <Box
              p={2}
              borderRadius="lg"
              background={`${colors.primary}20`}
              color={colors.primary}
            >
              <FontAwesomeIcon icon={faBriefcase} size="lg" />
            </Box>
            <MotionHeading
              as="h2"
              id="experience-section"
              color={colors.primary}
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              textAlign="center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Work Experience
            </MotionHeading>
          </HStack>

          <MotionText
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            color={colors.textMuted}
            maxW="600px"
            textAlign="center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Continuously learning and refining my skills.
          </MotionText>

          {/* Decorative line */}
          <MotionBox
            w="100px"
            h="4px"
            background={`linear-gradient(90deg, transparent, ${colors.primary}, transparent)`}
            borderRadius="full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </VStack>

        {/* Experience Timeline */}
        <VStack spacing={{ base: 8, md: 0 }} w="100%" position="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default ExperienceSection;
