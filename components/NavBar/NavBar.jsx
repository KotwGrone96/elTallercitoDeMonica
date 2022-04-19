import Link from 'next/link';
import ResponsiveNavBar from './ResponsiveNavBar';
import { useState } from 'react';

export default function NavBar() {
  const [onView, setOnView] = useState(false);

  const handleNavBar = () => {
    if (!onView) {
      setOnView(true);
      return;
    }
    setOnView(false);
  };

  return (
    <>
      <button
        className='absolute top-0 left-0 p-4 md:hidden'
        onClick={handleNavBar}
      >
        MENU
      </button>
      <nav className='md:flex justify-center items-center h-full max-w-max font-barlow font-medium text-xl hidden'>
        <Link href='/'>
          <a className='p-4'>Inicio</a>
        </Link>
        <Link href='/acerca'>
          <a className='p-4'>Acerca De</a>
        </Link>
        <Link href='/productos'>
          <a className='p-4'>Productos</a>
        </Link>
        <Link href='/servicios'>
          <a className='p-4'>Servicios</a>
        </Link>
        <Link href='/sucursales'>
          <a className='p-4'>Sucursales</a>
        </Link>
        <Link href='/contacto'>
          <a className='p-4'>Contacto</a>
        </Link>
      </nav>
      <ResponsiveNavBar onView={onView} />
    </>
  );
}
