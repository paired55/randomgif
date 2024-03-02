export function displayGif(query) {
	const img = document.querySelector('img');
	fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=S7hJczICelpwuIOjxYGVt8acpFAsFsLp&s=${query}`,
		{ mode: 'cors' }
	)
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			img.src = response.data.images.original.url;
		});
}
