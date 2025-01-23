"use client"

import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fde2e4] to-[#fff1f2] flex items-center justify-center relative">
      {/* 메인 콘텐츠 */}
      <div className="relative text-center">
        {/* 타이틀 */}
        <motion.h1
          className="text-7xl md:text-9xl font-bold text-[#ff3366] tracking-wide"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          우리또
        </motion.h1>

        {/* 봉투 이모지 */}
        <motion.div
          className="text-8xl md:text-[12rem] mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          💌
        </motion.div>

        {/* 서브타이틀 */}
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
