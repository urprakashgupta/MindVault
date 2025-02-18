import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(3, "Username must be atleast 3 character long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be atleast 6 character long"),
});

export const signinSchema = signupSchema.pick({
  email: true,
  password: true,
});
