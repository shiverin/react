import React, { useRef } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, HStack, VStack, Link, Badge, IconButton, Tooltip } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faPython,
  faJs,
  faGolang,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faBrain,
  faServer,
  faCode,
  faRobot,
  faComments,
  faFileCode,
  faChartLine,
  faArrowRight,
  faArrowLeft,
  faExternalLinkAlt,
  faLaptopCode,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { colors, shadows } from "../theme/constants";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionVStack = motion(VStack);

// Tech stack icon mapping
const techIcons = {
  react: { icon: faReact, color: "#61DAFB", label: "React" },
  python: { icon: faPython, color: "#3776AB", label: "Python" },
  javascript: { icon: faJs, color: "#F7DF1E", label: "JavaScript" },
  go: { icon: faGolang, color: "#00ADD8", label: "Go" },
  html: { icon: faHtml5, color: "#E34F26", label: "HTML5" },
  css: { icon: faCss3Alt, color: "#1572B6", label: "CSS3" },
  node: { icon: faNodeJs, color: "#339933", label: "Node.js" },
  database: { icon: faDatabase, color: "#336791", label: "PostgreSQL" },
  tensorflow: { icon: faBrain, color: "#FF6F00", label: "TensorFlow" },
  django: { icon: faServer, color: "#092E20", label: "Django" },
  flask: { icon: faCode, color: "#000000", label: "Flask" },
  websocket: { icon: faComments, color: "#010101", label: "WebSocket" },
  ai: { icon: faRobot, color: "#9B59B6", label: "AI/ML" },
  electron: { icon: faLaptopCode, color: "#47848F", label: "Electron" },
};

// Project icon mapping
const projectIcons = {
  forum: faUsers,
  messenger: faComments,
  ai: faBrain,
  code: faFileCode,
  finance: faChartLine,
  robot: faRobot,
};

const projects = [
  {
    title: "GoTalk",
    subtitle: "Full-Stack Web Forum",
    description:
      "A modern Reddit-inspired forum platform enabling users to create communities, share posts, engage in discussions, and discover trending content.",
    icon: projectIcons.forum,
    iconBg: "linear-gradient(135deg, #00ADD8 0%, #00758F 100%)",
    techStack: ["react", "go", "database", "css"],
    url: "https://github.com/shiverin/GoTalk",
    featured: true,
  },
  {
    title: "Messenger",
    subtitle: "Real-time Chat Application",
    description:
      "Full-stack messaging SPA with Django Channels & WebSockets. Features include phone auth, chat archiving, read indicators, and profile editing.",
    icon: projectIcons.messenger,
    iconBg: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    techStack: ["python", "django", "websocket", "database"],
    url: "https://github.com/shiverin/messenger",
    featured: true,
  },
  {
    title: "Traffic Sign CNN",
    subtitle: "Machine Learning Classifier",
    description:
      "CNN using TensorFlow achieving 98.97% accuracy on GTSRB dataset through optimized network architecture and dropout regularization.",
    icon: projectIcons.ai,
    iconBg: "linear-gradient(135deg, #FF6F00 0%, #FF8F00 100%)",
    techStack: ["python", "tensorflow", "ai"],
    url: "https://github.com/shiverin/CNNTraffic",
    featured: true,
  },
  {
    title: "OfflineLeetcode",
    subtitle: "Competitive Programming App",
    description:
      "Electron-based desktop app for offline LeetCode practice. Code anywhere without internet with a clean, distraction-free interface.",
    icon: projectIcons.code,
    iconBg: "linear-gradient(135deg, #FFA116 0%, #FF6B00 100%)",
    techStack: ["react", "electron", "javascript", "python"],
    url: "https://github.com/shiverin/OfflineLeetcode",
    featured: false,
  },
  {
    title: "PDFiledit",
    subtitle: "PDF Editor Web App",
    description:
      "Flask-based web app for editing, signing, merging, and converting PDFs directly in the browser with session-based file management.",
    icon: projectIcons.code,
    iconBg: "linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)",
    techStack: ["python", "flask", "html", "css", "javascript"],
    url: "https://github.com/shiverin/PDFILEdit",
    featured: false,
  },
  {
    title: "Finance Portfolio",
    subtitle: "Stock Trading Simulator",
    description:
      "Python Flask finance app with PostgreSQL backend. Features stock quotes, portfolio management, and buy/sell functionality.",
    icon: projectIcons.finance,
    iconBg: "linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)",
    techStack: ["python", "flask", "database", "html", "css"],
    url: "https://github.com/shiverin/finance",
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <MotionVStack
      minW={{ base: "300px", md: "380px" }}
      maxW={{ base: "300px", md: "380px" }}
      h={{ base: "420px", md: "480px" }}
      bg={colors.bgCard}
      borderRadius="24px"
      overflow="hidden"
      position="relative"
      border="1px solid rgba(218, 165, 32, 0.1)"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(218, 165, 32, 0.2)",
        borderColor: "rgba(218, 165, 32, 0.3)",
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: project.iconBg,
        opacity: 0,
        transition: "opacity 0.3s ease",
      }}
      _hover={{
        _before: { opacity: 1 },
      }}
      spacing={0}
      cursor="pointer"
      role="group"
    >
      {/* Featured Badge */}
      {project.featured && (
        <Badge
          position="absolute"
          top={4}
          right={4}
          bg={colors.primary}
          color={colors.bgDark}
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          fontWeight="bold"
          zIndex={2}
        >
          Featured
        </Badge>
      )}

      {/* Icon Header */}
      <Box
        w="100%"
        h={{ base: "120px", md: "140px" }}
        background={project.iconBg}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
      >
        {/* Background pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.1}
          backgroundImage="radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)"
          backgroundSize="30px 30px"
        />
        
        <MotionBox
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon
            icon={project.icon}
            style={{
              fontSize: "3.5rem",
              color: "white",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
            }}
          />
        </MotionBox>
      </Box>

      {/* Content */}
      <VStack
        flex={1}
        p={{ base: 4, md: 5 }}
        align="flex-start"
        spacing={3}
        w="100%"
      >
        {/* Title & Subtitle */}
        <Box>
          <Heading
            as="h3"
            fontSize={{ base: "lg", md: "xl" }}
            color={colors.textLight}
            fontWeight="bold"
            mb={1}
          >
            {project.title}
          </Heading>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            color={colors.primary}
            fontWeight="medium"
          >
            {project.subtitle}
          </Text>
        </Box>

        {/* Description */}
        <Text
          fontSize={{ base: "sm", md: "sm" }}
          color={colors.textMuted}
          lineHeight="1.6"
          noOfLines={3}
          flex={1}
        >
          {project.description}
        </Text>

        {/* Tech Stack Icons */}
        <HStack spacing={2} flexWrap="wrap" w="100%">
          {project.techStack.map((tech) => (
            <Tooltip
              key={tech}
              label={techIcons[tech]?.label}
              placement="top"
              hasArrow
              bg={colors.bgDark}
              color={colors.primary}
              fontSize="sm"
              fontWeight="medium"
              px={3}
              py={2}
              borderRadius="md"
            >
              <Box
                p={2}
                borderRadius="lg"
                bg="rgba(255, 255, 255, 0.05)"
                border="1px solid transparent"
                _hover={{
                  bg: "rgba(255, 255, 255, 0.12)",
                  transform: "translateY(-3px) scale(1.1)",
                  borderColor: techIcons[tech]?.color,
                  boxShadow: `0 4px 12px ${techIcons[tech]?.color}40`,
                }}
                transition="all 0.25s ease"
                cursor="pointer"
              >
                <FontAwesomeIcon
                  icon={techIcons[tech]?.icon}
                  style={{
                    color: techIcons[tech]?.color,
                    fontSize: "1.1rem",
                  }}
                />
              </Box>
            </Tooltip>
          ))}
        </HStack>

        {/* View Project Link */}
        <Link
          href={project.url}
          isExternal
          w="100%"
          _hover={{ textDecoration: "none" }}
        >
          <HStack
            w="100%"
            justify="space-between"
            p={3}
            borderRadius="12px"
            bg="rgba(218, 165, 32, 0.1)"
            _groupHover={{
              bg: colors.primary,
            }}
            transition="all 0.3s ease"
          >
            <HStack spacing={2}>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: colors.primary }}
                className="github-icon"
              />
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color={colors.primary}
                _groupHover={{ color: colors.bgDark }}
              >
                View on GitHub
              </Text>
            </HStack>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: colors.primary }}
              className="arrow-icon"
            />
          </HStack>
        </Link>
      </VStack>
    </MotionVStack>
  );
};

const ProjectsSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <FullScreenSection
      backgroundColor={colors.bgDark}
      isDarkBackground
      p={{ base: 4, md: 8 }}
      alignItems="flex-start"
      spacing={{ base: 4, md: 6 }}
      overflow="hidden"
    >
      {/* Header */}
      <Box w="100%" maxW="1280px" px={{ base: 0, md: 4 }}>
        <HStack justify="space-between" align="flex-end" w="100%" mb={2}>
          <Box>
            <MotionHeading
              as="h1"
              id="projects-section"
              color={colors.primary}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              fontSize={{ base: "2xl", md: "4xl" }}
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-8px",
                left: 0,
                width: "80px",
                height: "4px",
                background: `linear-gradient(90deg, ${colors.primary}, transparent)`,
                borderRadius: "2px",
              }}
            >
              Featured Projects
            </MotionHeading>
            <Text
              color={colors.textMuted}
              fontSize={{ base: "sm", md: "md" }}
              mt={4}
            >
              Swipe or scroll to explore my work →
            </Text>
          </Box>

          {/* Navigation Arrows - Desktop only */}
          <HStack spacing={2} display={{ base: "none", md: "flex" }}>
            <IconButton
              aria-label="Scroll left"
              icon={<FontAwesomeIcon icon={faArrowLeft} />}
              onClick={() => scroll("left")}
              variant="outline"
              borderColor={colors.primary}
              color={colors.primary}
              borderRadius="full"
              size="lg"
              _hover={{
                bg: colors.primary,
                color: colors.bgDark,
              }}
            />
            <IconButton
              aria-label="Scroll right"
              icon={<FontAwesomeIcon icon={faArrowRight} />}
              onClick={() => scroll("right")}
              variant="outline"
              borderColor={colors.primary}
              color={colors.primary}
              borderRadius="full"
              size="lg"
              _hover={{
                bg: colors.primary,
                color: colors.bgDark,
              }}
            />
          </HStack>
        </HStack>
      </Box>

      {/* Horizontal Scroll Container */}
      <Box
        w="100%"
        overflow="visible"
      >
        <HStack
          ref={scrollContainerRef}
          spacing={{ base: 4, md: 6 }}
          overflowX="auto"
          py={6}
          px={{ base: 0, md: 4 }}
          css={{
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: colors.bgDarker,
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: colors.primary,
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: colors.primaryLight,
            },
            scrollbarWidth: "thin",
            scrollbarColor: `${colors.primary} ${colors.bgDarker}`,
            scrollSnapType: "x mandatory",
          }}
        >
          {projects.map((project, index) => (
            <Box key={project.title} scrollSnapAlign="start">
              <ProjectCard project={project} index={index} />
            </Box>
          ))}
          
          {/* View All Card */}
          <MotionVStack
            minW={{ base: "280px", md: "320px" }}
            h={{ base: "420px", md: "480px" }}
            bg="transparent"
            borderRadius="24px"
            border="2px dashed rgba(218, 165, 32, 0.3)"
            justify="center"
            align="center"
            spacing={4}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{
              borderColor: colors.primary,
              bg: "rgba(218, 165, 32, 0.05)",
            }}
            transition={{ duration: 0.3 }}
            cursor="pointer"
            as="a"
            href="https://github.com/shiverin?tab=repositories"
            target="_blank"
          >
            <Box
              p={4}
              borderRadius="full"
              bg="rgba(218, 165, 32, 0.1)"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{ fontSize: "2rem", color: colors.primary }}
              />
            </Box>
            <Text color={colors.primary} fontWeight="bold" fontSize="lg">
              View All Projects
            </Text>
            <Text color={colors.textMuted} fontSize="sm" textAlign="center" px={4}>
              Explore more on GitHub
            </Text>
          </MotionVStack>
        </HStack>
      </Box>

      {/* Scroll Indicator - Mobile */}
      <HStack
        justify="center"
        w="100%"
        display={{ base: "flex", md: "none" }}
        spacing={1}
        mt={2}
      >
        {projects.map((_, index) => (
          <Box
            key={index}
            w={2}
            h={2}
            borderRadius="full"
            bg={index === 0 ? colors.primary : "rgba(218, 165, 32, 0.3)"}
          />
        ))}
      </HStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
