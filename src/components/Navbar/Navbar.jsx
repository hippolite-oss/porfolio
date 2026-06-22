"use client";
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export const useNavLinks = () => {
  const { t } = useLanguage();
  return [
    { id: 1, title: t.nav.home, link: "/" },
    { id: 2, title: t.nav.contact, link: "/contact" },
    { id: 3, title: t.nav.projects, link: "/projects" },
    { id: 4, title: t.nav.services, link: "/services" },
  ];
};

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const { t, lang, toggleLang } = useLanguage();
  const NavLinks = useNavLinks();

  // Fermer le menu si un clic est fait en dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showMenu && !e.target.closest('.menu-container')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false); // Fermer le menu lorsque l'on clique sur un lien
  };

  return (
    <motion.nav 
      className="bg-black text-white fixed top-0 w-full z-[9999]" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between py-5 relative">
        {/* Logo section */}
        <div>
          <Link href="/">
            <div className="flex items-center">
              <div className="h-[40px] w-[40px] flex justify-center items-center bg-primary text-white rounded-full text-3xl font-bold">P</div>
              <h1 className="text-3xl font-bold text-wh">ortfolio</h1>
            </div>
          </Link>
        </div>

        {/* Links section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            {NavLinks.map((link) => {
              const isActive = pathname === link.link;
              return (
                <li key={link.id}>
                  <Link
                    className={`${isActive ? "text-primary text-xl font-bold hover:text-white" : ""} inline-block text-lg py-1 px-4 hover:red-shadow hover:bg-primary transition-all duration-500 hover:scale-110`}
                    href={link.link}
                    onClick={closeMenu} // Fermer le menu lorsque l'on clique sur un lien
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <button className="btn">
              <a href="./cv.pdf">{t.nav.resume}</a>
            </button>
          </ul>
        </div>

        {/* Language switcher + Mobile menu section */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 border border-white/40 rounded-full px-3 py-1 text-sm font-bold hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="Toggle language"
          >
            <span className={lang === "fr" ? "text-primary" : ""}>FR</span>
            <span className="text-white/40">/</span>
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
          </button>
          <div className="md:hidden">
            <MdMenu className="text-4xl" onClick={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </motion.nav>
  );
};

export default Navbar;
