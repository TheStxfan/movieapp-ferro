import { api_token } from './config.js';

export const getPopularMovie = async () => {
    try {
        const result = await fetch('https://api.themoviedb.org/3/movie/popular',
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${api_token}`
            }
        });

        const data = await result.json();

        return data
        
    } catch (error) {
        console.error("Errore chiamata API:", error.message)
        return null;
    }
}

// const risultato = await getPopularMovie()

// console.log(risultato)


export const getMoreFromMovie = async () => {
    try {
        const result = await fetch('https://api.themoviedb.org/3/movie/popular',
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${api_token}`
            }
        });

        const status = result.status
        const body = result.body

        return {status, body}
    
    } catch (error) {
        console.error("Errore chiamata API:", error.message)
        return null;
    }
}

console.log(await getMoreFromMovie());