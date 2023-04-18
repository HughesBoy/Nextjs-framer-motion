"use client"
import React from 'react'
import { motion } from "framer-motion"
import { scaleCard } from '@/utils/Animations'
const AnimatedCard = () => {
  return (
    //<motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
    <motion.div variants={scaleCard} className='card'>
      <h1>card title</h1>
      <p>card subtitle text</p>
    </motion.div>
  )
}

export default AnimatedCard