import React from 'react';

interface ButtonProps {
  text: string;
  promo?: boolean;
  block?: boolean;
  none?: boolean;
}

function Button({ text, promo, block, none }: ButtonProps) {
  const className = promo
    ? 'button--promo'
    : block
    ? 'button--block'
    : none
    ? 'button--none'
    : '';

  return <button className={`button ${className}`}>{text}</button>;
}

export default Button;
