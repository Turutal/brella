import React from 'react';

interface Arr {
  num: number;
}

interface IProps {
  text: string;
  component: React.ReactNode;
  num: number;
  bool: boolean;
  arr: Arr[];
}

const Example = ({ text, component, num, bool, arr }: IProps) => {
  return (
    <div className="example">
      <p>{text}</p>
      <div>component {component}</div>
      <p>num {num}</p>
      <p>bool {bool ? 1 : 0}</p>
      <div>
        Array {'->'}
        {arr.map((item) => (
          <p key={item.num}>{item.num}</p>
        ))}
      </div>
    </div>
  );
};

export default Example;
