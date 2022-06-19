import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useMemo, memo } from 'react';
import Loader from '../loader/Loader';

function Map({ id }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const position = useMemo(
    () =>
      id == 'caba'
        ? { lat: -34.61763782741315, lng: -58.39144358116413 }
        : { lat: -34.56661515555926, lng: -58.51738325085533 },
    [id]
  );

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={position}
      zoom={16}
    >
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <Loader />
  );
}

export default memo(Map);
