import Head from 'next/head';
import Layout from './../../layout/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>El Tallercito De Monica | Acerca de</title>
      </Head>
      <Layout>
        <h1 className='text-center text-5xl font-semibold'>Acerca de</h1>
      </Layout>
    </>
  );
}
