import Head from 'next/head';
import ServiceCard from '../../components/serviceCard/ServiceCard';

export default function Services() {
  return (
    <>
      <Head>
        <title>El Tallercito De Mónica | Servicios</title>
      </Head>

      <div className='w-4/5 max-w-7xl m-auto text-center md:w-full pl-4 pr-4'>
        <h1 className='text-4xl font-semibold md:text-5xl pt-4 pb-4'>
          SERVICIOS
        </h1>
        <p className='text-lessGray font-medium md:text-2xl md:font-normal'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quis,
          dolor aliquid optio incidunt quasi dignissimos reiciendis sit tempore
          nisi eum deleniti! Nam ipsum voluptatum, nobis iste fugiat pariatur
          suscipit.
        </p>
      </div>
      <section
        id='tortas'
        className='w-full max-w-7xl m-auto text-center md:w-full p-10 pl-4 pr-4 flex flex-col justify-evenly items-center'
      >
        <ServiceCard title='Castillo Inflable' img='/images/castillo.jpg' />
        <ServiceCard title='Metegol' img='/images/metegol.jpg' />
      </section>
    </>
  );
}
