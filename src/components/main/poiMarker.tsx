import MapMarker from '../common/mapMarker';

const PoiMarker = () => {
  const data = [
    {
      poi_id: 109,
      type: 'obstacle',
      lat: 35.232035761069845,
      lon: 129.0096771333376
    },
    {
      poi_id: 110,
      type: 'place',
      lat: 35.23235374614882,
      lon: 129.01223307752255
    }
  ];
  return (
    <>
      {data.map((poi) => (
        <MapMarker name='mappin' location={[poi.lat, poi.lon]} />
      ))}
    </>
  );
};

export default PoiMarker;
