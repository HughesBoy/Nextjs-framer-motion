export const riseAndFade = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
}

export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    }
  }
}

export const animateSpan = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
   y: 0,
   opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}


export const staggerChildren3 = {
  show: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    }
  }
}


export const animateSpan3 = {
  hidden: {
    //y: 100,
    opacity: 0,
  },
  show: {
   //y: 0,
   opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}



//typing effect
export const staggerChildren2 = {
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    }
  }
}

export const animateSpan2 = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
    },
  },
}
//

//stagger scale effect

export const staggerCards = {
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
}

export const scaleCard = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [.32, .23, .4, .9],
    },
  },
}


export const animatedVideo = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
}

export const slideText = {
  initial: {
    x: -100,
  },
  animate: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
}






export const fadeIn = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 100,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  }
}