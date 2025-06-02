"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import BG from "@/public/image.png";
import Typewriter from "typewriter-effect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth flex-auto">
      <motion.section
        className="min-h-screen snap-center flex flex-col justify-center items-center px-4 md:px-6 text-center text-white"
        style={{
          backgroundImage: `url(${BG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div variants={fadeInUp}>
          <Badge
            variant="secondary"
            className="mb-4 bg-white/90 text-black shadow-md font-semibold tracking-wide"
          >
            🚀 Get Started Today
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mb-4 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
          variants={fadeInUp}
        >
          <Typewriter
            options={{
              strings: ["Real-time Air Quality Data"],
              autoStart: true,
              loop: false,
              deleteSpeed: Infinity,
              delay: 70,
              cursor: "_",
            }}
          />
        </motion.h1>

        <motion.p
          className="max-w-[700px] text-white/90 md:text-xl mb-6 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
          variants={fadeInUp}
        >
          Join us, real-time air quality data is waiting for you.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4"
          variants={fadeInUp}
        >
          <a href="#features">
            <Button
              size="lg"
              className="bg-white/90 text-black font-semibold shadow-lg hover:bg-white"
            >
              Learn more
            </Button>
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        id="features"
        className="min-h-screen snap-center py-16 px-4 md:px-6 bg-gradient-to-b from-white via-gray-100 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-12">
          <motion.div variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-gray-100 via-white to-gray-300 shadow-lg border border-gray-300">
              <CardHeader>
                <Zap className="h-10 w-10 text-gray-700" />
                <CardTitle>Fast Realtime Data</CardTitle>
                <CardDescription>
                  Get update with real time air quality data from sensors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {["Real time database", "Accurate", "Low latency"].map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-gray-100 via-white to-gray-300 shadow-lg border border-gray-300">
              <CardHeader>
                <Server className="h-10 w-10 text-gray-700" />
                <CardTitle>Scalable Infrastructure</CardTitle>
                <CardDescription>
                  Our platform is built on a scalable infrastructure to handle
                  large amounts of data and users.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {[
                    "Fast data processing",
                    "Fast data storage",
                    "Fast network system",
                    "Backup",
                    "Low latency",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-gray-100 via-white to-gray-300 shadow-lg border border-gray-300">
              <CardHeader>
                <Shield className="h-10 w-10 text-gray-700" />
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Your data is safe with us. We prioritize security and
                  reliability in our platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    End-to-end encryption
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
