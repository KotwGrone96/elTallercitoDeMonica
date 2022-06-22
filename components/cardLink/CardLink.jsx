import Link from 'next/link';
import Image from 'next/image';

export default function CardLink({ img, title, link }) {
  return (
    <Link href={link}>
      <a className='overflow-hidden w-32 md:w-52 m-4 md:m-0 p-1 bg-purple rounded-md shadow-card'>
        <figure className='w-full overflow-hidden h-48 md:h-60 '>
          <div className='relative w-full h-48 md:h-60 hover:scale-110 transition-transform'>
            <Image layout='fill' src={img} alt={title} objectFit='cover' />
          </div>
        </figure>
        <h3
          className='text-center text-medium text-white text-xl md:text-2xl pt-2'
          style={{
            textShadow: '2px 2px 3px #00C896',
          }}
        >
          {title}
        </h3>
      </a>
    </Link>
  );
}
