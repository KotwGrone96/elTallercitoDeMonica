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
        <Link href='/sucursales'>
          <a
            className={`p-2 pt-1 pb-1 ml-1 mr-1 hover:text-green ${
              currentPath === '/sucursales'
                ? 'rounded-lg hover:text-white bg-green'
                : ''
            }`}
          >
            Sucursales
          </a>
        </Link>
        <Link href='/contacto'>
          <a
            className={`p-2 pt-1 pb-1 ml-1 mr-1 hover:text-green ${
              currentPath === '/contacto'
                ? 'rounded-lg hover:text-white bg-green'
                : ''
            }`}
          >
            Contacto
          </a>
        </Link>
      </nav>
      <ResponsiveNavBar onView={onView} path={path} />
    </>
  );
}
