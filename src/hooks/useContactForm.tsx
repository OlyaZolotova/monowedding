import { useState } from "react";
import React from "react";
import { postData } from "../services/sendDataForm";

const TOKEN = "6427393697:AAFM6wFXAv7O-5jLKH85LGkWSATFMZgNS_8"; // токен от BotFather
const CHAT_ID = "-1002144356202"; // chat_id для телеграм

export const useContactForm = () => {
  const uriRequest = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";
  const [formData, setFormData] = useState({
    user_name: "",
    selected_drinks: [] as string[],
    attending_wedding: "",
    transfer: "",
  });
  const [isSending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sendError, setSendError] = useState(false);

  const onSubmissingForm = function (e: any) {
    e.preventDefault();

    if (
      formData.user_name !== "" &&
      formData.selected_drinks.length > 0 &&
      formData.attending_wedding !== "" &&
      formData.transfer !== ""
    ) {
      setSending(true);

      postData(uriRequest, JSON.stringify(formData))
        .then((res) => {
          setSuccess(true);
          console.log(res);
          sendMsg(formData);
          setSendError(false); // Сбросить ошибку отправки
        })
        .catch((e) => {
          setError(true); // Ошибка заполнения всех полей
          setSendError(true); // Ошибка отправки формы
          console.error(e);
        })
        .finally(() => {
          setFormData({
            user_name: "",
            selected_drinks: [],
            attending_wedding: "",
            transfer: "",
          });
          setSending(false);

          setTimeout(() => {
            setSuccess(false);
            setError(false);
            setSendError(false);
          }, 5000);

          
        });
    } else {
      setError(true);
      console.error("Ошибка: не все поля формы заполнены");
    }
  };

  const onChangeName = (e: any) =>
    setFormData({ ...formData, user_name: e.target.value });
  const onChangeDrinks = (e: any) => {
    const { value, checked } = e.target;
    let updatedDrinks = [...formData.selected_drinks];

    if (checked && !updatedDrinks.includes(value)) {
      updatedDrinks.push(value);
    } else {
      updatedDrinks = updatedDrinks.filter((product) => product !== value);
    }

    setFormData({ ...formData, selected_drinks: updatedDrinks });
  };

  const onChangeAttendingStatus = (e: any) =>
    setFormData({ ...formData, attending_wedding: e.target.value });

  const onChangeTransferStatus = (e: any) =>
    setFormData({ ...formData, transfer: e.target.value });

  const sendMsg = (data: any) => {
    const body = {
      chat_id: CHAT_ID,
      parse_mode: "Markdown",
      text: `*Данные гостя:*\n${data.user_name}\n*Присутствие на свадьбе:*\n${
        data.attending_wedding
      }\n*Нужен ли трансфер:*\n${
        data.transfer
      }\n*Предпочитаемый алкоголь:*\n${data.selected_drinks.join(", ")}`,
    };

    fetch(uriRequest, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Сообщение успешно отправлено в телеграм");
          setSendError(false); // Сбросить ошибку отправки
        } else {
          setSendError(true); // Ошибка отправки формы
          console.error(
            "Ошибка отправки сообщения в телеграм:",
            response.statusText
          );
        }
      })
      .catch((error) => {
        console.error("Ошибка отправки сообщения в телеграм:", error);
      });
  };

  return {
    name: formData.user_name,
    selectedDrinks: formData.selected_drinks,
    attendingWedding: formData.attending_wedding,
    transferNeed: formData.transfer,
    onSubmissingForm,
    onChangeName,
    onChangeDrinks,
    onChangeAttendingStatus,
    onChangeTransferStatus,
    isSending,
    success,
    error,
    sendError,
  };
};


