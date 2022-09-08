import React from 'react';
import { FooterLinks, FooterSocialLinks } from 'components';
import { IProps as FooterLinksInterface } from 'components/footer-links/footer-links';
import { IProps as FooterSocialInterface } from 'components/footer-social-links/footer-social-links';

interface IProps {
  logoComponent: React.ReactNode;
  footerLinksJoin: FooterLinksInterface;
  footerLinksCompany: FooterLinksInterface;
  footerSocialProps: FooterSocialInterface;
  footerContactTitle: string;
  footerContactsText: string;
  footerContactsArrow: React.ReactNode;
  policyText: string;
  underwrittenText: string;
  address: string;
  phoneNumber: string;
}

const Footer = ({
  logoComponent,
  footerLinksJoin,
  footerLinksCompany,
  footerSocialProps,
  footerContactTitle,
  footerContactsText,
  footerContactsArrow,
  policyText,
  underwrittenText,
  address,
  phoneNumber,
}: IProps) => {
  return (
    <>
      <div className="footer__top-wrapper">
        <a className="footer__logo" href="#">
          {logoComponent}
        </a>
        <FooterLinks {...footerLinksJoin} />
        <FooterLinks {...footerLinksCompany} />
        <div className="footer--contacts">
          <b className="footer--contacts__title">{footerContactTitle}</b>
          <p className="footer--contacts__text">{footerContactsText}</p>
          <div className="footer--contacts__input">
            <input type="text" placeholder="Email*" />
            <button className="button footer--contacts__button">
              {footerContactsArrow}
            </button>
          </div>
          <FooterSocialLinks {...footerSocialProps} />
        </div>
      </div>
      <span className="line"></span>
      <div className="footer__text">
        <p>{policyText}</p>
        <p>{underwrittenText}</p>
        <p>
          {address} tel:{phoneNumber}
        </p>
      </div>
      <div className="footer__bottom">
        <p>© 2021 Brella Insurance Inc. All Rights Reserved.</p>
        <div>
          <a href="#">Privacy |</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
