
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./fetch";
import { IMovie } from "@/types/general";


export const useMovies = () => {
    const { status, data = [], error } = useQuery({
        queryKey: ["dashboard/main--get-all-movies"],
        queryFn: () => getMovies(),
        refetchOnWindowFocus: false,
    });

    return {
        status, data: data as IMovie[], error
    }
} 