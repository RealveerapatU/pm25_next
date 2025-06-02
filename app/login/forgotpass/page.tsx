"use client";
import React from "react";
import { motion } from "framer-motion";
import { LoginForm } from "@/components/login/login-form";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export default function Page() {
  return (
    <motion.section variants={fadeInUp} initial="hidden" whileInView="visible">
      
    </motion.section>
  );
}
