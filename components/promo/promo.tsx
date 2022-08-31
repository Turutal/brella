import React from 'react';
import { Button, PromoFeatures } from 'components';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__block">
          <h1 className="promo__title">
            Give your team peace of mind with supplemental health insurance from
            Brella.
          </h1>
          <div className="promo__search">
            <p>I{"'"}m wondering...</p>
            <div className="promo__input">
              <input type="text" placeholder="how Brella's plan works" />
              <Button text="Find out" promo={true} />
            </div>
          </div>
        </div>
        <PromoFeatures
          arr={[
            {
              url: '../../public/images/umbrella.png',
              title: 'More coverage',
              text: 'Brella covers 13,000+ injuries and illnesses from concussions to cancer.',
              id: 1,
            },
            {
              url: '../../public/images/check.png',
              title: 'Less hassle',
              text: 'One easy-to-manage plan with paperless install and online admin tools.',
              id: 2,
            },
            {
              url: '../../public/images/cash.png',
              title: 'Faster benefits',
              text: 'Brella pays claims in hours–not weeks so your people can rest easy.',
              id: 3,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Promo;
