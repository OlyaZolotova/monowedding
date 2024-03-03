import { Fade } from "react-awesome-reveal";
import "./style.scss";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <Fade triggerOnce={true} duration={2000}>
          <p className="contacts__title">
            По всем вопросам можете обращаться к нашему организатору Валерии:
          </p>
        </Fade>

        <div className="contacts__linkwrap">
          <Fade
            triggerOnce={true}
            cascade
            damping={0.3}
            duration={2000}
            direction="down"
          >
            <a className="contacts__link" href="tel:+375299367861">
              +375299367861
            </a>
            <a
              className="contacts__linkimg"
              href="https://www.instagram.com/olyamakovchik?igsh=d3BmY25hN2d6ZjIw&utm_source=qr"
            >
              <img className="contacts__img" src="/Group 18.svg"></img>
            </a>
            <a className="contacts__linkimg" href="https://t.me/olyazolotova">
              <img
                className="contacts__img"
                src="/paper-plane_4558204.png"
              ></img>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};
