import "./style.scss";
import { Fade } from "react-awesome-reveal";

export const Main = () => {
  return (
    <Fade triggerOnce={true} duration={2000}>
      <div className="main">
        <div className="container">
          <div className="main__wrapper">
            <div className="main__image">
              <img className="main__jpg" src="/couple.jpg" alt="couple" />
            </div>
            <div className="main__wrap">
              <p className="main__text">save our date</p>
              <div className="main__line"></div>
              <div className="main__textwrap">
                <h1 className="main__title">Валерий</h1>
                <h1 className="main__title main__title-middle">and</h1>
                <h1 className="main__title">Анастасия</h1>
              </div>
              <div className="main__line2"></div>
              <p className="main__text main__text-bottom">07.07.2024</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};
