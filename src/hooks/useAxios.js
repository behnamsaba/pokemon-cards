import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (baseURL = "") => {
    const [card, setCards] = useState([]);
    const addCard = async (urlParmas = "") => {
        const response = await axios.get(`${baseURL}${urlParmas}`)
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
      };

    return [card,addCard];





}

export default useAxios