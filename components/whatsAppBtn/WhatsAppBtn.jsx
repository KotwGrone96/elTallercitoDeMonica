import Image from 'next/image';

export default function WhatsAppBtn() {
  return (
    <a
      href='https://wa.me/541149281113'
      target='_blank'
      rel='noreferrer'
      className='flex bg-green justify-center items-center p-4 pt-2 pb-2 rounded-full row-start-4 row-end-5 col-start-8 hover:bg-hoverGreen transition-background'
    >
      <div
        className='w-8 h-8 relative'
        style={{
          filter:
            'invert(100%) sepia(0%) saturate(3811%) hue-rotate(16deg) brightness(108%) contrast(88%)',
        }}
      >
        <Image
          layout='fill'
          alt='whats app'
          src='/images/wp.svg'
          objectFit='cover'
        />
      </div>
      <span className='text-white pl-2 text-xl md:text-2xl'>Mensaje</span>
    </a>
  );
}
