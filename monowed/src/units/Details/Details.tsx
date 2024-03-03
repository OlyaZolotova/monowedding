import "./style.scss";
import { Fade } from "react-awesome-reveal";

export const Details = () => {
  return (
    <div className="details">
      <div className="container">
        <div className="details__wrap">
          <Fade triggerOnce={true} duration={2000}>
            <h2 className="details__title">Details</h2>
          </Fade>
          <div className="details__content">
            <Fade
              triggerOnce={true}
              cascade
              damping={0.2}
              duration={2000}
            
            >
              <div className="details__textwrap">
                <h3 className="details__subtitle">Dress-code</h3>
                <p className="details__text">
                  Пожалуйста, избегайте ярких цветов и расцветок, ориентируйтесь
                  на классический черно-белуюпалитру.
                </p>
              </div>
              <div className="details__textwrap details__line"></div>
              <div className="details__textwrap">
                <h3 className="details__subtitle">Presents</h3>
                <p className="details__text">
                  Если вы предпочитаете подарить денежный вклад, мы будем очень
                  благодарны за вашу щедрость и понимание. Это поможет нам
                  осуществить наши мечты и планы на будущее.
                </p>
              </div>
              <div className="details__textwrap details__line2"></div>
              <div className="details__textwrap">
                <h3 className="details__subtitle">Flowers</h3>
                <p className="details__text">
                  Вместо традиционных цветов, мы хотели бы попросить вас
                  принести с собой бутылочку вашего любимого алкогольного
                  напитка.{" "}
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
