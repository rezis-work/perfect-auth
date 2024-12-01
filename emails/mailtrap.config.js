import dotenv from "dotenv";
import { MailtrapClient } from "mailtrap";
dotenv.config({ path: ".env" });

export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  endpoint: process.env.MAILTRAP_ENDPOINT,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Rezi Karanadze",
};
