interface Arr {
  url: string;
  title: string;
  text: string;
  id: number;
}

interface IProps {
  arr: Arr[];
}

const PromoFeatures = ({ arr }: IProps) => {
  return (
    <div className="promo__features">
      {arr.map((item) => (
        <div className="promo__features-item" key={item.id}>
          <picture>
            <img src={item.url} alt={item.title} />
          </picture>
          <div>
            <h2 className="promo__features-title">{item.title}</h2>
            <p className="promo__features-text">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoFeatures;
