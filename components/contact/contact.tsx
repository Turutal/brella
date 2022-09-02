import { Button } from 'components';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <picture>
            <img src="/images/contact-man.jpg" alt="contact" />
          </picture>
          <div className="contact__block">
            <p className="contact__text">
              Ready to explore Brella’s supplemental health solution?
            </p>
            <p className="contact__text">Let’s talk.</p>
            <Button text="Get in touch" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
