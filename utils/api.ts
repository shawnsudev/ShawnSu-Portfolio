import { contactFormData } from "./types";

export const sendContactForm = async (data: contactFormData) => {
  fetch("/api/contact", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
    method: "POST",
  });
};
