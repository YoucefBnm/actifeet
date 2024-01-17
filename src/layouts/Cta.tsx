import { motion } from 'framer-motion'
import { AnimatedHeading, StaggerContainer } from '@/components'
import { fadeVariants, maskVariants } from '@/libs/motion/motion.variants'
import { Button } from '@/libs/shadcn/ui/button'
import { Link } from 'react-router-dom'

interface CtaProps {
    heading: string;
    paragraph: string;
    link: string;
    imageUrl: string
}

const Cta = ({ heading, paragraph, link, imageUrl }:CtaProps) => {

    const MotionButton = motion(Button)
    
    return (
    <section className="px-default py-9">
        <StaggerContainer direction={-1} style='flex flex-wrap gap-y-4 justify-between '>
           <StaggerContainer style='flex flex-col justify-between items-start'>
            <div className='mb-auto'><AnimatedHeading heading={heading} /></div>

            <motion.p 
                variants={fadeVariants('bottom')}
                className='text-zinc-950 max-w-[55ch] mb-6'
            >
                {paragraph}
            </motion.p>

            <MotionButton variants={fadeVariants('bottom')}>
                <Link to={link}>Shop Collection</Link>
            </MotionButton>
           </StaggerContainer>

            <StaggerContainer style='overflow-hidden'>
                <motion.div variants={maskVariants} transition={{duration: 1, delay: 1}}>
                    <img width={418} height={449} className='align-middle' loading='lazy' src={imageUrl} />
                </motion.div>
            </StaggerContainer>
        </StaggerContainer>
    </section>
  )
}

export default Cta