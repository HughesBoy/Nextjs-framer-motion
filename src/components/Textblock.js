import React from 'react'
import { motion } from 'framer-motion'
import { riseAndFade, slideText } from '@/utils/Animations'

const Textblock = ({ headingText, bodyText }) => {
  return (
    <motion.div>
      <motion.h1 variants={riseAndFade}>{headingText}</motion.h1>
      <motion.p variants={slideText}>{bodyText}</motion.p>
    </motion.div>
  )
}

export default Textblock