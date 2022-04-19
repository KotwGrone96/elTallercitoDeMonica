import NavBar from '../components/NavBar/NavBar';

export default function Layout({ children }) {
  return (
    <>
      <header
        className={`w-full h-20 bg-purple flex justify-center items-center fixed text-white`}
      >
        <NavBar />
      </header>
      <main className='min-h-screen pt-20'>{children}</main>
      <footer className='w-full h-20 bg-purple'></footer>
    </>
  );
}
