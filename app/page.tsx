"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
        className="min-h-screen snap-center flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black px-4 md:px-6 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="secondary" className="mb-4">
            🚀 Get Started Today
          </Badge>
        </motion.div>
        <motion.h1
          className="text-3xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-4"
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
          className="max-w-[700px] text-muted-foreground md:text-xl mb-6 text-white"
          variants={fadeInUp}
        >
          Join us, real-time air quality data is waiting for you.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-4"
          variants={fadeInUp}
        >
          <a href="#features">
            <Button size="lg">Learn more</Button>
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        id="features"
        className="min-h-screen snap-center py-16 px-4 md:px-6 bg-white"
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
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary" />
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
            <Card>
              <CardHeader>
                <Server className="h-10 w-10 text-primary" />
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
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary" />
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
