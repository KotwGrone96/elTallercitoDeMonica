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
        <div className='w-full h-500 md:h-600 bg-halfPurple mb-14 bg-banner bg-100 lg:bg-65 bg-center bg-no-repeat relative'>
          <div className='w-max mx-auto p-4 translate-y-8 rounded-3xl md:absolute top-0 left-1/4'>
            <span className='text-2xl font-semibold text-white inline-block pb-2 md:text-3xl'>
              Bienvenid@s al
            </span>
            <h1 className='text-left text-lessWhite bg-purple p-2 rounded-xl shadow-normal'>
              El tallercito de Monica
            </h1>
          </div>
          <p
            className=' mx-auto text-lessWhite text-2xl p-4 font-semibold translate-y-52 rounded-3xl text-center md:absolute -top-10 left-1/4'
            style={{ textShadow: '2px 2px 5px #8685EF' }}
          >
            Todo lo que necesitás para llevar tu fiesta al siguiente nivel!
          </p>
          <button className='p-2 w-max bg-green text-2xl font-medium rounded-2xl text-white mx-auto block relative translate-y-52 hover:bg-hoverGreen transition-background duration-300 md:translate-y-96 md:text-3xl'>
            El tallercito
          </button>
        </div>
      </Layout>
    </>
  );
}
