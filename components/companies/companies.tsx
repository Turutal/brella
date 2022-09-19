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

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="companies__button-right">
      <Icons.RightButton />
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="companies__button-left">
      <Icons.LeftButton />
    </button>
  );
}

const Companies = ({ arr }: IProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <h2 className="companies__title">Proudly backed by</h2>
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
