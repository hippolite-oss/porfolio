"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Project1 from "../../assets/PayPal-site.png";
import Project2 from "../../assets/caurispay.png";
import Project3 from "../../assets/facebook.png";
import Project4 from "../../assets/register.png";
import Project5 from "../../assets/Resto.PNG";
import Project6 from "../../assets/food1.PNG";



import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Données des projets
const ProjetsData = [
    {
        id:1,
        title :"Project 1",
        link: "#",
        desc : "Conception d'une interface moderne et réactive pour Ypal, mettant en avant la simothèque, les services financiers et les offres promotionnelles. Le site est conçu pour une expérience utilisateur optimale, facilitant la navigation entre les différents produits et la gestion du compte client. Il allie un design épuré et professionnel à des fonctionnalités robustes comme la consultation des soldes et le paiement en ligne sécurisé",
        delay : 1.2,
        img : Project1,
        lien1:"https://newsitepay.vercel.app/",
        lien2:"https://github.com/hippolite-oss"

    },
  
    {
        id:2,
        title :"Project 2",
        link: "#",
        desc : "Création d’un site moderne et intuitif dédié au marketing digital, mettant en avant les services, les stratégies et les résultats obtenus. Conçu pour offrir une navigation fluide, il allie un design attrayant à des fonctionnalités pratiques pour optimiser l’expérience utilisateur et attirer de nouveaux clients",
        delay : 1.6,
        img : Project2,
        lien1: "https://cauris-pay-sooty.vercel.app/",
        lien2:"https://github.com/hippolite-oss"
    },
    {
        id:3,
        title :"Project 3",
        link: "#",
        desc : "Création d’un site web moderne et fonctionnel pour Volta Express, une entreprise spécialisée en électromécanique. Ce site met en avant les services, les expertises et les réalisations de l’entreprise, tout en offrant une navigation intuitive. Conçu pour refléter le professionnalisme de Volta Express, il combine un design attractif avec des fonctionnalités pratiques, telles que des formulaires de contact et des sections détaillées sur les prestations offertes.",
        delay : 2,
        img : Project3,
        lien1:"https://facebook-form-five.vercel.app/",
        lien2:"https://github.com/hippolite-oss"

        
    },
    {
        id:4,
        title :"Project 4",
        link: "#",
        desc : "Ce portfolio professionnel présente les services et compétences en rédaction web, SEO, et création de contenus digitaux. Il offre une interface moderne et réactive avec une navigation fluide, mettant en valeur les projets réalisés. Conçu pour illustrer l’expertise en production de contenus optimisés et renforcer la visibilité en ligne.",
        delay : 2,
        img : Project4,
        lien1:"https://register-seven-delta.vercel.app/",
        lien2:"https://github.com/hippolite-oss"

        
    },
    {
        id:5,
        title :"Project 5",
        link: "#",
        desc : "Restaurant Gallery est un site web moderne pour un restaurant, offrant une expérience utilisateur fluide et attrayante. Il présente des sections clés : menu, galerie de plats et témoignages .Soigné avec Reactjs et Tailwind CSS, optimisé pour mobile et desktop, facilitant les réservations en ligne et améliorant la visibilité du restaurant.",
        delay : 2,
        img : Project5,
        lien1:"https://hope-portfolio.onrender.com/",
        lien2:"https://github.com/hippolite-oss"

        
    },
    {
        id:6,
        title :"Project 6",
        link: "#",
        desc : "Food est un site web moderne pour un restaurant, offrant une expérience utilisateur fluide et attrayante. Il présente des sections clés : menu, galerie de plats et témoignages .Soigné avec Reactjs et Tailwind CSS, optimisé pour mobile et desktop, facilitant les réservations en ligne et améliorant la visibilité du restaurant.",
        delay : 2,
        img : Project6,
        lien1:"https://dev-ben-food.pantheonsite.io/",
        lien2:"https://github.com/hippolite-oss"

        
    },
]


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
    return (
        <section className='bg-black text-white'>
            <div className="container py-20 xl:py-36 space-y-36">
                {/* Titre */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.6, delay: 0.5 }} 
                    className='relative text-center'>
                    <p className='text-3xl lg:text-4xl tracking-widest font-bold uppercase z-20'>Projects</p>
                    <p className='text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-extrabold'>Projects</p>
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
                                    <Link href={project.lien1}>
                                        <button className='border-2 border-white py-2 rounded-lg px-4'>Live</button>
                                    </Link>
                                    <Link href={project.lien2}>
                                        <button className='btn'>Voir le Code</button>
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
