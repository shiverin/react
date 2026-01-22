import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, VStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { colors } from "../theme/constants";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:zhaoshizhen04@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/shiverin/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/zhaoshizhen2004/",
  },
];

const navItems = [
  { label: "Experience", anchor: "experience" },
  { label: "Hackathons", anchor: "hackathons" },
  { label: "Projects", anchor: "projects" },
  { label: "Contact Me", anchor: "contactme" },
];

const Header = () => {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinkStyle = {
    color: colors.primary,
    fontWeight: "bold",
    position: "relative",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
  };

  return (
    <MotionBox
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor={isScrolled || isMobileMenuOpen ? "rgba(24, 24, 27, 0.98)" : "rgba(24, 24, 27, 0.8)"}
      backdropFilter={`blur(${isScrolled ? 12 : 8}px)`}
      zIndex="1000"
      width="100vw"
      borderBottom={isScrolled ? "1px solid rgba(218, 165, 32, 0.2)" : "none"}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ opacity: headerOpacity }}
    >
      <Box color="white" maxWidth="100%" margin="0 auto">
        <HStack
          px={[4, 8, 16]}
          py={3}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Social Icons */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: index === 0 ? "0px" : isMobile ? "12px" : "20px",
                }}
                whileHover={{ 
                  scale: 1.2, 
                  color: colors.primary,
                  filter: "drop-shadow(0 0 8px rgba(218, 165, 32, 0.6))"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FontAwesomeIcon icon={social.icon} size={isMobile ? "lg" : "2x"} />
              </motion.a>
            ))}
          </nav>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <nav>
              <HStack spacing={[2, 4, 6]}>
                {navItems.map((item) => (
                  <motion.a
                    key={item.anchor}
                    href={`#${item.anchor}`}
                    onClick={handleClick(item.anchor)}
                    style={navLinkStyle}
                    whileHover={{
                      backgroundColor: "rgba(218, 165, 32, 0.15)",
                      boxShadow: "0 0 20px rgba(218, 165, 32, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </HStack>
            </nav>
          )}

          {/* Mobile Hamburger Button */}
          {isMobile && (
            <IconButton
              aria-label="Toggle menu"
              icon={<FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />}
              variant="ghost"
              color={colors.primary}
              fontSize="xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              _hover={{ bg: "rgba(218, 165, 32, 0.15)" }}
              _active={{ bg: "rgba(218, 165, 32, 0.25)" }}
            />
          )}
        </HStack>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobile && isMobileMenuOpen && (
            <MotionVStack
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              spacing={0}
              pb={4}
              overflow="hidden"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.anchor}
                  href={`#${item.anchor}`}
                  onClick={handleClick(item.anchor)}
                  style={{
                    ...navLinkStyle,
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "12px 16px",
                    borderBottom: index < navItems.length - 1 ? "1px solid rgba(218, 165, 32, 0.1)" : "none",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.98, backgroundColor: "rgba(218, 165, 32, 0.15)" }}
                >
                  {item.label}
                </motion.a>
              ))}
            </MotionVStack>
          )}
        </AnimatePresence>
      </Box>
    </MotionBox>
  );
};

export default Header;
