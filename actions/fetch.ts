"use server";

import axios from "axios";

export const getMovies = async () => {
    try {
        const result = await axios((process.env.BETTER_AUTH_URL as string) + "/api/dashboard").then((res) => {
            return res.data
        })
        return result.data
    } catch (error) {
        const e = error as Error;

        console.log("Ooops!", e);
        return [];
    }
};
