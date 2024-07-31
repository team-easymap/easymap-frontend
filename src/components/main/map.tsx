import { TileLayer } from 'react-leaflet';

type MainMapProps = {
  children?: React.ReactNode;
};

const MainMap = (props: MainMapProps) => {
  const key = import.meta.env.VITE_VWORLD_API_KEY;
  const url = import.meta.env.VITE_VWORLD_API_URL;
  return (
    <>
      <TileLayer
        url={`${url}/req/wmts/1.0.0/${key}/Base/{z}/{y}/{x}.png`}
        attribution="&copy; <a href='https://vworld.kr'>VWorld</a> contributors"
        className='h-full w-full'
      />
      {props.children}
    </>
  );
};

export default MainMap;
