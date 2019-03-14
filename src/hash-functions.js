const API_KEY = '02fd61fe81d6deddb87cd6c131a9148d';

export function writeSearchToQuery(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('APPID', API_KEY);
    searchParams.set('units', 'metric');

    return searchParams.toString();
}

export function readQueryOptions(query) {
    const searchParams = new URLSearchParams(query);
    const existingQuery = {
        q: searchParams.get('q'),
        units: searchParams.get('units')
    };
    return existingQuery;
}