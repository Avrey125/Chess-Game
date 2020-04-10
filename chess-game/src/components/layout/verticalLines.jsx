import React from 'react';

const Lines = () => {
  const division = {
    stroke: '#000000',
    strokeWidth: '3px',
  };

  const width = 600;
  const height = 600;

  const items = [];
  const array = [1,2,3,4,5,6,7,8]

    array.forEach((value, index) => {
      items.push(      
        <line
        key={index}
          x1={index * height/array.length}
          y1={0}
          x2={index * height/array.length}
          y2={height}
          style={division}
        />,
        <line
        key={index + 8}
        x1={0}
        y1={index * height/array.length}
        x2={width}
        y2={index * height/array.length}
        style={division}
      />);
      }
    )
  
  return (
    <g id="vLines">
      {items}
    </g>
  );
};

export default Lines;