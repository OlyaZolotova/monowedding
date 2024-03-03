import { useContext } from "react";
import "./style.scss";
import { clsx } from "clsx";
import { Zoom } from "react-awesome-reveal";


export const Footer = () => {

  return (
    <footer>
      <div className="footer">
        <Zoom triggerOnce={true} duration={2000} delay={500}>
          <div className="container">
            <h3 className="footer__title">Wedding day</h3>
            <div className="footer__textwrap">
              <p className="footer__text">07.07.2024</p>
            </div>
          </div>
        </Zoom>
      </div>
    </footer>
  );
};
