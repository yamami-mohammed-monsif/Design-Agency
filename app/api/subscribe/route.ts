import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Get the email from the request body
    const { email } = await request.json();

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Get Mailchimp credentials from environment variables
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX || "us8";
    const listId = process.env.MAILCHIMP_LIST_ID || "ca1539c15f";

    // Check if API key exists
    if (!apiKey) {
      console.error("Missing Mailchimp API key");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Set up the API URL and request data
    const apiUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const data = {
      email_address: email,
      status: "pending", // Using "pending" for double opt-in
    };

    // Make the request to Mailchimp's API
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
          "base64"
        )}`,
      },
      body: JSON.stringify(data),
    });

    // Parse Mailchimp's response
    const responseData = await response.json();

    // Handle the response based on status code
    if (response.ok) {
      // Success case
      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you for subscribing! Please check your email to confirm.",
        },
        { status: 201 }
      );
    } else {
      // Handle special error cases
      if (responseData.title === "Member Exists") {
        return NextResponse.json(
          {
            success: false,
            message: "You are already subscribed to our newsletter!",
          },
          { status: 400 }
        );
      }

      // Log error for debugging but don't expose details to user
      console.error("Mailchimp API Error:", responseData);

      // Return specific error message if available
      return NextResponse.json(
        {
          success: false,
          message:
            responseData.detail ||
            "Failed to subscribe. Please try again later.",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    // Unexpected errors (server errors, network issues, etc.)
    console.error("Server error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
