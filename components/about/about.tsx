import { Block, AboutStat } from 'components';

import { IProps as BlockInterface } from 'components/block/block';
import { IProps as AboutStatInterface } from 'components/about-stat/about-stat';

interface IProps {
  blockProps: BlockInterface;
  aboutProps: AboutStatInterface;
}

const About = ({ blockProps, aboutProps }: IProps) => {
  return (
    <>
      <Block {...blockProps} />
      <AboutStat {...aboutProps} />
    </>
  );
};

export default About;
