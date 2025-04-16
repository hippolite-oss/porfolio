"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import {FaFacebook, FaInstagram,  FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <footer className='bg-black text-white py-12'>
        <div className="container">
            <motion.div initial={{ opacity: 0}} whileInView= {{ opacity:1}}  className=' bg-gradient-to-r from-primary to-primary/20 py-12 border-2 border-primary rounded-2xl px-4 hover:red-shadow flex flex-col lg:flex-row gap-8 justify-around items-center duration-300 '>
               <div className='space-y-3'>
                <h2 className='text-3xl font-bold'>Bradley Hypox 😋😎</h2>
                <p>hippoliteagbodamakou@gmail.com</p>
                <p>copyright © 2025 Bradley Hypox</p>
               </div>
               <div className='flex items-center gap-3 lg:gap-10'>
                 <div>
                    <a href="https://www.linkedin.com/in/hippolite-agbodamakou-061700360/"><FaLinkedin className="text-4xl" /></a>
                 </div>
                 <div>
                    <a href="https://www.instagram.com/bradley_hypox/"><FaInstagram className="text-4xl" /></a>
                 </div>
                 <div>
                    <a href="https://www.facebook.com/profile.php?id=61561095388097"><FaFacebook className="text-4xl" /></a>
                 </div>
                 <div>
                    <a href="https://github.com/hippolite-oss"><FaGithub className="text-4xl" /></a>
                 </div>
               </div>
            </motion.div>
        </div>
    </footer>
  )
}

export default Footer