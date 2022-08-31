import React from 'react';

interface ButtonProps {
  text: string;
  promo?: boolean;
}

function Button({ text, promo }: ButtonProps) {
  const className = promo ? 'promo__button' : '';

  return <button className={`button ${className}`}>{text}</button>;
}

export default Button;
