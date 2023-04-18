"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { animateSpan2, animateSpan3, staggerChildren3, staggerChildren2, staggerCards, scaleCard } from '@/utils/Animations'
import AnimatedCard from '@/components/AnimatedCard'


const AnimationsPage = () => {
  return (
    <motion.div initial="hidden" animate="show">
      <motion.div variants={staggerChildren3} className="text-9xl">
        <motion.span variants={animateSpan3}>V</motion.span>
        <motion.span variants={animateSpan3}>A</motion.span>
        <motion.span variants={animateSpan3}>Y</motion.span>
        <motion.span variants={animateSpan3}>G</motion.span>
        <motion.span variants={animateSpan3}>A</motion.span>
        <motion.span variants={animateSpan3}>R</motion.span>
      </motion.div>
     
      <motion.div variants={staggerChildren2} className="text-5xl">
        <motion.span variants={animateSpan2}>V</motion.span>
        <motion.span variants={animateSpan2}>A</motion.span>
        <motion.span variants={animateSpan2}>Y</motion.span>
        <motion.span variants={animateSpan2}>G</motion.span>
        <motion.span variants={animateSpan2}>A</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
        <motion.span variants={animateSpan2}>R</motion.span>
      </motion.div>

      <motion.div variants={staggerCards}>
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
      </motion.div>

    </motion.div>
  )
}

export default AnimationsPage