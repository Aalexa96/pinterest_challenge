function fetcher(params = {}) {
    params.api_key = 'live_rVopPY81vCNVv7NcfMKD132e6J6XTBUTILhYt5d4UUL0TToEnueAFYrlltpZdXiA';
    const searchParams = new URLSearchParams(params);

    return fetch('https://api.thecatapi.com/v1/images/search?' + searchParams.toString())
        .then((response) => response.json())
        .catch(() => console.error('Request Failed'));
}

function getRandomImage() {
    return fetcher();
}

function getRandomImages() {
    return fetcher({
        limit: 100,
        _breed_id: 'ragd'
    });
}

export { getRandomImage, getRandomImages };