import {NextResponse} from "next/server";
import nodeMailer from "nodemailer";

// This step is to create a transporter object that will be used to send the email
// The transporter object is created using the createTransport method of the nodemailer module
const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
            user:
      }