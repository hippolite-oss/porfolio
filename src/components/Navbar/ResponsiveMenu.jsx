import React from 'react';
import { useNavLinks } from '../Navbar/Navbar';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const ResponsiveMenu = ({ showMenu }) => {
  const NavLinks = useNavLinks();
  const { t } = useLanguage();
  return (
    <div className={`md:hidden fixed top-0 left-0 z-[999] bg-black text-white h-full w-[75%] pt-16 pl-10 duration-300 rounded-r-xl shadow-md flex flex-col justify-between transform transition-transform ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Menu section */}
      <div className="mt-10">
        <ul>
          {NavLinks.map((link) => (
            <li key={link.id} className="py-6">
              <Link className="text-2xl font-medium text-white" href={link.link}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu footer section */}
      <div className='-mt-64'>
        <p>
          {t.footer.madeWith} <a href="/">Bradley Hypox</a>
        </p>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
