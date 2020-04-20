import { useState } from 'react';

export const useCoordinate= () => {
  const [coordinate, setCoordinate] = useState({cx: 75/2 , cy: 75/2, counter: 1});

  const movement = () => {

    if(coordinate.cy < 562.5){
      setCoordinate({...coordinate, cy: coordinate.cy + 75, counter: coordinate.counter + 1});
      console.log(coordinate.counter);
    } else {
      setCoordinate({...coordinate, cy: coordinate.cy});
      console.log('no moves available');
    }
  };

  return {coordinate, movement };
};
