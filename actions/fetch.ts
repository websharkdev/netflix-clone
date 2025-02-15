"use server";

import axios from "axios";

export const getMovies = async () => {
    try {
        const result = await axios("http://localhost:3000/api/dashboard").then((res) => {
            return res.data
        })
        return result.data
    } catch (error) {
        const e = error as Error;

        console.log("Ooops!", e);
        return [];
    }
};
