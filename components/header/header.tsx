import React from 'react';

import { Button, Select } from 'components';

interface Arr {
  text: string;
  id: number;
}

interface IProps {
  component: React.ReactNode;
  arr: Arr[];
}

const Header = ({ component, arr }: IProps) => {
  return (
    <header className="header">
      <div className="header__logo">{component}</div>
      <nav className="header__nav">
        {arr.map((item) => (
          <a className="header__nav-item" href="#" key={item.id}>
            {item.text}
          </a>
        ))}
      </nav>
      <Button text="Request a demo" />
      <Select />
      <button className="header__button-lang">EN</button>
    </header>
  );
};

export default Header;
