
function makeRequest(url) {
    return window.fetch(url)
        .then((response) => {
            return response.json();
        });
}
