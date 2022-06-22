/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import Link from 'next/link';
import CardLink from '../components/cardLink/CardLink';

export default function Home() {
  const handleSucursalImgEnter = (e, num) => {
    const { target } = e;
    target.style.transition = 'opacity .5s';
    setTimeout(() => {
      target.style.opacity = '0';
    });
    setTimeout(() => {
      target.style.opacity = '1';
      target.setAttribute('src', `images/sucursal-${num}-hover.jpg`);
    }, 250);
  };
  const handleSucursalImgLeave = (e, num) => {
    const { target } = e;
    target.style.transition = 'opacity .3s';
    setTimeout(() => {
      target.style.opacity = '0';
    });
    setTimeout(() => {
      target.style.opacity = '1';
      target.setAttribute('src', `images/sucursal-${num}.jpg`);
    }, 150);
  };

  return (
    <>
      <Head>
        <title>El Tallercito De Mónica | Inicio</title>
        <meta
          name='description'
          content='Bienvenidos al tallercito de Monica. Acá podrás encontrar todo lo que necesitas para llevar tus cumpleaños, fiestas y compromisos al siguiente nivel.'
        />
      </Head>

      <div className='w-full h-500 md:h-600 bg-halfPurple mb-14 bg-banner bg-100 lg:bg-65 bg-center bg-no-repeat relative'>
        <div className='w-max mx-auto p-4 translate-y-8 rounded-3xl md:absolute top-0 left-1/4'>
          <span className='text-2xl font-semibold text-white inline-block pb-2 md:text-3xl'>
            Bienvenid@s al
          </span>
          <h1 className='text-left text-lessWhite bg-purple p-2 rounded-xl shadow-normal'>
            El tallercito de Mónica
          </h1>
        </div>
        <p
          className=' mx-auto text-lessWhite text-2xl p-4 font-semibold translate-y-52 rounded-3xl text-center md:absolute -top-10 left-1/4'
          style={{ textShadow: '2px 2px 5px #8685EF' }}
        >
          Todo lo que necesitás para llevar tu fiesta al siguiente nivel!
        </p>
        <button className='p-2 pl-4 pr-4 w-max bg-green text-2xl font-medium rounded-2xl text-white mx-auto block relative translate-y-52 hover:bg-hoverGreen transition-background duration-300 md:translate-y-96 md:text-3xl'>
          El tallercito
        </button>
      </div>
      <section className='w-full pb-10'>
        <h2 style={{ textShadow: '2px 2px 5px #8685EF' }}>
          Nuestros Productos
        </h2>
        <div className='w-full max-w-screen-xl m-auto flex justify-center items-center flex-wrap pt-4 md:justify-evenly xl:justify-between md:pt-10 pl-4 pr-4'>
          <CardLink
            img='/images/disfraz-example-desktop.jpg'
            link='/productos#disfraces'
            title='DISFRACES'
          />
          <CardLink
            img='/images/cotillon-example.jpg'
            link='/productos#cotillon'
            title='COTILLÓN'
          />

          <CardLink
            img='/images/product-example.jpg'
            link='/productos#tortas'
            title='TORTAS'
          />
          <CardLink
            img='/images/castillo.jpg'
            link='/servicios'
            title='CASTILLO'
          />

          <CardLink
            img='/images/metegol.jpg'
            link='/servicios'
            title='METEGOL'
          />
        </div>
      </section>
      <section className='w-full bg-halfPurple pb-10'>
        <h2
          style={{ textShadow: '2px 2px 5px #1f1f1f' }}
          className='text-white pt-8'
        >
          Sobre el tallercito
        </h2>
        <div className='w-full max-w-screen-xl m-auto p-4 flex justify-center items-center flex-col md:flex-row '>
          <figure className='w-64 bg-purple p-2 rounded-xl md:w-80'>
            <img
              src='/images/monica.jpg'
              alt='monica hidrugo'
              className='w-full bg-halfPurple rounded-xl'
            />
            <figcaption
              className='text-center text-white text-xl pt-4 pb-4 font-semibold md:text-2xl'
              style={{ textShadow: '2px 2px 5px #1f1f1f' }}
            >
              Monica Hidrugo
            </figcaption>
          </figure>
          <article
            className='md:w-1/3 text-center pt-4 text-white md:pt-0 text-lg md:text-2xl md:text-left md:pl-6 font-medium'
            style={{ textShadow: '0px 0px 5px #1f1f1f' }}
          >
            Hola, mi nombre es Mónica
            <br />
            y este es El Tallercito!!!
            <br />
            Un lugar dónde encontrarás todo lo que necesitás para tus festejos.
            Amamos lo que hacemos y estamos comprometidos con ustedes para poder
            brindar la mejor atención y decoración con nuestro cotillón y
            repostería <span style={{ textShadow: 'none' }}> ❤️❤️❤️ </span>
          </article>
        </div>
        <Link href='/acerca'>
          <a>
            <button className='p-2 pl-6 pr-6 w-max bg-green text-lg font-medium rounded-2xl text-white m-auto block hover:bg-hoverGreen transition-background duration-300 md:text-xl mt-4 md:mt-8'>
              CONOCE MÁS
            </button>
          </a>
        </Link>
      </section>
      <section className='w-full pt-10 pb-10'>
        <h2 style={{ textShadow: '2px 2px 5px #8685EF' }}>¿Dónde estamos?</h2>
        <div className='w-full max-w-screen-xl m-auto p-4 flex justify-center items-center flex-col md:flex-row md:justify-evenly '>
          <figure className='pt-4 pb-4 w-64 md:w-80 '>
            <h3 className='text-left text-lg font-medium md:text-xl'>
              Sucursal Villa Maipú
            </h3>
            <Link href='/sucursales/villamaipu'>
              <a>
                <img
                  src='images/sucursal-2.jpg'
                  alt='sucursal villa maipu el tallercito'
                  className='w-full bg-green rounded-xl cursor-pointer'
                  onMouseEnter={e => handleSucursalImgEnter(e, 2)}
                  onMouseLeave={e => handleSucursalImgLeave(e, 2)}
                />
              </a>
            </Link>
            <figcaption className='text-left text-lg font-medium md:text-xl'>
              Estrada 1578 - Villa Maipú
            </figcaption>
          </figure>
          <figure className='pt-4 pb-4 w-64 md:w-80'>
            <h3 className='text-left text-lg font-medium md:text-xl'>
              Sucursal CABA
            </h3>
            <Link href='/sucursales/caba'>
              <a>
                <img
                  src='images/sucursal-1.jpg'
                  alt='sucursal villa maipu el tallercito'
                  className='w-full bg-green rounded-xl cursor-pointer'
                  onMouseEnter={e => handleSucursalImgEnter(e, 1)}
                  onMouseLeave={e => handleSucursalImgLeave(e, 1)}
                />
              </a>
            </Link>
            <figcaption className='text-left text-lg font-medium md:text-xl'>
              Av. Entre Ríos 754 - CABA
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
