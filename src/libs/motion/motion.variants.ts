
type DirectionType = 'top' | 'bottom' | 'left' | 'right' | 'z' | null

export const fadeVariants = (direction:DirectionType) => {

    return {
        hidden: {
          x: direction==='left' ? 100 : direction==='right' ? -100 : 0,
          y: direction==='top' ? -100 : direction==='bottom' ? 100 : 0,
          scale: direction==='z' ? .2 : 1,
          opacity: 0,
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        }
    }
}

export const maskVariants = {
  hidden: {WebkitMaskImage: 'repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)'},
  visible: {WebkitMaskImage: 'repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)'} 
}