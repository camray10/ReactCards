import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  return [isFacingUp, flipCard];
};

const useAxios = (baseUrl) => {
  const [cards, setCards] = useState([]);
  const addCard = async (url = "") => {
    if (typeof url !== "string") url = "";

    const response = await axios.get(`${baseUrl}${url}`);

    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
};

export { useFlip, useAxios };