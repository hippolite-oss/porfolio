"use client"
import React from 'react'
import { delay, motion } from 'framer-motion';
import {CiPen} from "react-icons/ci"
import {IoFolderOpen} from "react-icons/io5"
import {RiComputerFill} from "react-icons/ri"
import {FiDownload} from "react-icons/fi"
import RedBG from "../../assets/redbg2.png";
import { slideUp } from '../Hero/Hero';
import { useLanguage } from '@/context/LanguageContext';

const bgStyle = {
    backgroundImage: `url(${RedBG.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

const serviceIcons = [
    <CiPen className="text-3xl" />,
    <IoFolderOpen className="text-3xl" />,
    <RiComputerFill className="text-3xl" />,
    <RiComputerFill className="text-3xl" />,
];

const serviceDelays = [1.2, 1.4, 1.6, 1.8];

const reveal = (delay) =>{
    return {
      initial: {
        opacity :0,
      },
      animate : {
        opacity :1,
        transition : {
          duration : 0.4,
          delay : delay,
        },
      },
    };
  };

const Services = () => {
  const { t } = useLanguage();
  const servicesData = t.services.items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    icon: serviceIcons[index],
    desc: item.desc,
    delay: serviceDelays[index],
  }));

  return (
    <section style={bgStyle}>
        <div className='bg-gradient-to-b from-black to-primary/5 text-white '>
            <div className='container py-40'>
              <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                {/* Services Info  */}
                <div className='flex flex-col justify-center'>
                    <div className='text-left space-y-7 lg:max-w-[400px]'>
                        <motion.h1 variants={slideUp(0.3)} initial="initial" animate="animate" className='text-3xl lg:text-4xl font-bold'>{t.services.title}</motion.h1>
                        <motion.p variants={slideUp(0.5)} initial="initial" animate="animate" className='text-white/70 text-xl'>{t.services.description}</motion.p>
                        <div className='flex items-center gap-4'>
                            <motion.button variants={slideUp(0.7)} initial="initial" animate="animate" className=' text-primary rounded font-bold px-5  !bg-white text-xs py-3 md:text-base hover:red-shadow'>{t.services.knowMore}</motion.button>

                            <a href="./cv.pdf">
                            <motion.button variants={slideUp(0.9)} initial="initial" animate="animate" className='border border-white/50 rounded-lg px-4  text-xs md:text-base flex items-center gap-2 py-3  '>
                                <FiDownload/>
                                {t.services.downloadCV}
                            </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Services card  */}
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                       {
                       servicesData.map((service) => {
                        return (
                            <motion.div
                                variants={reveal(service.delay)}
                                key={service.id} // Ajout de la clé unique
                                initial="initial"
                                whileInView={"animate"}
                                className='flex flex-col gap-4 justify-center items-start p-6 bg-white/20 backdrop-blur-sm rounded-2xl'>
                                <div className='text-primary/80 bg-white/70 rounded-full p-2'>
                                    {service.icon}
                                </div>
                                <h1 className='text-2xl font-bold'>{service.title}</h1>
                                <p className='text-sm text-white/70'>{service.desc}</p>
                            </motion.div>
                        );
                    })
                       }
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Services