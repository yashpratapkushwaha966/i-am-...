import "dotenv/config";
import { Resend } from "resend";

console.log("Resend connected");

const resend = new Resend(process.env.RESEND_API_KEY);

export default resend;