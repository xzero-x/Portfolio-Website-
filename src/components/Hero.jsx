
import { motion } from "framer-motion";
import { styles } from "../styles";


import { EarthCanvas } from "./canvas"; 


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
       <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        
        <div>
          <h1 className={"text-8xl font-bold"}>
            Welcome to my <span className='text-[red]'>World</span>
          </h1>
        </div>
      </div>
      
      <EarthCanvas />

    </section>
  )
}

export default Hero