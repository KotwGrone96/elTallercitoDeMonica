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
        <h1 className='p-10'>El Tallercito De Monica</h1>
      </Layout>
    </>
  );
}
