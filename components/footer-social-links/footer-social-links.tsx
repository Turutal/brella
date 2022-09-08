interface SocialArray {
  component: React.ReactNode;
  id: number;
}

export interface IProps {
  arr: SocialArray[];
}

const FooterSocialLinks = ({ arr }: IProps) => {
  return (
    <ul className="footer__social">
      {arr.map((item) => (
        <li className="footer__social-item" key={item.id}>
          <a href="#">{item.component}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialLinks;
