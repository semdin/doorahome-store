"use client";
import { SignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
 
export default function Page() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    >
    <div className="pt-8">
    <SignIn afterSignInUrl="/cart" />
    </div>
    </motion.div>
    );
}