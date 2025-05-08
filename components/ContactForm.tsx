"use client";

import Button from "./UI/Button";
import { useState } from "react";
import Notifications from "./UI/Notifications";
import LoadingSpinner from "./UI/LoadingSpinner";

// Define the form data type
interface FormData {
  name: string;
  email: string;
  companyName: string;
  phoneNumber: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success"
  );

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Show notification helper function
  const showMessage = (message: string, type: "success" | "error") => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setShowNotification(false);

    try {
      // Basic validation
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.companyName.trim() ||
        !formData.phoneNumber.trim()
      ) {
        showMessage("Please fill in all fields", "error");
        setLoading(false);
        return;
      }

      // Email validation
      if (!formData.email.includes("@")) {
        showMessage("Please enter a valid email address", "error");
        setLoading(false);
        return;
      }

      // Create FormData object
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("companyName", formData.companyName);
      formDataToSubmit.append("phoneNumber", formData.phoneNumber);
      formDataToSubmit.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""
      );

      // Send form data to web3forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        showMessage(
          "Message sent successfully! We'll get back to you soon.",
          "success"
        );
        // Reset form
        setFormData({ name: "", email: "", companyName: "", phoneNumber: "" });
      } else {
        showMessage(
          data.message || "Failed to send message. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showMessage("An unexpected error occurred. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Notification Component */}
      <Notifications
        message={notificationMessage}
        type={notificationType}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        duration={5000}
      />
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white text-heading px-5 py-8 flex flex-col gap-5 rounded-2xl shadow-lg"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            className="border border-gray-300 h-12 rounded-md px-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            className="border border-gray-300 h-12 rounded-md px-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="companyName">Company Name</label>
          <input
            name="companyName"
            id="companyName"
            onChange={handleChange}
            value={formData.companyName}
            className="border border-gray-300 h-12 rounded-md px-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phoneNumber"
            id="phone"
            onChange={handleChange}
            value={formData.phoneNumber}
            className="border border-gray-300 h-12 rounded-md px-4"
          />
        </div>
        <Button variant="primary" className="w-fit" type="submit">
          {loading ? (
            <span className="flex items-center gap-2">
              <LoadingSpinner size="md" /> Sending...
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </>
  );
};

export default Form;
