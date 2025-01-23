"use client"

import { motion } from "framer-motion"
import { Baloo_2 } from "next/font/google"

const cuteFont = Baloo_2({ weight: "700", subsets: ["latin"] })

export default function Page() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-50"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10 text-center">
        {/* Title */}
        <motion.h1
          className={`text-6xl md:text-8xl font-bold text-pink-400 mb-12 tracking-wide ${cuteFont.className}`} // 귀여운 폰트 적용
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          우리또
        </motion.h1>

        {/* Central Emoji */}
        <motion.div
          className="text-9xl md:text-[12rem] mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, 0, -10, 0] }}
          transition={{
            scale: { duration: 0.5 },
            rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          💌
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mt-8 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          함께 나누는 따뜻한 마음, 우리또에서 시작해보세요.
        </motion.p>
      </div>
    </div>
  )
}

