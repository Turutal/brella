import { Icons } from 'components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
interface Arr {
  name: string;
  url: string;
  id: number;
}

interface IProps {
  arr: Arr[];
}

const Companies = ({ arr }: IProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
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
      <Carousel responsive={responsive}>
        {arr.map((item) => (
          <div key={item.id}>
            <img src={item.url} alt={item.name} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Companies;
