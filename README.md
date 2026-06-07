# Movie App

Progetto d'esame per il corso di Front End I di Fullstack Dev on Cloud.  
Web app multi-pagina in stile Netflix che mostra film e serie TV tramite le API di TMDB.

**Autore:** Stefan Ferro

---

## Come aprire in locale

1. Clona o scarica il repository
2. Apri la cartella con VS Code
3. Avvia Live Server sul file `index.html`

In alternativa, da terminale:

```
npx serve .
```

---

## Configurazione API key

1. Crea un account su [themoviedb.org](https://www.themoviedb.org/) e ottieni un token API (Bearer token)
2. Crea il file `js/config.js` con questo contenuto:

```js
export const api_token = "IL_TUO_TOKEN_QUI"
```

Il file `config.js` è escluso dal repository tramite `.gitignore`.

---

## Endpoint TMDB usati

| Pagina | Endpoint |
|--------|----------|
| Home — film trending | `GET /trending/movie/day` |
| Home — serie trending | `GET /trending/tv/day` |
| Film | `GET /movie/popular` |
| Serie | `GET /tv/popular` |
| Dettaglio film | `GET /movie/{id}` |
| Dettaglio serie | `GET /tv/{id}` |

---

## Struttura file

```
progetto/
├── index.html
├── movies.html
├── series.html
├── profile.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    ├── movies.js
    ├── series.js
    ├── api.js
    ├── utils.js
    └── config.js       <- da creare, non incluso nel repo
```