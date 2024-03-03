import "./style.scss";
import { useContactForm } from "../../hooks/useContactForm";
import { Zoom } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal";

export const Form = () => {
  const {
    name,
    selectedDrinks,
    attendingWedding,
    isSending,
    success,
    error,
    sendError,
    transferNeed,
    onSubmissingForm,
    onChangeName,
    onChangeDrinks,
    onChangeAttendingStatus,
    onChangeTransferStatus,
  } = useContactForm();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Логика открытия модального окна при ошибке и при успешной отправке
  useEffect(() => {
    if (sendError) {
      setShowErrorModal(true);
    } else if (success) {
      setShowSuccessModal(true);
    }
  }, [sendError, success]);

  // Обработчики закрытия модального окна
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="form">
      <div className="container">
        <Zoom triggerOnce={true} duration={2000}>
          <div className="form__wrapper">
            <h3 className="form__title ">Form</h3>
            <div className="form__textwrap">
              <p className="form__text">Просьба заполнить анкету до 1 июля</p>
            </div>
            <form
              className="form__wrap"
              id="telegramForm"
              onSubmit={onSubmissingForm}
            >
              <div className="form__name">
                <p className="form__text form__text-subtitle">
                  Ваше Имя и Фамилия:
                </p>

                <input
                  className="form__input"
                  type="text"
                  value={name}
                  onChange={onChangeName}
                  name="user_name"
                  id="user-name-input"
                  placeholder="Введите свое Имя и Фамилию"
                  autoComplete="off"
                />
                <p className="form__text form__text-mini">
                  Если вы будете в компании своего спутника/спутницы, просим
                  дополнительно внести его/ее данные в графу.
                </p>
              </div>

              <div className="form__yes">
                <p className="form__text form__text-subtitle">
                  Планируете ли Вы присутствовать на свадьбе?
                </p>
                <div className="checkboxes__row">
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="yes">
                      <input
                        type="radio"
                        value="Да"
                        id="yes"
                        checked={attendingWedding === "Да"}
                        onChange={onChangeAttendingStatus}
                        name="attending"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Да, буду на свадьбе</p>
                    </label>
                  </div>
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="no">
                      <input
                        type="radio"
                        value="Нет"
                        id="no"
                        checked={attendingWedding === "Нет"}
                        onChange={onChangeAttendingStatus}
                        name="attending"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">
                        Нет, не смогу быть на свадьбе
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form__yes">
                <p className="form__text form__text-subtitle">
                  Необходим ли Вам трансфер?
                </p>
                <div className="checkboxes__row">
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="transferYes">
                      <input
                        type="radio"
                        value="Да"
                        id="transferYes"
                        checked={transferNeed === "Да"}
                        onChange={onChangeTransferStatus}
                        name="transfer"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Да</p>
                    </label>
                  </div>
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="transferNo">
                      <input
                        type="radio"
                        value="Нет"
                        id="transferNo"
                        checked={transferNeed === "Нет"}
                        onChange={onChangeTransferStatus}
                        name="transfer"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Нет</p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form__yes form__yes-bottom">
                <p className="form__text form__text-subtitle">
                  Какой алкоголь предпочитаете?
                </p>
                <div className="checkboxes__row">
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="alcChoice1">
                      <input
                        type="checkbox"
                        checked={selectedDrinks.includes("Вино")}
                        onChange={onChangeDrinks}
                        id="alcChoice1"
                        name="alcohol"
                        value="Вино"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Вино</p>
                    </label>
                  </div>
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="alcChoice2">
                      <input
                        type="checkbox"
                        checked={selectedDrinks.includes("Шампанское")}
                        onChange={onChangeDrinks}
                        id="alcChoice2"
                        name="alcohol"
                        value="Шампанское"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Шампанское</p>
                    </label>
                  </div>
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="alcChoice3">
                      <input
                        type="checkbox"
                        checked={selectedDrinks.includes("Виски")}
                        onChange={onChangeDrinks}
                        id="alcChoice3"
                        name="alcohol"
                        value="Виски"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Виски</p>
                    </label>
                  </div>
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="alcChoice4">
                      <input
                        type="checkbox"
                        checked={selectedDrinks.includes("Коньяк")}
                        onChange={onChangeDrinks}
                        id="alcChoice4"
                        name="alcohol"
                        value="Коньяк"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Коньяк</p>
                    </label>
                  </div>
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="alcChoice5">
                      <input
                        type="checkbox"
                        checked={selectedDrinks.includes("Водка")}
                        onChange={onChangeDrinks}
                        id="alcChoice5"
                        name="alcohol"
                        value="Водка"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Водка</p>
                    </label>
                  </div>
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="alcChoice6">
                      <input
                        type="checkbox"
                        checked={selectedDrinks.includes("Не пью")}
                        onChange={onChangeDrinks}
                        id="alcChoice6"
                        name="alcohol"
                        value="Не пью"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Не пью</p>
                    </label>
                  </div>
                </div>
                {error && (
                  <div className="form__error">
                    <p className="error__text">Заполните все поля анкеты!</p>
                  </div>
                )}
              </div>
              <div className="form__wrapbtn">
                <button className="form__btn" type="submit">
                  Отправить
                </button>
                {isSending && <div className="loader"></div>}
              </div>
            </form>
          </div>
        </Zoom>
      </div>
      {showErrorModal && (
        <Modal
          isVisible={true}
          title="Произошла ошибка при отправке анкеты"
          onClose={handleCloseErrorModal}
        />
      )}

      {showSuccessModal && (
        <Modal
          isVisible={true}
          title="Анкета успешно отправлена"
          onClose={handleCloseSuccessModal}
        />
      )}
    </div>
  );
};
