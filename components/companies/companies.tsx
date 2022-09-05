import { Icons } from 'components';

interface Arr {
  name: string;
  url: string;
  id: number;
}

interface IProps {
  arr: Arr[];
}

const Companies = ({ arr }: IProps) => {
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
    </>
  );
};

export default Companies;
