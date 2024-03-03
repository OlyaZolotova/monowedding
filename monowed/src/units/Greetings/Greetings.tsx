import "./style.scss";
import { Fade, Slide } from "react-awesome-reveal";

export const Greetings = () => {
  return (
    <div className="greetings">
      <div className="container">
        <div className="greetings__wrapper">
          <div className="greetings__wrap">
            <div className="greetings__textwrap">
              <Fade triggerOnce={true} duration={2000}>
                <h4 className="greetings__title">ДОРОГИЕ БЛИЗКИЕ И ДРУЗЬЯ!</h4>
              </Fade>
              <Fade triggerOnce={true} duration={2000}>
                <p className="greetings__text greetings__text-top">
                  Мы рады пригласить вас разделить с нами счастливый день нашей
                  свадьбы! Мы хотели бы поделиться с вами нашей радостью и
                  любовью в этот особенный для нас день.
                </p>
              </Fade>
            </div>
            <Fade triggerOnce={true} duration={2000}>
              <h4 className="greetings__title">
                Правила для участия в нашей свадьбе
              </h4>
            </Fade>
            <Fade
              cascade
              damping={0.3}
              triggerOnce={true}
              direction="left"
              duration={2000}
            >
              <p className="greetings__text">
                Смех, веселье и хорошее настроение - ваш вклад в наше счастье.
              </p>
              <p className="greetings__text">
                Фотографироваться с нами - обязательно. La selfie est
                obligatoire!
              </p>
              <p className="greetings__text">
                На свадьбе обязательны танцы. Запасайтесь хорошим настроением и
                танцевальными навыками!
              </p>
              <p className="greetings__text">
                Любые проявления чувства юмора встречаются на ура! Неудержимы
                смех и остроумные шутки - ваш обязательный атрибут.
              </p>
              <p className="greetings__text">
                Главный подарок для нас - ваше хорошее настроение и желание
                разделить счастье нашего дня!
              </p>
            </Fade>
          </div>
          <div className="greetings__imagewrap">
            
              <div className="greetings__image">
                <img
                  className="greetings__jpg"
                  src="/banket.png"
                  alt="couple"
                />
              </div>
              <div className="greetings__image greetings__image-b">
                <img className="greetings__jpg" src="/shous.png" alt="couple" />
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};
