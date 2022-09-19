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
    <footer className="footer">
      <div className="container">
        <div className="footer__top-wrapper">
          <a className="footer__logo" href="#">
            {logoComponent}
          </a>

          <FooterLinks {...footerLinksJoin} />
          <FooterLinks {...footerLinksCompany} />

          <div className="footer__contacts">
            <b className="footer__contacts-title">{footerContactTitle}</b>
            <p className="footer__contacts-text">{footerContactsText}</p>
            <div className="footer__contacts-subscription">
              <input
                className="footer__contacts-input"
                type="text"
                placeholder="Email*"
              />
              <button className="button footer__contacts-button">
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
            {address} <a href={`tel: ${phoneNumber}`}>{phoneNumber}</a>
          </p>
        </div>

        <div className="footer__bottom">
          <p>© 2021 Brella Insurance Inc. All Rights Reserved.</p>
          <div>
            <a href="#">Privacy</a>
            <span className="footer__bottom-pipeline">|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
