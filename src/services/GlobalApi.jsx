async function GlobalApi(searchTerm) {

    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=2547fbbe`;
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result.Search;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export default GlobalApi;