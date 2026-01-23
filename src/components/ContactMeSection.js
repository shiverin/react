import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import useSubmit from "../hooks/useSubmit";
import { colors, shadows } from "../theme/constants";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionVStack = motion(VStack);

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      contact: "",
      comment: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await submit(values);
      if (response?.type === "success") {
        resetForm();
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      comment: Yup.string().required("Message is required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type === "success" ? "Success" : "Error", response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response, onOpen]);

  const inputStyles = {
    bg: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(218, 165, 32, 0.2)",
    borderRadius: "12px",
    _hover: {
      borderColor: "rgba(218, 165, 32, 0.4)",
    },
    _focus: {
      borderColor: colors.primary,
      boxShadow: `0 0 0 1px ${colors.primary}`,
    },
    transition: "all 0.3s ease",
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <FullScreenSection
      sectionId="contactme-section"
      isDarkBackground
      backgroundColor={colors.bgDarker}
      py={16}
      spacing={8}
      width="100vw"
      position="relative"
      overflow="hidden"
    >
      {/* Background glow */}
      <MotionBox
        position="absolute"
        bottom="-10%"
        left="20%"
        width="400px"
        height="400px"
        borderRadius="full"
        background={`radial-gradient(circle, ${colors.primary}10 0%, transparent 70%)`}
        filter="blur(60px)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionVStack
        w="100%"
        p={[4, 8, 16, 32]}
        alignItems="flex-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        zIndex={1}
      >
        <MotionHeading
          as="h1"
          color={colors.primary}
          variants={itemVariants}
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: 0,
            width: "60px",
            height: "4px",
            background: `linear-gradient(90deg, ${colors.primary}, transparent)`,
            borderRadius: "2px",
          }}
        >
          Contact me
        </MotionHeading>

        <Text color={colors.textMuted} mt={4} variants={itemVariants} as={motion.p}>
          Have a project in mind or just want to say hi? Drop me a message!
        </Text>

        <MotionBox
          p={[4, 6, 8]}
          rounded="xl"
          w="100%"
          maxW="600px"
          background={`linear-gradient(135deg, rgba(30, 30, 30, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)`}
          border="1px solid rgba(218, 165, 32, 0.1)"
          boxShadow={shadows.card}
          variants={itemVariants}
          mt={6}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={5}>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName" color={colors.textLight}>
                  Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputStyles}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email" color={colors.textLight}>
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputStyles}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.contact && formik.touched.contact}>
                <FormLabel htmlFor="contact" color={colors.textLight}>
                  Contact No (optional)
                </FormLabel>
                <Input
                  id="contact"
                  name="contact"
                  type="tel"
                  pattern="[0-9]{8}"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  {...inputStyles}
                />
                <FormErrorMessage>{formik.errors.contact}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment" color={colors.textLight}>
                  Your message
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={200}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  resize="none"
                  {...inputStyles}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                width="full"
                isLoading={isLoading}
                loadingText="Sending..."
                background={`linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`}
                color={colors.bgDark}
                fontWeight="bold"
                py={6}
                borderRadius="12px"
                boxShadow={shadows.glow}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: shadows.glowStrong,
                }}
                _active={{
                  transform: "translateY(0)",
                }}
                transition="all 0.3s ease"
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </MotionBox>
      </MotionVStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
