import React from 'react';

interface ButtonProps {
  text: string;
  promo?: boolean;
  block?: boolean;
  none?: boolean;
}

function Button({ text, promo, block, none }: ButtonProps) {
  const className = promo
    ? 'promo__button'
    : block
    ? 'block__button'
    : none
    ? 'button__none'
    : '';

  return <button className={`button ${className}`}>{text}</button>;
}

export default Button;
