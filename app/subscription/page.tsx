"use client"
import React from "react";
import Pricing from "@/components/subscription/pricing";
import { ArrowRight, CheckCircle, Zap, Shield, Server } from "lucide-react";

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
  return <Pricing />;
}
