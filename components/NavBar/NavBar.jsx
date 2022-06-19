/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import ResponsiveNavBar from './ResponsiveNavBar';
import { useState, useEffect } from 'react';

export default function NavBar({ path }) {
  const [onView, setOnView] = useState(false);
  const [currentPath, setCurrentPath] = useState(path);

  const handleNavBar = () => {
    if (!onView) {
      setOnView(true);
      return;
    }
    setOnView(false);
  };

  useEffect(() => {
    setCurrentPath(path);
  }, [path]);

  const handleMouseEnter = () => {
    const menu = document.querySelector('.menu-sucursales');
    menu.classList.remove('hidden');
    menu.classList.add('flex');
  };
  const handleMouseLeave = () => {
    const menu = document.querySelector('.menu-sucursales');
    menu.classList.remove('flex');
    menu.classList.add('hidden');
  };

  return (
    <>
      <img
        src='/menu.svg'
        alt='menu'
        onClick={handleNavBar}
        style={{
          filter:
            'invert(53%) sepia(26%) saturate(2751%) hue-rotate(127deg) brightness(99%) contrast(101%)',
        }}
        className={`w-8 h-8 absolute top-1/4 left-3 md:hidden cursor-pointer transition-all ${
          !onView ? 'rotate-0' : 'rotate-180'
        }`}
      />

      <nav className='md:flex justify-center items-center h-full max-w-max font-barlow font-medium text-xl hidden'>
        <Link href='/'>
          <a
            className={`p-2 pt-1 pb-1 ml-1 mr-1 hover:text-green ${
              currentPath === '/' ? 'rounded-lg hover:text-white bg-green' : ''
            }`}
          >
            Inicio
          </a>
        </Link>
        <Link href='/acerca'>
          <a
            className={`p-2 pt-1 pb-1 ml-1 mr-1 hover:text-green ${
              currentPath === '/acerca'
                ? 'rounded-lg hover:text-white bg-green'
                : ''
            }`}
          >
            Acerca de
          </a>
        </Link>
        <Link href='/productos'>
          <a
            className={`p-2 pt-1 pb-1 ml-1 mr-1 hover:text-green ${
              currentPath === '/productos'
                ? 'rounded-lg hover:text-white bg-green'
                : ''
            }`}
          >
            Productos
          </a>
        </Link>
        <Link href='/servicios'>
          <a
            className={`p-2 pt-1 pb-1 ml-1 mr-1 hover:text-green ${
              currentPath === '/servicios'
                ? 'rounded-lg hover:text-white bg-green'
                : ''
            }`}
          >
            Servicios
          </a>
        </Link>
        <div
          className={`
        p-2 pt-1 pb-1 ml-1 mr-1 cursor-pointer relative ${
          currentPath.includes('/sucursales')
            ? 'rounded-lg hover:text-white bg-green'
            : ''
        }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Sucursales
          <div className='hidden flex-col absolute bg-purple border w-32 menu-sucursales'>
            <Link href='/sucursales/caba'>
              <a className={`p-2 pt-1 pb-1  hover:bg-green w-full `}>CABA</a>
            </Link>
            <Link href='/sucursales/villamaipu'>
              <a className={`p-2 pt-1 pb-1 hover:bg-green `}>Villa Maipú</a>
            </Link>
          </div>
        </div>
      </nav>
      <ResponsiveNavBar onView={onView} path={path} setOnView={setOnView} />
    </>
  );
}
