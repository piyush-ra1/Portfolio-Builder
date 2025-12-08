"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, Github, Linkedin, Mail, CheckCircle } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/data";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="neon-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-400 mb-8">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <motion.a
                href={socialLinks.email}
                whileHover={{ x: 10, color: "#00f5d4" }}
                className="flex items-center gap-4 text-gray-300 hover:text-neon-teal transition-colors"
              >
                <div className="p-3 bg-dark-800 rounded-lg border border-dark-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, color: "#00f5d4" }}
                className="flex items-center gap-4 text-gray-300 hover:text-neon-teal transition-colors"
              >
                <div className="p-3 bg-dark-800 rounded-lg border border-dark-600">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-medium">@piyushkumarrai</p>
                </div>
              </motion.a>

              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, color: "#00f5d4" }}
                className="flex items-center gap-4 text-gray-300 hover:text-neon-teal transition-colors"
              >
                <div className="p-3 bg-dark-800 rounded-lg border border-dark-600">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-medium">Piyush Kumar Rai</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple via-neon-teal to-neon-blue rounded-2xl opacity-30 blur-lg" />

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative bg-dark-800 p-8 rounded-2xl border border-dark-600"
              >
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-dark-800 rounded-2xl z-10"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-16 h-16 text-neon-teal mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">I&apos;ll get back to you soon.</p>
                  </motion.div>
                )}

                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-neon-magenta">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-neon-magenta">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple transition-all resize-none"
                    placeholder="Hello, I would like to..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-neon-magenta">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-teal rounded-lg text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
