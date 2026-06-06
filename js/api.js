import { api_token } from './config.js';

export const getTrendingMovies = async () => {
    try {
        const result = await fetch('https://api.themoviedb.org/3/trending/movie/day',
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${api_token}`
                }
            });

        return await result.json();

    } catch (error) {
        console.error("Errore chiamata API:", error.message)
        return null;
    }
}

export const getTrendingTvShows = async () => {
    try {
        const result = await fetch('https://api.themoviedb.org/3/trending/tv/day',
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${api_token}`
                }
            });

        return await result.json();

    } catch (error) {
        console.error("Errore chiamata API:", error.message)
        return null;
    }
}