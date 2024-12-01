import { VERIFICATION_EMAIL_TEMPLATE } from "./emailtemplates.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationCode) => {
  const recipient = [{ email }];
  try {
    await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationCode
      ),
      category: "Verification Email",
    });
  } catch (error) {
    console.log(error.message);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};
