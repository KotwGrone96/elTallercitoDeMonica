import Image from 'next/image';
import Link from 'next/link';

export function ProductCardMobile({ img }) {
  return (
    <div className='w-80 bg-purple rounded-3xl flex justify-evenly items-center p-4 pl-0 pr-0 m-auto mt-4 mb-4 shadow-card '>
      <figure className='w-24 h-24 relative overflow-hidden rounded-full'>
        <Image src={img} alt='producto' layout='fill' objectFit='cover' />
      </figure>
      <div>
        <h3
          className='text-lessWhite text-2xl pb-4 font-semibold'
          style={{ textShadow: '2px 2px 5px #5f5f5f' }}
        >
          Nombre del producto
        </h3>
        <Link href='/productos/nombre-del-producto'>
          <a className='flex bg-green justify-center items-center p-4 pt-2 pb-2 rounded-full hover:bg-hoverGreen transition-background text-white pl-2 text-xl md:text-2xl'>
            Ver producto
          </a>
        </Link>
      </div>
    </div>
  );
}

export const ProductCardDesktop = ({ img }) => {
  return (
    <div className='w-2/6 max-w-xs min-w-200 m-2 overflow-hidden rounded-xl shadow-card'>
      <figure className='w-full h-52  relative'>
        <Image src={img} alt='producto' layout='fill' objectFit='cover' />
      </figure>
      <div className='w-full bg-purple pb-4'>
        <h3
          className='text-lessWhite text-2xl p-4 font-semibold text-left'
          style={{ textShadow: '2px 2px 5px #5f5f5f' }}
        >
          Nombre del producto
        </h3>
        <p className='text-left p-4 pt-0 text-lessWhite'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ullam
          dolores repellat eaque odio
        </p>
        <Link href='/productos/nombre-del-producto'>
          <a className='flex bg-green justify-center items-center p-4 pt-2 pb-2 rounded-full hover:bg-hoverGreen transition-background text-white pl-2 text-xl md:text-2xl w-44 ml-4'>
            Ver producto
          </a>
        </Link>
      </div>
    </div>
  );
};
