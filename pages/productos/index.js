import Layout from '../../layout/Layout';
import Head from 'next/head';

export default function Products() {
  return (
    <>
      <Head>
        <title>El Tallercito De Monica | Productos</title>
      </Head>
      <Layout>
        <h1 className='text-center text-5xl font-semibold'>Productos</h1>
      </Layout>
    </>
  );
}
