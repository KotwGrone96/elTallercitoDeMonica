import Image from 'next/image';
import WhatsAppBtn from '../whatsAppBtn/WhatsAppBtn';

export default function ServiceCard({ title, img }) {
  return (
    <>
      <div className='w-full max-w-3xl mt-10 mb-10 m-auto rounded-xl overflow-hidden md:m-4 md:flex md:h-96 shadow-card'>
        <figure className='relative w-full h-48 md:h-96'>
          <Image
            src={img}
            alt='castillo inflable'
            layout='fill'
            objectFit='cover'
          />
        </figure>
        <div className='bg-purple p-4 md:w-2/3 h-full'>
          <h3 className='text-white font-medium text-2xl text-left md:text-3xl'>
            {title}
          </h3>
          <p className='text-left text-lessWhite p-4 pl-0 pr-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            facere quod et deserunt ea sit exercitationem voluptates quam eum
            sapiente, eligendi error assumenda explicabo illo aut, eveniet ab
            praesentium reiciendis.
          </p>
          <div className='max-w-xs m-auto p-4'>
            <WhatsAppBtn />
          </div>
        </div>
      </div>
    </>
  );
}
