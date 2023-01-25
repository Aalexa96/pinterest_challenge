function fetcher(params = {}) {
    params.api_key = 'live_rVopPY81vCNVv7NcfMKD132e6J6XTBUTILhYt5d4UUL0TToEnueAFYrlltpZdXiA';
    const searchParams = new URLSearchParams(params);

    return fetch('https://api.thecatapi.com/v1/images/search?' + searchParams.toString())
        .then((response) => response.json())
        .catch(() => console.error('Request Failed'));
}

function getCat() {
    return fetcher();
}

function getAllCats() {
    return fetcher({
        limit: 100
    });
}

function getCatsByBreed (breed) {
    return fetcher ({
        limit: 100,
        breed_ids: breed
    })
}

export { getCat, getAllCats, getCatsByBreed };