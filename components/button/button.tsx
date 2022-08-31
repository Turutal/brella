import React from 'react';

interface ButtonProps {
  text: string;
  promo?: boolean;
  block?: boolean;
}

function Button({ text, promo, block }: ButtonProps) {
  const className = promo ? 'promo__button' : block ? 'block__button' : '';

  return <button className={`button ${className}`}>{text}</button>;
}

export default Button;
