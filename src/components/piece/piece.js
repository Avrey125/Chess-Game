import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { useCoordinate } from './useCoordinate';

const Piece = () => {

  // const {coordinate, movement} = useCoordinate(); 
  const [coords, setCoords] = useState({ x: 75/2, y: 75/2 });
  const [clicked, setIsClicked] = useState({isclicked: false, fill: "black"})

  const handleClick = () => {
    setIsClicked({isclicked: true, fill: "red"})
  }

  const handler = useCallback(
    ({ clientX, clientY }) => {

      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener('mousedown', handler);

  function useEventListener(eventName, handler, element = window){

    const savedHandler = useRef();

    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
  
    useEffect(
      () => {

        const eventListener = event => savedHandler.current(event);
        
        element.addEventListener(eventName, eventListener);
        
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      },
      [eventName, element] 
    );
  };

  return(
    <circle
      cx={coords.x}
      cy={coords.y}
      onClick={handleClick}
      fill={clicked.fill}
      r="20"
    />
    
  )
}

export default Piece;
