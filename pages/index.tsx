import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Header,
  Icons,
  Promo,
  Block,
  About,
  Companies,
  News,
  Contact,
} from 'components';

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>Brella</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Example
          text="Example Component"
          component={<Icons.ArrowIcon />}
          num={100}
          bool={true}
          arr={[{ num: 0 }, { num: 1 }, { num: 2 }]}
        /> */}
        <Header
          component={<Icons.LogoIcon />}
          arr={[
            { text: 'Our Plan', id: 1 },
            { text: 'Employers', id: 2 },
            { text: 'Brokers', id: 3 },
            { text: 'Members', id: 4 },
            { text: 'About', id: 5 },
            { text: 'Blog', id: 6 },
          ]}
        />

        <Promo />

        <section className="advantages">
          <div className="container">
            <Block
              title={`Why Brella?`}
              subtitle={`Today, any health insurance deductible can feel like a high deductible.`}
              buttonText={'See our plan'}
              text={`Brella's supplemental health plan enhances your health benefit strategy to ensure that health hardships don't become financial burdens.`}
              url={'/images/insurance-frame.png'}
              className={' '}
            />
          </div>
        </section>

        <section className="about">
          <div className="container">
            <About />
          </div>
        </section>

        <section className="mobile">
          <div className="container">
            <Block
              title={'a better claims experience'}
              subtitle={`Give your people a plan that pays in hours—not weeks.`}
              buttonText={'Play Video'}
              text={`Your team can’t wait for peace of mind. Brella pays on diagnosis, so members can file a claim sooner and get paid faster via our Member Portal or mobile app.`}
              url={'/images/mobile-app.png'}
              className={' '}
            />
          </div>
        </section>

        <section className="employers">
          <div className="container">
            <Block
              title={'for employers'}
              subtitle={`Easy enrollment meets simple administration.`}
              buttonText={'Learn more'}
              text={
                'Brella brings 100% paperless implementation, enrollment, and admin. Plug into our platforms or we’ll plug into yours.'
              }
              url={'/images/mobile-app.png'}
              className={' '}
            />
          </div>
        </section>

        <section className="companies">
          <div className="container">
            <Companies
              arr={[
                { name: 'brewer lane', url: '/images/brewer-lane.png', id: 1 },
                { name: 'two sigma', url: '/images/two-sigma.png', id: 2 },
                { name: 'digitals', url: '/images/digitals.png', id: 3 },
                { name: 'founder', url: '/images/founder.png', id: 4 },
                { name: 'symphony', url: '/images/symphony.png', id: 5 },
              ]}
            />
          </div>
          <span className="line"></span>
        </section>

        <section className="news">
          <div className="container">
            <News
              arr={[
                {
                  url: '/images/podcast.jpg',
                  title: 'Podcast',
                  subtitle:
                    'Better Voluntary Benefits with NFP Voluntary Benefits Practice Leader, Kim Heald',
                  id: 1,
                },
                {
                  url: 'images/insurance.jpg',
                  title: 'Insurance Innovation',
                  subtitle: 'How to Design Simpler Insurance Benefits',
                  id: 2,
                },
                {
                  url: 'images/benefits.jpg',
                  title: 'Benefits Strategy',
                  subtitle: 'Executive Benefits Outlook with Dan Aceti',
                  id: 3,
                },
              ]}
            />
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
