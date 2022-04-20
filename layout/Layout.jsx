import NavBar from '../components/NavBar/NavBar';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <header
        className={`w-full h-20 bg-purple flex justify-center items-center fixed z-50 text-white`}
      >
        <NavBar path={router.pathname} />
      </header>
      <main className='min-h-screen pt-20'>{children}</main>
      <footer className='w-full h-20 bg-purple'></footer>
    </>
  );
}
