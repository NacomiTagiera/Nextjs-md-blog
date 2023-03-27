import { NextApiRequest, NextApiResponse } from "next";

import * as yup from "yup";

import { ContactFormValues } from "@/interfaces/ContactFormValues";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const formData: ContactFormValues = await schema.validate(req.body);
    // Process the form submission here
    console.log(formData);
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
}
