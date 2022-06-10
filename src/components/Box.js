import React from 'react';

const Box = ({ val, col, trans }) => {
  const backgroundColor = col ? 'red' : '#111';
  const height = 50 + (val / 19) * 400;
  const classNames = trans ? `box ${trans}` : 'box transnull';
  return (
    <div
      className={classNames}
      style={{ backgroundColor, height, transform: trans }}
    >
      {val}
    </div>
  );
};

export default Box;
