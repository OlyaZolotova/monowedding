
import "./style.scss";
import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import { Fade, Zoom } from "react-awesome-reveal";

const Timer = () => {
  return (
    <div className="timer">
      <div className="container">
        <Fade triggerOnce={true} duration={1000}>
          <h4 className="timer__title">
            Будем рады видеть Вас на нашем празднике через:
          </h4>
        </Fade>
        <Fade triggerOnce={true} duration={2000}>
          <div className="timer__wrapper">
            <FlipCountdown
              monthTitle="Месяцев"
              dayTitle="Дней"
              hourTitle="Часов"
              minuteTitle="Минут"
              secondTitle="Секунд"
              endAt={"2024-07-07 14:30:00"}
              hideYear
              titlePosition="bottom"
              endAtZero
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Timer;
