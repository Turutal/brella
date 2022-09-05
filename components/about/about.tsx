import { Block, AboutStat } from 'components';

const About = () => {
  return (
    <>
      <Block
        title={'one plan, more coverage'}
        subtitle={
          'No one can predict which health issues might come their way.'
        }
        buttonText={' '}
        className={'button__none'}
        text={`Our broad supplemental coverage gets rid of the guesswork and puts cash in your team’s pockets for most conditions that require urgent medical attention.`}
        url={'/images/about.png'}
      />
      <AboutStat
        arr={[
          {
            title: '5K',
            text: 'covered injuries and illnesses from fractures and appendicitis to cancer',
            id: 1,
          },
          {
            title: '1X',
            text: 'more covered conditions than Accident and Critical Illness plans—combined',
            id: 2,
          },
          {
            title: '40%',
            text: 'plans are 100% guaranteed issue. No medical underwriting required',
            id: 3,
          },
          {
            title: '0',
            text: 'Zero limitations or exclusions for pre-existing conditions',
            id: 4,
          },
        ]}
      />
    </>
  );
};

export default About;
