import { useState } from 'react';
import { Icons } from 'components';

interface BringsArray {
  title: string;
  text: string[];
}

export interface Data {
  title: string;
  bringsArray: BringsArray[];
}

const Brings = ({ title, bringsArray }: Data) => {
  const [currentSlide, setCurrentSlide] = useState(bringsArray[0]);
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
                  setCurrentSlide(item);
                }}
              >
                {item.title}
                <span
                  className={`brings__title-arrow ${
                    currentSlide.title === item.title
                      ? 'brings__title-arrow--show'
                      : ''
                  }`}
                >
                  <Icons.RightButton />
                </span>
              </h3>
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
