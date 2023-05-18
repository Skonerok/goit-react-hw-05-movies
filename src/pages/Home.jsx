import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../service/API";
import { Header } from '../components/Header/Header';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getFetchMovies() {
            try {
                const data = await fetchTrendingMovies();
                // const { results } = data;
                // setMovies(results);
                setMovies(data);
            } catch (error) {
                console.log(error);
            }
        }
        getFetchMovies();
    }, []);


    return (
        <>
            <Header />
            <h1>Popular this week</h1>
            {/* {movies && } */}

            </>
);
};