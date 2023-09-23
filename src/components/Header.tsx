
import "../App.css"
import { movingH1 } from '../utils/motion'
import { staggerContainer } from '../utils/motion'
import { motion } from 'framer-motion'
import Switch from '../assets/switch'
import { styles } from '../utils/styles'
import { v4 as uuid } from "uuid"



function Header() {


  return (
    <>
        <div className={` md:hidden flex justify-between py-8 ${styles.padding} w-screen cover h-52 image-mobile-light image-mobile-dark  `}>
            <motion.h1
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="flex "
            >
                {["T","O", "D","O"].map((word)=>{
                    return(

                        <motion.span
                            variants={movingH1}
                            className='text-[2rem] text-white flex'
                            key={uuid()}
                        >
                            {word}
                        </motion.span>
       
                    )

                })}

            </motion.h1>
            <Switch/>
        </div>
        <div className={`hidden ${styles.padding2} h-64 py-10 justify-between md:flex cover w-screen image-desktop-light image-desktop-dark`}>
        <motion.h1
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="flex "
            >
                {["T","O", "D","O"].map((word)=>{
                    return(

                        <motion.span
                            variants={movingH1}
                            className='text-[2rem] text-white flex'
                            key={uuid()}
                        >
                            {word}
                        </motion.span>
       
                    )

                })}

            </motion.h1>
            <Switch/>
        </div>
    </>
  )
}

export default Header