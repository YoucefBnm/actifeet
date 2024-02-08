import { motion } from "framer-motion"

const toastVariants = {
    hidden: {
        x: -300
    },
    visible: {
        x: 0
    }
}

const Toast = () => {
  return (
    <motion.div 
        className="border overflow-hidden w-64 rounded-md border-zinc-200 py-4 px-4 bg-white text-zinc-950 shadow-md"
        variants={toastVariants}
        animate={'visible'}
    >
        toast
    </motion.div>
  )
}

export default Toast