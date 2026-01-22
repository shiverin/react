import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { colors, shadows } from "../theme/constants";

const MotionBox = motion(Box);

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          position="fixed"
          bottom="30px"
          right="30px"
          zIndex="1001"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            icon={<FontAwesomeIcon icon={faArrowUp} />}
            size="lg"
            borderRadius="full"
            background={colors.primary}
            color={colors.bgDark}
            boxShadow={shadows.glow}
            _hover={{
              background: colors.primaryLight,
              transform: "translateY(-3px)",
              boxShadow: shadows.glowStrong,
            }}
            _active={{
              transform: "translateY(0)",
            }}
            transition="all 0.3s ease"
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
