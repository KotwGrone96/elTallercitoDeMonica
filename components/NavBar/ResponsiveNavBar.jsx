import Link from 'next/link';

export default function ResponsiveNavBar({ onView, path }) {
  return (
    <>
      <nav
        className={`flex md:hidden justify-start items-center flex-col fixed top-0 left-0 bg-purple mt-20 w-1/2 min-h-screen transition-all duration-300 ease-in-out ${
          !onView ? '-translate-y-full' : 'translate-y-0'
        } font-barlow text-lg font-medium -z-10`}
      >
        <Link href='/'>
          <a
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/' ? 'bg-green' : ''
            }`}
          >
            Inicio
          </a>
        </Link>
        <Link href='/acerca'>
          <a
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/acerca' ? 'bg-green' : ''
            }`}
          >
            Acerca De
          </a>
        </Link>
        <Link href='/productos'>
          <a
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/productos' ? 'bg-green' : ''
            }`}
          >
            Productos
          </a>
        </Link>
        <Link href='/servicios'>
          <a
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/servicios' ? 'bg-green' : ''
            }`}
          >
            Servicios
          </a>
        </Link>
        <Link href='/sucursales'>
          <a
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/sucursales' ? 'bg-green' : ''
            }`}
          >
            Sucursales
          </a>
        </Link>
        <Link href='/contacto'>
          <a
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/contacto' ? 'bg-green' : ''
            }`}
          >
            Contacto
          </a>
        </Link>
      </nav>
    </>
  );
}
