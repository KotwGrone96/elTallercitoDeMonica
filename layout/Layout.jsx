import NavBar from '../components/NavBar/NavBar';

export default function Layout({ children }) {
  return (
    <>
      <header
        className={`w-full h-20 bg-pink flex justify-center items-center fixed`}
      >
        <NavBar />
      </header>
      <main className='min-h-screen font-barlow pt-20'>{children}</main>
      <footer className='w-full h-20 bg-pink'></footer>
    </>
  );
}
