import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppBtn from '../../components/whatsAppBtn/WhatsAppBtn';

export default function About() {
  return (
    <>
      <Head>
        <title>El Tallercito De Mónica | Acerca de</title>
        <meta
          name='keywords'
          content='el tallercito de monica, el tallercito, tallercito, monica hidrugo, cotillon, pasteles, tortas, disfraces, caba, villa maipu, sucursal, entre rios 754, CABA, estrada 1578, Villa Maipú, gral san martin'
        />
      </Head>

      <div className='flex justify-center items-center flex-col w-full max-w-screen-lg m-auto md:flex-row md:pt-10 md:justify-evenly md:items-start md:pl-4 md:pr-4'>
        <div className='w-full max-w-md p-4 md:p-0 md:m-0 text-center m-auto flex flex-col justify-center items-center md:items-start '>
          <div className='md:text-left'>
            <p className='font-medium text-brown pt-4 md:text-2xl'>
              Repostera profesional
            </p>
            <h1 className='text-5xl font-semibold md:font-medium col-start-7 md:text-7xl pt-8 pb-8 md:pt-4 md:pb-14'>
              Mónica Hidrugo
            </h1>
          </div>
          <p className='text-lessGray font-medium w-80 md:w-full md:text-left md:text-2xl md:font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            autem eaque maiores culpa corrupti quasi magnam hic voluptatibus
            quas libero voluptates eveniet laudantium, vel labore ad
            consequatur. Delectus, autem animi.
          </p>
          <div className='pt-8 pb-4 md:pt-10 md:pb-0'>
            <WhatsAppBtn />
          </div>
        </div>
        <div className='w-80 h-96 m-auto md:m-0 bg-halfPurple rounded-full relative overflow-hidden md:h-500 md:w-2/5'>
          <Image
            src='/images/monica.jpg'
            alt='monica hidrugo'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
      </div>
      <hr className='text-brown m-auto w-4/5 max-w-7xl mt-10 mb-10 md:w-full'></hr>
      <section className='w-full max-w-screen-lg m-auto flex flex-col justify-center items-center md:items-start md:pl-14'>
        <h2 className='text-4xl pb-4 font-semibold m-0 md:text-5xl'>
          Sobre Nosotros
        </h2>
        <p className='text-center w-80 md:w-4/5 font-medium text-lessGray md:text-left md:text-2xl md:font-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque
          repellat, provident officiis cupiditate illum beatae nobis tempore
          fuga ipsam sunt nihil dignissimos dicta sapiente omnis distinctio
          incidunt delectus exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis dolor amet distinctio ex
          totam sunt obcaecati rerum voluptatibus laudantium placeat voluptates
          explicabo enim magni, et id dolorum iure aliquam? Enim?
        </p>
      </section>
      <hr className='text-brown m-auto w-4/5 max-w-7xl mt-10 mb-10'></hr>
      <section className='w-full max-w-screen-lg m-auto flex flex-col justify-center items-center md:items-start md:pl-14'>
        <h2 className='text-4xl pb-4 font-semibold m-0 md:text-5xl'>
          ¿Qué Hacemos?
        </h2>
        <p className='text-center w-80 md:w-4/5 font-medium text-lessGray md:text-left md:text-2xl md:font-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque
          repellat, provident officiis cupiditate illum beatae nobis tempore
          fuga ipsam sunt nihil dignissimos dicta sapiente omnis distinctio
          incidunt delectus exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis dolor amet distinctio ex
          totam sunt obcaecati rerum voluptatibus laudantium placeat voluptates
          explicabo enim magni, et id dolorum iure aliquam? Enim?
        </p>
      </section>
      <hr className='text-brown m-auto w-4/5 max-w-7xl mt-10 mb-10'></hr>
      <section className='w-full max-w-screen-lg m-auto flex flex-col justify-center items-center md:items-start md:pl-14'>
        <h2 className='text-4xl pb-4 font-semibold m-0 md:text-5xl'>
          Nuestras Sucursales
        </h2>
        <p className='text-center w-80 md:w-4/5 font-medium text-lessGray md:text-left md:text-2xl md:font-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque
          repellat, provident officiis cupiditate illum beatae nobis tempore
          fuga ipsam sunt nihil dignissimos dicta sapiente omnis distinctio
          incidunt delectus exercitationem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis dolor amet distinctio ex
          totam sunt obcaecati rerum voluptatibus laudantium placeat voluptates
          explicabo enim magni, et id dolorum iure aliquam? Enim?
          <Link href='/sucursales/caba'>
            <a className='text-green font-medium hover:text-hoverGreen'>
              nuestra sucursal en CABA
            </a>
          </Link>{' '}
          y{' '}
          <Link href='/sucursales/villamaipu'>
            <a className='text-green font-medium hover:text-hoverGreen'>
              nuestra sucursal en Villa Maipú
            </a>
          </Link>
        </p>
      </section>
    </>
  );
}
