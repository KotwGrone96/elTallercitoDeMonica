import Layout from '../../layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSucursales } from '../../data/sucursales';
import Map from '../../components/map/Map';
import Image from 'next/image';

export default function Stores({ sucursales }) {
  const router = useRouter();
  const { name } = router.query;
  const sucursal = sucursales.filter(e => e.id === name);

  return (
    <>
      <Head>
        <title>El Tallercito De Monica | {sucursal[0].name}</title>
        <meta name='description' content={sucursal[0].description} />
        <meta
          name='keywords'
          content='el tallercito de monica, el tallercito, tallercito, monica hidrugo, cotillon, pasteles, tortas, disfraces, caba, villa maipu, sucursal, entre rios 754, CABA, estrada 1578, Villa Maipú, gral san martin'
        />
      </Head>
      <Layout>
        <div className='flex flex-col justify-center items-center w-full m-auto max-w-5xl mb-4 md:grid grid-flow-row grid-cols-12 gap-4 justify-items-center md:pt-10 md:pb-4'>
          <h1 className='text-center text-4xl p-4 font-semibold md:p-0 col-start-7 col-end-13 row-start-1 row-end-2 justify-self-start md:text-5xl'>
            {sucursal[0].name}
          </h1>
          <figure className='mb-2 md:m-0 col-start-1 col-end-7 row-start-1 row-end-6 justify-self-end'>
            <div className='relative w-72 h-96 overflow-hidden rounded-lg md:w-96 md:h-500'>
              <Image
                src={sucursal[0].images[0]}
                alt='sucursal'
                layout='fill'
                objectFit='cover'
                priority
              />
            </div>
            <figcaption className='font-semibold text-lessGray text-xl md:text-2xl'>
              {sucursal[0].address}
            </figcaption>
          </figure>
          <p className='w-72 font-medium text-gray col-start-7 col-end-13 row-start-2 row-end-4 justify-self-start md:text-xl md:self-start'>
            {sucursal[0].description}
          </p>
          <a
            href='https://wa.me/541149281113'
            target='_blank'
            rel='noreferrer'
            className='flex bg-green justify-center items-center p-4 pt-2 pb-2 rounded-full row-start-4 row-end-5 col-start-8 hover:bg-hoverGreen transition-background'
          >
            <div
              className='w-8 h-8 relative'
              style={{
                filter:
                  'invert(100%) sepia(0%) saturate(3811%) hue-rotate(16deg) brightness(108%) contrast(88%)',
              }}
            >
              <Image
                layout='fill'
                alt='whats app'
                src='/images/wp.svg'
                objectFit='cover'
              />
            </div>
            <span className='text-white pl-2 text-xl md:text-2xl'>Mensaje</span>
          </a>
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row w-full m-auto max-w-5xl md:items-start'>
          <div className='w-72 h-96 md:w-500'>
            <Map id={sucursal[0].id} />
          </div>
          <ul className='w-72 list-disc pl-4 pt-4 font-medium text-lg md:pt-0 md:pl-8 md:text-xl'>
            <h3 className='underline text-xl -translate-x-4 text-purple font-semibold md:text-2xl pb-2'>
              ¿Cómo llegar?
            </h3>
            {sucursal[0].routes.map(e => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: 'caba' } }, { params: { name: 'villamaipu' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  const sucursales = await getSucursales();
  return {
    props: { sucursales },
  };
}
