interface IProps {
  title: string;
  subtitle: string;
  text: string;
  buttonText: string;
  url: string;
  className: string;
}

const Block = ({
  title,
  subtitle,
  text,
  buttonText,
  url,
  className,
}: IProps) => {
  return (
    <div className="block">
      <div className="block__wrapper">
        <h2 className="block__title">{title}</h2>
        <h3 className="block__subtitle">{subtitle}</h3>
        <p className="block__text">{text}</p>
        <button className={`block__button ${className}`}>{buttonText}</button>
      </div>
      <picture>
        <img src={url} alt="insurance" />
      </picture>
    </div>
  );
};

export default Block;
