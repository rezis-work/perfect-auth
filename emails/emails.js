import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
} from "./emailtemplates.js";
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

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "7665ceeb-a175-460d-b6ed-ecddc6eff068",
      template_variables: {
        company_info_name: "LineDevLTD",
        name: name,
      },
    });
    console.log("Welcome Email Sent", response);
  } catch (error) {
    console.log("Error Sending Welcome Email", error.message);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};

export const sendResetPasswordEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });
  } catch (error) {
    throw new Error(`Error sending reset password email: ${error.message}`);
  }
};
