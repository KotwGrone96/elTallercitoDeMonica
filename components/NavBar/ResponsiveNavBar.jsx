import Link from 'next/link';

export default function ResponsiveNavBar({ onView, path, setOnView }) {
  const handleMouseEnter = () => {
    const menu = document.querySelector('.menu-sucursales-res');
    menu.classList.remove('hidden');
    menu.classList.add('flex');
  };
  const handleMouseLeave = () => {
    const menu = document.querySelector('.menu-sucursales-res');
    menu.classList.remove('flex');
    menu.classList.add('hidden');
  };

  return (
    <>
      <nav
        className={`flex md:hidden justify-start items-center flex-col fixed top-0 left-0 bg-purple mt-20 w-1/2 min-h-screen transition-all duration-300 ease-in-out overflow-y-auto ${
          !onView ? '-translate-y-full' : 'translate-y-0'
        } font-barlow text-lg font-medium -z-10`}
      >
        <Link href='/'>
          <a
            onClick={() => setOnView(false)}
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/' ? 'bg-green' : ''
            }`}
          >
            Inicio
          </a>
        </Link>
        <Link href='/acerca'>
          <a
            onClick={() => setOnView(false)}
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/acerca' ? 'bg-green' : ''
            }`}
          >
            Acerca De
          </a>
        </Link>
        <Link href='/productos'>
          <a
            onClick={() => setOnView(false)}
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/productos' ? 'bg-green' : ''
            }`}
          >
            Productos
          </a>
        </Link>
        <Link href='/servicios'>
          <a
            onClick={() => setOnView(false)}
            className={`p-4 pl-0 pr-0 w-full text-center hover:bg-green ${
              path === '/servicios' ? 'bg-green' : ''
            }`}
          >
            Servicios
          </a>
        </Link>
        <div
          className={`p-4 pl-0 pr-0 w-full text-center relative cursor-pointer ${
            path.includes('sucursales') ? 'bg-green' : ''
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Sucursales
          <div className='hidden mt-2 flex-col absolute bg-halfPurple w-full menu-sucursales-res'>
            <Link href='/sucursales/caba'>
              <a
                className={`p-2 hover:bg-green w-full `}
                onClick={() => setOnView(false)}
              >
                CABA
              </a>
            </Link>
            <Link href='/sucursales/villamaipu'>
              <a
                className={`p-2 hover:bg-green w-full`}
                onClick={() => setOnView(false)}
              >
                Villa Maipú
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
