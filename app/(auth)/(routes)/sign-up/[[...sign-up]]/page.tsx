"use client";
import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";
 
export default function Page() {
  return(
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    >
      <SignUp />
    </motion.div>
  );
}