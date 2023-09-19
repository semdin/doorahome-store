"use client";
import { SignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
 
export default function Page() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    >
    <SignIn afterSignInUrl="/cart" />
    </motion.div>
    );
}