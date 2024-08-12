import { useEffect, useState } from 'react';
import { CommonButton } from '../common/commonButton';
import IconComponent from '../ui/icon';

type RecordRoutesProps = {
  duration?: number;
};

const RecordRoutes = (props: RecordRoutesProps) => {
  const { duration = 1000 } = props;
  const [isRecording, setIsRecording] = useState(false);
  const [coords, setCoords] = useState<GeolocationCoordinates[]>([]);

  useEffect(() => {
    if (isRecording) {
      const record = navigator.geolocation.watchPosition((pos) => {
        const { coords } = pos;
        setCoords((prev) => [...prev, coords]);
      });
      const interval = setInterval(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { coords } = pos;
          setCoords((prev) => [...prev, coords]);
        });
      }, duration);

      return () => {
        navigator.geolocation.clearWatch(record);
        clearInterval(interval);
      };
    }
  }, [duration, isRecording]);

  const handleRecording = () => {
    if (isRecording) {
      console.log(coords);
      setCoords([]);
    }
    setIsRecording((prev) => !prev);
  };

  return (
    <CommonButton
      use='icon'
      color='white'
      radius='large'
      className='absolute right-4 top-28 z-[9999] mt-2'
      onClick={handleRecording}>
      <IconComponent name='tags' />
    </CommonButton>
  );
};

export default RecordRoutes;
