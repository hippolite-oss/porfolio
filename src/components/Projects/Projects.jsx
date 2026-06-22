"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Project1 from "../../assets/PayPal-site.png";
import Project2 from "../../assets/caurispay.png";
import Project3 from "../../assets/facebook.png";
import Project4 from "../../assets/register.png";
import Project5 from "../../assets/todolist.png";
import Project6 from "../../assets/uatmGasa.png";
import Project7 from "../../assets/qr.png";



import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from '@/context/LanguageContext';

// Données fixes des projets (images et liens, indépendants de la langue)
const ProjetsMeta = [
    { id: 1, img: Project1, lien1: "https://newsitepay.vercel.app/", lien2: "https://github.com/hippolite-oss" },
    { id: 2, img: Project2, lien1: "https://cauris-pay-sooty.vercel.app/", lien2: "https://github.com/hippolite-oss" },
    { id: 3, img: Project3, lien1: "https://facebook-form-five.vercel.app/", lien2: "https://github.com/hippolite-oss" },
    { id: 4, img: Project4, lien1: "https://register-seven-delta.vercel.app/", lien2: "https://github.com/hippolite-oss" },
    { id: 5, img: Project5, lien1: "https://todolist-indol-one-31.vercel.app/", lien2: "https://github.com/hippolite-oss" },
    { id: 6, img: Project6, lien1: "https://gasasite.vercel.app/index.html", lien2: "https://github.com/hippolite-oss" },
    { id: 7, img: Project7, lien1: "https://generateur-code-qr.vercel.app/", lien2: "https://github.com/hippolite-oss" },
];


// Configuration du slider avec autoplay activé
const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Permet le défilement automatique
    autoplaySpeed: 3000, // Délai entre chaque défilement (en millisecondes)
    responsive: [
        {
            breakpoint: 768, // Pour les mobiles
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const Projects = () => {
    const { t } = useLanguage();
    const ProjetsData = ProjetsMeta.map((meta, index) => ({
        ...meta,
        title: t.projects.items[index].title,
        desc: t.projects.items[index].desc,
    }));

    return (
        <section className='bg-black text-white'>
            <div className="container py-20 xl:py-36 space-y-36">
                {/* Titre */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className='relative text-center'>
                    <p className='text-3xl lg:text-4xl tracking-widest font-bold uppercase z-20'>{t.projects.heading}</p>
                    <p className='text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-extrabold'>{t.projects.heading}</p>
                </motion.div>

                {/* Section slider */}
                <Slider {...sliderSettings}>
                    {ProjetsData.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.05 }} // Ombre au survol
                            className="p-6 group"
                        >
                            <div className="bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl space-y-5 transition-all duration-300 transform">
                                <Image className='w-full object-cover rounded' src={project.img} alt={project.title} />
                                <div className='space-y-2 p-4'>
                                    <h1 className="text-lg font-bold">{project.title}</h1>
                                    <p className='text-sm line-clamp-5'>{project.desc}</p>
                                </div>
                                <div className='hidden group-hover:flex justify-around items-center duration-300'>
                                    <Link href={project.lien1} target="_blank" >
                                        <button className='border-2 border-white py-2 rounded-lg px-4'target='blilnk'>{t.projects.live}</button>
                                    </Link>
                                    <Link href={project.lien2} target="_blank" >
                                        <button className='btn'>{t.projects.viewCode}</button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Projects;
