import NavBar from '../components/NavBar/NavBar';
import { useRouter } from 'next/router';
import Image from 'next/image';
import fb from '../public/images/fb.svg';
import ig from '../public/images/instagram.svg';
import wp from '../public/images/wp.svg';
import teleg from '../public/images/telegram.svg';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <header
        className={`w-full h-20  flex justify-center bg-purple items-center fixed z-50 text-white shadow-lg`}
      >
        <NavBar path={router.pathname} />
      </header>
      <main className='min-h-screen pt-20 pb-20'>{children}</main>
      <footer className='w-full bg-purple pb-8 pt-4'>
        <h2 className='text-white p-4 text-center underline'>
          El Tallercito De Mónica
        </h2>
        <div className='w-full max-w-screen-xl m-auto flex justify-center items-center flex-col'>
          <div className='w-full'>
            <h3 className='text-white font-medium font-lobster2 text-2xl text-center pt-4'>
              CONTACTO
            </h3>
            <div className='w-72 m-auto flex justify-center items-center flex-wrap md:pt-4'>
              <figure className='flex justify-start items-center w-28 m-2'>
                <a
                  href='https://www.facebook.com/eltallercito.demonica.1'
                  target='_blank'
                  className='relative w-7 h-7 md:w-8 md:h-8'
                  rel='noreferrer'
                >
                  <Image
                    src={fb}
                    alt='facebook'
                    layout='fill'
                    style={{
                      filter:
                        ' invert(100%) sepia(100%) saturate(0%) hue-rotate(201deg) brightness(106%) contrast(106%)',
                    }}
                  />
                  <figcaption className='text-lg pl-10 md:text-xl hover:text-white transition-colors'>
                    Facebook
                  </figcaption>
                </a>
              </figure>
              <figure className='flex justify-start items-center w-28 m-2'>
                <a
                  href='https://www.instagram.com/el_tallercito_de_monica/?hl=es'
                  target='_blank'
                  className='relative w-7 h-7 md:w-8 md:h-8'
                  rel='noreferrer'
                >
                  <Image
                    src={ig}
                    alt='instagram'
                    layout='fill'
                    style={{
                      filter:
                        ' invert(100%) sepia(100%) saturate(0%) hue-rotate(201deg) brightness(106%) contrast(106%)',
                    }}
                  />
                  <figcaption className='text-lg pl-10 md:text-xl hover:text-white transition-colors'>
                    Instagram
                  </figcaption>
                </a>
              </figure>
              <figure className='flex justify-start items-center w-28 m-2'>
                <a
                  href='https://wa.me/541149281113'
                  target='_blank'
                  rel='noreferrer'
                  className='relative w-7 h-7 md:w-8 md:h-8'
                >
                  <Image
                    src={wp}
                    alt='whats app'
                    layout='fill'
                    style={{
                      filter:
                        ' invert(100%) sepia(100%) saturate(0%) hue-rotate(201deg) brightness(106%) contrast(106%)',
                    }}
                  />
                  <figcaption className='text-lg pl-10 md:text-xl hover:text-white transition-colors'>
                    WhatsApp
                  </figcaption>
                </a>
              </figure>
              <figure className='flex justify-start items-center w-28 m-2'>
                <div className='relative w-7 h-7 md:w-8 md:h-8'>
                  <Image
                    src={teleg}
                    alt='telegram'
                    layout='fill'
                    style={{
                      filter:
                        ' invert(100%) sepia(100%) saturate(0%) hue-rotate(201deg) brightness(106%) contrast(106%)',
                    }}
                  />
                </div>
                <figcaption className='text-lg pl-2 md:text-xl'>
                  Telegram
                </figcaption>
              </figure>
            </div>
          </div>
          <p className='text-white pt-10 font-medium'>
            © 2022 Mónica Hidrugo - El Tallercito
          </p>
          <span className='text-center text-white font-medium text-lg'>
            cotillón y mucho más
          </span>
        </div>
      </footer>
    </>
  );
}
