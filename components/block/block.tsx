import { Button } from 'components';

interface IProps {
  title: string;
  subtitle: string;
  text: string;
  buttonText: string;
}

const Block = ({ title, subtitle, text, buttonText }: IProps) => {
  return (
    <div className="block">
      <h2 className="block__title">{title}</h2>
      <h3 className="block__subtitle">{subtitle}</h3>
      <p className="block__text">{text}</p>
      <Button text={buttonText} block={true} />
    </div>
  );
};

export default Block;
