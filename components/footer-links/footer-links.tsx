interface FooterLinks {
  name: string;
  id: number;
}

export interface IProps {
  title: string;
  arr: FooterLinks[];
}

const FooterLinks = ({ title, arr }: IProps) => {
  return (
    <div className="footer--links">
      <h3 className="footer--links__title">{title}</h3>
      <ul className="footer--links__list">
        {arr.map((item) => (
          <li className="footer--links__item" key={item.id}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
