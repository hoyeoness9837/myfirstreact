import React from 'react';

const Button = (props) => {
  console.log(props);
  return (
    <>
      <button>{props.text}</button>
      <button>{props.one}</button>
      <button>{props.two}</button>
    </>
  );
};

export default Button;
