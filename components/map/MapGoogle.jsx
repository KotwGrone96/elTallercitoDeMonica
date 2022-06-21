import Loader from '../loader/Loader';
import { memo } from 'react';

export default memo(function MapGoogle({ id }) {
  if (id === 'caba') {
    return (
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.465742397343!2d-58.3914407!3d-34.617668900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadeffb5ccf9%3A0x68e59a88512f0248!2sAv.%20Entre%20R%C3%ADos%20754%2C%20C1080%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2spe!4v1655691641630!5m2!1ses-419!2spe'
        loading='lazy'
        style={{ width: '100%', height: '100%' }}
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    );
  }
  if (id === 'villamaipu') {
    return (
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.4776539098725!2d-58.51822010000001!3d-34.5667786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb71acceaff4b%3A0x20bc2e4a4976fd!2sEstrada%201578%2C%20Villa%20Maip%C3%BA%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2spe!4v1655692345442!5m2!1ses-419!2spe'
        loading='lazy'
        style={{ width: '100%', height: '100%' }}
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    );
  }

  return <Loader />;
});
