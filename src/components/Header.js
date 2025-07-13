import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

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
  }
];

const Header = () => {
  const headerRef = useRef(null);  // Create a ref for the header Box

  // Handle click for smooth scroll
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Log the width of the header element once when it mounts
  useEffect(() => {
    if (headerRef.current) {
      const headerWidth = headerRef.current.getBoundingClientRect().width;
      console.log('Header width:', headerWidth);
    }
  }, []);  // Empty dependency array to run only once after initial render

  return (
    <Box
      ref={headerRef}  // Attach the ref to the Box component
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1000"
      width="100vw"
      //style={{ border: '2px solid red' }}
    >
      <Box color="white" maxWidth="100%" margin="0 auto">
        <HStack
          px={[4, 8, 16]} // responsive padding
          py={4}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          {/* Social Icons */}
          <nav style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
            {socials.map((social, index) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: index === 0 ? "0px" : "20px",
                  marginBottom: "8px",
                }}
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </nav>

          {/* Nav Links */}
          <nav>
            <HStack spacing={[4, 6, 9]} flexWrap="wrap">
              <a href="#projects" onClick={handleClick("projects")} style={{ color: "#DAA520", fontWeight: "bold" }}>
                Projects
              </a>
              <a href="#contact-me" onClick={handleClick("contactme")} style={{ color: "#DAA520", fontWeight: "bold" }}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
