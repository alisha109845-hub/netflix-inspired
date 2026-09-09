# Netflix Clone

A Netflix-inspired streaming interface built with React and Vite. The app uses the TMDB API to display movies and TV shows, with a responsive browsing experience for discovering, searching, and saving content.

> This is an independent educational project and is not affiliated with or endorsed by Netflix.

## Features

- Landing page with a demo login flow
- Protected browse experience
- Trending movies and TV shows from TMDB
- Rows for trending, top-rated, action, and comedy titles
- Genre-based movie discovery
- Search movies by title
- Movie details modal with overview, rating, release year, and trailer playback
- Add and remove titles from a persistent **My List**
- Local storage persistence for login state and saved titles
- Responsive dark streaming interface

## Tech Stack

- React 19
- Vite
- React Router
- TMDB API
- Tailwind CSS utility classes
- Oxlint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- A TMDB API Read Access Token

### Installation

```bash
git clone <repository-url>
cd netflix-clone
npm install
```

### Environment setup

Create a `.env` file in the project root:

```env
VITE_TMDB_TOKEN=your_tmdb_read_access_token
```

Create a TMDB account and generate an API Read Access Token from the [TMDB API settings](https://www.themoviedb.org/settings/api). Do not commit your `.env` file or expose your token in public repositories.

### Run the app

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |


## Project Structure

```text
src/
├── assets/              Static application assets
├── components/          Reusable UI components
├── hooks/               Authentication and My List state hooks
├── pages/               Landing and browse pages
├── services/            TMDB API helpers
├── App.jsx              Routes and authentication guard
├── App.css              Application styles
└── index.css            Global styles
```

## Data and Persistence

Movie, TV, genre, and trailer data is fetched from TMDB. The demo login flow and My List are client-side only; both are stored in the browser's `localStorage` and do not represent real user authentication or server-side accounts.

## License

This project is intended for learning and portfolio use. TMDB data and images are provided under the terms of the [TMDB API terms of use](https://developer.themovied.org/docs/faq).

## Deploying to Netlify

https://netfliixinsp.netlify.app/




