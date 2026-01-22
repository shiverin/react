import React from "react";
import { Box, Flex, Text, HStack, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../theme/constants";

const MotionBox = motion(Box);

const socials = [
  { icon: faEnvelope, url: "mailto:zhaoshizhen04@gmail.com", label: "Email" },
  { icon: faGithub, url: "https://github.com/shiverin/", label: "GitHub" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/zhaoshizhen2004/", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <MotionBox
      backgroundColor={colors.bgHeader}
      borderTop={`1px solid rgba(218, 165, 32, 0.1)`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <footer>
        <Flex
          margin="0 auto"
          px={[4, 8, 12]}
          py={8}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column", "column", "row"]}
          maxWidth="1280px"
          gap={4}
        >
          <VStack align={["center", "center", "flex-start"]} spacing={2}>
            <Text fontSize="lg" fontWeight="bold" color={colors.primary}>
              Shizhen Zhao
            </Text>
            <Text fontSize="sm" color={colors.textMuted}>
              Built with <FontAwesomeIcon icon={faHeart} color={colors.primary} size="sm" /> using React & Chakra UI
            </Text>
          </VStack>

          <HStack spacing={6}>
            {socials.map((social) => (
              <motion.a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{
                  scale: 1.2,
                  color: colors.primary,
                }}
                whileTap={{ scale: 0.95 }}
                style={{ color: colors.textMuted }}
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </motion.a>
            ))}
          </HStack>

          <Text fontSize="sm" color={colors.textMuted}>
            © 2026 All rights reserved
          </Text>
        </Flex>
      </footer>
    </MotionBox>
  );
};

export default Footer;
