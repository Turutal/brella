import { useState } from 'react';
import { Icons } from 'components';

interface BringsArray {
  title: string;
  text: [string, string];
}

export interface Data {
  title: string;
  bringsArray: BringsArray[];
}

const Brings = ({ title, bringsArray }: Data) => {
  const [currentSlide, setCurrentSlide] = useState(bringsArray[0]);
  const [show, setShow] = useState(false);
  return (
    <>
      <h2 className="brings__title">{title}</h2>
      <div className="brings__wrapper">
        <div className="brings__title-list">
          {bringsArray.map((item) => (
            <>
              <h3
                key={item.title}
                className="brings__title-item"
                onMouseMove={() => {
                  setCurrentSlide(item), setShow(!show);
                }}
              >
                {item.title}
              </h3>
              <span
                className={`brings__title-arrow ${
                  show ? 'brings__title-arrow--show' : ''
                }`}
              >
                <Icons.RightButton />
              </span>
            </>
          ))}
        </div>
        <div className="brings__describe-list">
          {currentSlide.text.map((item, i) => (
            <p key={i + currentSlide.title}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brings;
