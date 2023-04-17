"use client"

import "./globals.css";
import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion'
import { riseAndFade, staggerChildren, animateSpan, animatedVideo } from "@/utils/Animations";
import Textblock from "@/components/Textblock";

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate">
      <Navbar />
      <main className="grid grid-cols-[3fr_1fr] py-12">
        <motion.div variants={staggerChildren} className="text-8xl font-bold w-[40rem] leading-[90%] tracking-[-2px]">
          {/* <AnimatedText titleText="VAYGAR" /> */}
          <motion.span variants={animateSpan} className="inline-block">V</motion.span>
          <motion.span variants={animateSpan} className="inline-block">A</motion.span>
          <motion.span variants={animateSpan} className="inline-block">Y</motion.span>
          <motion.span variants={animateSpan} className="inline-block">G</motion.span>
          <motion.span variants={animateSpan} className="inline-block">A</motion.span>
          <motion.span variants={animateSpan} className="inline-block">R</motion.span>
        </motion.div>
        <motion.div className="text-base leading-[150%] self-end" variants={riseAndFade}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </motion.div>
        
      </main>
      <motion.div className="box" variants={animatedVideo}>edgre</motion.div>
      
      {/* <motion.video autoPlay loop mute playsInline variants={animatedVideo}>
        <source src="/assets/vid.mp4" type="video/mp4" />
      </motion.video> */}
      <Textblock headingText="header text" bodyText="this is the body text" />
    </motion.div>
  );
}


// const AnimatedText = ({titleText}) => {

//   return(
//     <span>
//       {titleText.split("").map((word, idx) => {
//         <div key={idx} className="inline-block">
//           <span className="inline-block">{word}</span>
//         </div>
//       })}
//     </span>
//   )
// }
