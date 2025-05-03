import { useState } from "react";
import emailjs from "emailjs-com";
import { useAlertContext } from "../context/alertContext";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const { onOpen } = useAlertContext(); // <-- YOU NEED THIS

  const submit = async (formData) => {
    setLoading(true);

    const templateParams = {
      user_name: formData.firstName,
      user_email: formData.email,
      user_contact: formData.contact,
      message: formData.comment,
      submission_time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_exn8agn",      // Replace with your actual service ID
        "template_ufthmxd",     // Replace with your actual template ID
        templateParams,
        "jIcCGsH2zf7fnK5X3"     // Replace with your actual PUBLIC key
      );
      onOpen("success", `Thanks for your submission ${formData.firstName}, we will get back to you shortly!`);
    } catch (error) {
      console.error("EmailJS error:", error);
      onOpen("error", "There was an error sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, submit };
};

export default useSubmit;
