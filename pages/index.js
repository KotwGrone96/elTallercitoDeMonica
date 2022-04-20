/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Layout from '../layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>El Tallercito De Monica | Inicio</title>
        <meta
          name='description'
          content='Bienvenidos al tallercito de Monica. Acá podrás encontrar todo lo que necesitas para llevar tus cumpleaños, fiestas y compromisos al siguiente nivel.'
        />
      </Head>
      <Layout>
        <div className='w-full h-auto 2xl:h-900 bg-green mb-14'>
          <img
            src='/images/wallpaper.jpg'
            alt='el tallercito de monica'
            className='w-full h-full object-cover'
          />
        </div>
      </Layout>
    </>
  );
}
