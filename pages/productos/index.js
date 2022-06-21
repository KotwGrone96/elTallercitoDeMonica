import Head from 'next/head';
import {
  ProductCardDesktop,
  ProductCardMobile,
} from '../../components/productCard/ProductCard';

export default function Products() {
  return (
    <>
      <Head>
        <title>El Tallercito De Mónica | Productos</title>
      </Head>
      <div className='w-4/5 max-w-7xl m-auto text-center md:w-full pl-4 pr-4'>
        <h1 className='text-4xl font-semibold md:text-5xl pt-4 pb-4'>
          PRODUCTOS
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
        className='w-full max-w-7xl m-auto text-center md:w-full p-10 pl-4 pr-4'
      >
        <h2 className='w-full text-left underline text-4xl pl-4 md:text-5xl'>
          Tortas
        </h2>
        <div className=' bg-sectionBg rounded-xl mt-4 p-4'>
          <div className='flex flex-col w-full md:hidden'>
            <ProductCardMobile img='/images/product-example.jpg' />
            <ProductCardMobile img='/images/product-example.jpg' />
            <ProductCardMobile img='/images/product-example.jpg' />
            <ProductCardMobile img='/images/product-example.jpg' />
            <ProductCardMobile img='/images/product-example.jpg' />
            <ProductCardMobile img='/images/product-example.jpg' />
          </div>
          <div className='hidden w-full md:flex justify-center items-center flex-wrap'>
            <ProductCardDesktop img='/images/product-example-desktop.jpg' />
            <ProductCardDesktop img='/images/product-example-desktop.jpg' />
            <ProductCardDesktop img='/images/product-example-desktop.jpg' />
            <ProductCardDesktop img='/images/product-example-desktop.jpg' />
            <ProductCardDesktop img='/images/product-example-desktop.jpg' />
            <ProductCardDesktop img='/images/product-example-desktop.jpg' />
          </div>
        </div>
      </section>
      <section
        id='disfraces'
        className='w-full max-w-7xl m-auto text-center md:w-full p-10 pl-4 pr-4'
      >
        <h2 className='w-full text-left underline text-4xl pl-4 md:text-5xl'>
          Disfraces
        </h2>
        <div className=' bg-sectionBg rounded-xl mt-4 p-4'>
          <div className='flex flex-col w-full md:hidden'>
            <ProductCardMobile img='/images/disfraz-example-desktop.jpg' />
            <ProductCardMobile img='/images/disfraz-example-desktop.jpg' />
            <ProductCardMobile img='/images/disfraz-example-desktop.jpg' />
            <ProductCardMobile img='/images/disfraz-example-desktop.jpg' />
            <ProductCardMobile img='/images/disfraz-example-desktop.jpg' />
            <ProductCardMobile img='/images/disfraz-example-desktop.jpg' />
          </div>
          <div className='hidden w-full md:flex justify-center items-center flex-wrap'>
            <ProductCardDesktop img='/images/disfraz-example-desktop.jpg' />
            <ProductCardDesktop img='/images/disfraz-example-desktop.jpg' />
            <ProductCardDesktop img='/images/disfraz-example-desktop.jpg' />
            <ProductCardDesktop img='/images/disfraz-example-desktop.jpg' />
            <ProductCardDesktop img='/images/disfraz-example-desktop.jpg' />
            <ProductCardDesktop img='/images/disfraz-example-desktop.jpg' />
          </div>
        </div>
      </section>
      <section
        id='cotillon'
        className='w-full max-w-7xl m-auto text-center md:w-full p-10 pl-4 pr-4'
      >
        <h2 className='w-full text-left underline text-4xl pl-4 md:text-5xl'>
          Cottillón
        </h2>
        <div className=' bg-sectionBg rounded-xl mt-4 p-4'>
          <div className='flex flex-col w-full md:hidden'>
            <ProductCardMobile img='/images/cotillon-example.jpg' />
            <ProductCardMobile img='/images/cotillon-example.jpg' />
            <ProductCardMobile img='/images/cotillon-example.jpg' />
            <ProductCardMobile img='/images/cotillon-example.jpg' />
            <ProductCardMobile img='/images/cotillon-example.jpg' />
            <ProductCardMobile img='/images/cotillon-example.jpg' />
          </div>
          <div className='hidden w-full md:flex justify-center items-center flex-wrap'>
            <ProductCardDesktop img='/images/cotillon-example.jpg' />
            <ProductCardDesktop img='/images/cotillon-example.jpg' />
            <ProductCardDesktop img='/images/cotillon-example.jpg' />
            <ProductCardDesktop img='/images/cotillon-example.jpg' />
            <ProductCardDesktop img='/images/cotillon-example.jpg' />
            <ProductCardDesktop img='/images/cotillon-example.jpg' />
          </div>
        </div>
      </section>
    </>
  );
}
