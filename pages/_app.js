import '../styles/globals.css';
import '../components/loader/loader.css';
import Layout from '../layout/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
