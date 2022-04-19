import Link from 'next/link';

export default function ResponsiveNavBar({ onView }) {
  return (
    <>
      <nav
        className={`flex md:hidden justify-start items-center flex-col fixed top-0 left-0 bg-pink mt-20 w-1/2 min-h-screen transition-all duration-300 ease-in-out ${
          !onView ? '-ml-96' : 'm-0'
        } font-barlow text-lg font-medium`}
      >
        <Link href='/'>
          <a className='p-4 pl-0 pr-0'>Inicio</a>
        </Link>
        <Link href='/acerca'>
          <a className='p-4 pl-0 pr-0'>Acerca De</a>
        </Link>
        <Link href='/productos'>
          <a className='p-4 pl-0 pr-0'>Productos</a>
        </Link>
        <Link href='/servicios'>
          <a className='p-4 pl-0 pr-0'>Servicios</a>
        </Link>
        <Link href='/sucursales'>
          <a className='p-4 pl-0 pr-0'>Sucursales</a>
        </Link>
        <Link href='/contacto'>
          <a className='p-4 pl-0 pr-0'>Contacto</a>
        </Link>
      </nav>
    </>
  );
}
