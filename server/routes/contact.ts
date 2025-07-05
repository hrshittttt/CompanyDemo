import { RequestHandler } from "express";
import { ContactFormRequest, ContactFormResponse } from "@shared/api";

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const formData: ContactFormRequest = req.body;

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      const response: ContactFormResponse = {
        success: false,
        message: "All required fields must be filled",
      };
      return res.status(400).json(response);
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Nodemailer, etc.
    // 2. Store the contact form submission in a database
    // 3. Send notifications to your team

    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", formData);

    // Example of how you might send an email:
    // await sendEmail({
    //   to: "info@railconstruct.com",
    //   subject: `New Contact Form Submission from ${formData.name}`,
    //   html: `
    //     <h3>New Contact Form Submission</h3>
    //     <p><strong>Name:</strong> ${formData.name}</p>
    //     <p><strong>Email:</strong> ${formData.email}</p>
    //     <p><strong>Phone:</strong> ${formData.phone}</p>
    //     <p><strong>Company:</strong> ${formData.company}</p>
    //     <p><strong>Message:</strong> ${formData.message}</p>
    //   `
    // });

    const response: ContactFormResponse = {
      success: true,
      message:
        "Thank you for your message. We'll get back to you within 24 hours.",
    };

    res.json(response);
  } catch (error) {
    console.error("Error processing contact form:", error);

    const response: ContactFormResponse = {
      success: false,
      message:
        "An error occurred while processing your request. Please try again.",
    };

    res.status(500).json(response);
  }
};
