import "./style.scss";
// import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";


export const Location = () => {
  // const coordinates = [55.755814, 37.617635]; // Пример координат (Москва, Кремль)

  // const mapState = {
  //   center: coordinates,
  //   zoom: 10,
  //   controls: [],
  // };

  // const mapStyle = {
  //   restrictMapArea: [
  //     [55.55, 37.42],
  //     [55.9, 37.85],
  //   ], // Ограничение показываемой области карты
  //   suppressObsoleteBrowserNotifier: true, // Подавление уведомлений о ненадежности браузера
  //   suppressMapOpenBlock: true, // Подавление предложения открывать карту
  // };

  return (
    <Fade triggerOnce={true} duration={2000}>
      <div className="location">
        <div className="location__banner">
          <div className="container">
            <h3 className="location__title wow animate__animated animate__zoomIn">
              Wedding location
            </h3>
            <div className="location__textwrap wow animate__animated animate__zoomIn">
              <p className="location__text location__text-top">
                Банкетный комплекс "Троицкий холл"
              </p>
              <p className="location__text location__text-bottom">
                г.Минск, ул. Старовиленская улица, 10
              </p>
            </div>
          </div>
        </div>
        <div className="location__mapwrap">
          <iframe
            className="location__map"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75209.83127589083!2d27.404038797265635!3d53.90851630000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfe12653d1f7%3A0x179a34244c2720f7!2z0KLRgNC-0LjRhtC60LjQuSDQpdC-0LvQuw!5e0!3m2!1sru!2sby!4v1707164925390!5m2!1sru!2sby&z=15"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Fade>
  );
};
