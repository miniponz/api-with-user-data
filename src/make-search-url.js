
const SEARCH_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '02fd61fe81d6deddb87cd6c131a9148d';

function makeDefaultQueryParams(url) {
    url.searchParams.set('APPID', API_KEY);
}

export default function makeSearchUrl(queryOptions) {
    const url = new URL(SEARCH_URL);
    makeDefaultQueryParams(url);
    url.searchParams.set('q', queryOptions.q);
    url.searchParams.set('units', queryOptions.units);

    return url.toString();
}