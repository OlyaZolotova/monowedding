import { Fade, Slide } from "react-awesome-reveal";
import "./style.scss";

export const Timing = () => {
  return (
    <div className="timing">
      <div className="container">
        <div className="timing__wrap">
          <Fade triggerOnce={true} duration={2000}>
            <h2 className="timing__title">Timing</h2>
          </Fade>
          <div className="timing__content">
            <div className="timing__textwraptop">
              <div className="timing__textwrap">
                <Slide triggerOnce={true} direction="down" duration={2000}>
                  <p className="timing__subtitle">14.00</p>
                  <p className="timing__text">Трансфер из г.Минска</p>
                </Slide>
                <div className="timing__img">
                  <Slide triggerOnce={true} direction="up" duration={2000}>
                    <img
                      className="timing__png"
                      src="/wedding-car_4128918.png"
                      alt="couple"
                    />
                  </Slide>
                </div>
              </div>
              <div className="timing__textwrap">
                <Slide triggerOnce={true} direction="down" duration={2000}>
                  <p className="timing__subtitle">16.00</p>
                  <p className="timing__text">Торжественная церемония</p>
                </Slide>
                <div className="timing__img">
                  <Slide triggerOnce={true} direction="up" duration={2000}>
                    <img
                      className="timing__png"
                      src="/decoration_4128966.png"
                      alt="couple"
                    />
                  </Slide>
                </div>
              </div>
              <div className="timing__textwrap">
                <Slide triggerOnce={true} direction="down" duration={2000}>
                  <p className="timing__subtitle">00.00</p>
                  <p className="timing__text">Завершение свадьбы</p>
                </Slide>
                <div className="timing__img">
                  <Slide triggerOnce={true} direction="up" duration={2000}>
                    <img
                      className="timing__png"
                      src="/fireworks_4128827.png"
                      alt="couple"
                    />
                  </Slide>
                </div>
              </div>
            </div>
            <Fade triggerOnce={true} duration={2000}>
              <div className="timing__image">
                <img className="timing__svg" src="/Group 45.svg" alt="couple" />
              </div>
            </Fade>
            <div className="timing__textwrapbottom">
              <div className="timing__textwrap">
                <Slide triggerOnce={true} direction="up" duration={2000}>
                  <p className="timing__subtitle">15.00</p>
                  <p className="timing__text">Сбор гостей, фуршет</p>
                </Slide>
                <div className="timing__img timing__img-b">
                  <Slide triggerOnce={true} direction="down" duration={2000}>
                    <img
                      className="timing__png"
                      src="/drinks_4128776.png"
                      alt="couple"
                    />
                  </Slide>
                </div>
              </div>
              <div className="timing__textwrap">
                <Slide triggerOnce={true} direction="up" duration={2000}>
                  <p className="timing__subtitle">17.00</p>
                  <p className="timing__text">Праздничный банкет</p>
                </Slide>
                <div className="timing__img timing__img-b">
                  <Slide triggerOnce={true} direction="down" duration={2000}>
                    <img
                      className="timing__png"
                      src="/catering_4128662.png"
                      alt="couple"
                    />
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
