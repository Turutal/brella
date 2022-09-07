import { Icons } from 'components';
import React, { Component } from 'react';
import Slider from 'react-slick';
interface Arr {
  name: string;
  url: string;
  id: number;
}

interface IProps {
  arr: Arr[];
}

const Companies = ({ arr }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Icons.LeftButton />,
  };
  return (
    <>
      <h2 className="companies__title">Proudly backed by</h2>
      <ul className="companies__list">
        {arr.map((item) => (
          <li className="companies__list-item" key={item.id}>
            <a href="#">
              <img src={item.url} alt={item.name} />
            </a>
          </li>
        ))}
        <button className="companies__button-left">
          <Icons.LeftButton />
        </button>
        <button className="companies__button-right">
          <Icons.RightButton />
        </button>
      </ul>
      <div className="companies__slider">
        <Slider {...settings}>
          {arr.map((item) => (
            <div key={item.id}>
              <img src={item.url} alt={item.name} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Companies;
