export const TMDB_CONFIG = {
    BASE_URL: `https://api.cricapi.com`,
    API_KEY: "b1c14449-d813-42aa-87d2-1efcd5ebb317"
    // API_KEY: process.env.EXPO_CRICKET_DATA_API_KEY
    // headers: {
    //     accept: "application/json",
    //     Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    // },
};

// export const fetchCricketData = async ({ query, }: {
//     query: string;
// }): Promise<Movie[]> => {
//     const endpoint = `${TMDB_CONFIG.BASE_URL}/v1/matches?apikey=${TMDB_CONFIG.API_KEY}&offset=0`

//     const response = await fetch(endpoint, {
//         method: "GET",
//         // headers: TMDB_CONFIG.headers,
//     });

//     if (!response.ok) {
//         throw new Error(`Failed to fetch data: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data.results;
// };

export const fetchCricketData = async () => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/v1/matches?apikey=${TMDB_CONFIG.API_KEY}&offset=0`); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        return json.data
    } catch (e) {
        throw new Error(`Failed to fetch data`);
    }
};

export const fetchSeriesData = async () => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/v1/series?apikey=${TMDB_CONFIG.API_KEY}&offset=0`); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        return json.data
    } catch (e) {
        throw new Error(`Failed to fetch data`);
    }
};