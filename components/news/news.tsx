import React from 'react';

interface Arr {
  url: string;
  title: string;
  subtitle: string;
  id: number;
}

interface IProps {
  arr: Arr[];
}

const News = ({ arr }: IProps) => {
  return (
    <div className="news__wrapper">
      {arr.map((item) => (
        <div className="news__item" key={item.id}>
          <picture className="news__img">
            <img src={item.url} alt={item.title} />
          </picture>
          <h3 className="news__item-title">{item.title}</h3>
          <b className="news__item-subtitle">{item.subtitle}</b>
        </div>
      ))}
    </div>
  );
};

export default News;
