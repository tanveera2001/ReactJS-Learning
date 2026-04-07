"use client";
import { motion } from "framer-motion";

export default function ReviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        max-w-sm 
        bg-white 
        p-6 
        rounded-3xl 
        shadow-[0_20px_50px_rgba(0,0,0,0.15)]
        border border-gray-100
      "
    >
      {/* User Section */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/user.jpg"
          alt="user"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">J. Phillips</h3>
          <p className="text-gray-500 text-sm">CEO · Fondo · Angel Investor</p>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">
        Working with him has been awesome — super fast, collaborative, and highly
        creative. I would happily recommend him for any serious project.
      </p>
    </motion.div>
  );
}
