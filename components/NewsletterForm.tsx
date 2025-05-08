"use client";

import Button from "./UI/Button";
import LoadingSpinner from "./UI/LoadingSpinner";
import Notifications from "./UI/Notifications";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success"
  );

  // show notification helper function
  const showMessage = (msg: string, type: "success" | "error") => {
    setMessage(msg);
    setNotificationType(type);
    setShowNotification(true);
  };

  // sumbit form handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.includes("@")) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    setLoading(true);
    setShowNotification(false);

    try {
      // Send subscription request to API
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        showMessage(
          data.message || "Successfully subscribed to the newsletter!",
          "success"
        );
        setEmail(""); // Clear email input on success
      } else {
        // Handle the new error format (success: false, message: "error message")
        showMessage(
          data.message || data.error || "An error occurred. Please try again.",
          "error"
        );
      }
    } catch (error) {
      showMessage("An unexpected error occurred. Please try again.", "error");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Notifications
        message={message}
        type={notificationType}
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        duration={5000}
      />
      <p className="text-xl leading-[100%] font-bold mb-5">
        Subscribe to our newsletter
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 p-4 border rounded-lg border-text"
          />
        </div>
        <p className="text-sm mt-4 mb-5">
          By subscribing you agree to our{" "}
          <span className="underline cursor-pointer">Terms & Conditions</span>{" "}
        </p>

        <Button type="submit" variant="primary">
          {loading ? (
            <span className="flex items-center gap-2">
              <LoadingSpinner size="md" /> Subscribing...
            </span>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    </>
  );
};

export default NewsletterForm;
