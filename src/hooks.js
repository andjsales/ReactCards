import { useState } from "react";
import axios from "axios";

function useFlip(initialVal = true) {
    const [isFlipped, setIsFlipped] = useState(initialVal);
    const toggle = () => {
        setIsFlipped(oldFlip => !oldFlip);
    };
    return [isFlipped, toggle];
}

function useAxios(baseURL) {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (urlSuffix = "") => {
        const response = await axios.get(`${baseURL}${urlSuffix}`);
        setResponses(data => [...data, response.data]);
    };

    return [responses, addResponseData];
}

export { useFlip, useAxios };
