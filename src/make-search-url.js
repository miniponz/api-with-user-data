
const SEARCH_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default function makeSearchUrl(queryOptions) {
    const url = new URL(SEARCH_URL);
    url.searchParams.set('q', queryOptions.q);
    url.searchParams.set('APPID', queryOptions.APPID);
    url.searchParams.set('units', queryOptions.units);

    return url.toString();
}