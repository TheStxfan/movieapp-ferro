import { api_token } from './config.js';

// Home Page
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

export const getTrendingShows = async () => {
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

// Movies Page
export const getPopularMovies = async () => {
    try {
        const result = await fetch('https://api.themoviedb.org/3/movie/popular',
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

// Series Page
export const getPopularShows = async () => {
    try {
        const result = await fetch('https://api.themoviedb.org/3/tv/popular',
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