interface Arr {
  title: string;
  text: string;
  id: number;
}

export interface IProps {
  arr: Arr[];
}

const AboutStat = ({ arr }: IProps) => {
  return (
    <div className="about__stat">
      {arr.map((item) => (
        <div className="about__stat-item" key={item.id}>
          <b>{item.title}</b>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutStat;
