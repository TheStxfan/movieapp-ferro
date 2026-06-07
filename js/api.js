import { api_token } from './config.js';

const requestBaseUrl = "https://api.themoviedb.org/3"
export const posterBaseUrl = "https://image.tmdb.org/t/p/w500"

// Home Page
export const getTrendingMovies = async () => {
    try {
        const result = await fetch(`${requestBaseUrl}/trending/movie/day`,
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
        const result = await fetch(`${requestBaseUrl}/trending/tv/day`,
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
        const result = await fetch(`${requestBaseUrl}/movie/popular`,
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
        const result = await fetch(`${requestBaseUrl}/tv/popular`,
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