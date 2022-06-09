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
          <button className='p-2 pl-4 pr-4 w-max bg-green text-2xl font-medium rounded-2xl text-white mx-auto block relative translate-y-52 hover:bg-hoverGreen transition-background duration-300 md:translate-y-96 md:text-3xl'>
            El tallercito
          </button>
        </div>
        <section className='w-full pb-10'>
          <h2 style={{ textShadow: '2px 2px 5px #8685EF' }}>¿Qué hacemos?</h2>
          <div className='w-full max-w-screen-xl m-auto flex justify-center items-center flex-wrap pt-4 md:justify-evenly xl:justify-between md:pt-10 pl-4 pr-4'>
            <figure className=''>
              <img
                src=''
                alt='Disfraces'
                className='w-32 h-48  m-4 bg-halfPurple md:w-52 md:h-60 md:m-0'
              />
              <figcaption className='font-medium -translate-y-4 text-center text-xl text-green md:translate-y-0 md:text-3xl'>
                Disfraces
              </figcaption>
            </figure>
            <figure>
              <img
                src=''
                alt='Cotillón'
                className='w-32 h-48  m-4 bg-halfPurple md:w-52 md:h-60 md:m-0'
              />
              <figcaption className='font-medium -translate-y-4 text-center text-xl text-green md:translate-y-0 md:text-3xl'>
                Cotillón
              </figcaption>
            </figure>
            <figure>
              <img
                src=''
                alt='Tortas'
                className='w-32 h-48  m-4 bg-halfPurple md:w-52 md:h-60 md:m-0'
              />
              <figcaption className='font-medium -translate-y-4 text-center text-xl text-green md:translate-y-0 md:text-3xl'>
                Tortas
              </figcaption>
            </figure>
            <figure>
              <img
                src=''
                alt='Castillo Inflable'
                className='w-32 h-48  m-4 bg-halfPurple md:w-52 md:h-60 md:m-0'
              />
              <figcaption className='font-medium -translate-y-4 text-center text-xl text-green md:translate-y-0 md:text-3xl'>
                Castillo inflable
              </figcaption>
            </figure>
            <figure>
              <img
                src=''
                alt='metegol'
                className='w-32 h-48  m-4 bg-halfPurple md:w-52 md:h-60 md:m-0'
              />
              <figcaption className='font-medium -translate-y-4 text-center text-xl text-green md:translate-y-0 md:text-3xl'>
                Metegol
              </figcaption>
            </figure>
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
            <figure className='w-52 h-96 bg-purple p-2 rounded-xl md:w-72 md:h-500'>
              <img
                src=''
                alt='monica hidrugo'
                className='w-full h-4/5 md:h-5/6 bg-halfPurple'
              />
              <figcaption
                className='text-center text-white text-xl pt-6 font-semibold md:text-2xl'
                style={{ textShadow: '2px 2px 5px #1f1f1f' }}
              >
                Monica Hidrugo
              </figcaption>
            </figure>
            <article
              className='md:w-1/3 text-center pt-4 text-white text-lg md:text-xl md:text-left md:pl-6 font-medium'
              style={{ textShadow: '0px 0px 5px #1f1f1f' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              cumque, quo cupiditate corrupti dolorum nemo atque consequuntur
              omnis magnam aut ut doloremque nisi illum ad error adipisci non
              quae. Molestiae. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eius, expedita. Asperiores, sed modi nisi
              laudantium est doloremque non alias libero suscipit aspernatur
              voluptate recusandae rem illo perspiciatis nulla! Hic, voluptate!
            </article>
          </div>
          <button className='p-2 pl-6 pr-6 w-max bg-green text-lg font-medium rounded-2xl text-white m-auto block hover:bg-hoverGreen transition-background duration-300 md:text-xl mt-4 md:mt-8'>
            CONOCE MÁS
          </button>
        </section>
        <section className='w-full pt-10 pb-10'>
          <h2 style={{ textShadow: '2px 2px 5px #8685EF' }}>¿Dónde estamos?</h2>
        </section>
      </Layout>
    </>
  );
}
