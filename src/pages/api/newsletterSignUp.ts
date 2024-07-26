import validateEmail from "@/utils/functions/validateEmail";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  try {
    // Create a new contact in Brevo
    await await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        updateEnabled: false,
        email: email,
        listIds: [6],
      }),
    });

    res.status(200).json({
      success: true,
      message: "Successfully subscribed to the newsletter",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      //@ts-expect-error
      message: error.message || "Failed to subscribe to the newsletter",
    });
  }
}
