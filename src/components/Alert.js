import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../theme/constants";

const MotionContent = motion(AlertDialogContent);

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <AlertDialogOverlay bg="blackAlpha.600" backdropFilter="blur(4px)">
        <AnimatePresence>
          {isOpen && (
            <MotionContent
              py={6}
              px={6}
              backgroundColor={isSuccess ? colors.success : colors.error}
              borderRadius="16px"
              boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Box display="flex" alignItems="center" gap={3}>
                <FontAwesomeIcon
                  icon={isSuccess ? faCheckCircle : faTimesCircle}
                  size="2x"
                  color={isSuccess ? "#2E7D32" : "#C62828"}
                />
                <Box>
                  <AlertDialogHeader
                    fontSize="xl"
                    fontWeight="bold"
                    p={0}
                    color={isSuccess ? "#1B5E20" : "#B71C1C"}
                  >
                    {isSuccess ? "Success!" : "Oops!"}
                  </AlertDialogHeader>
                  <AlertDialogBody
                    p={0}
                    mt={1}
                    color={isSuccess ? "#2E7D32" : "#C62828"}
                  >
                    {message}
                  </AlertDialogBody>
                </Box>
              </Box>
            </MotionContent>
          )}
        </AnimatePresence>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
