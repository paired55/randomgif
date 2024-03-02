import { displayGif } from './displaygif.js';

let userQuery; // Declare userQuery outside the event handler

const rerollBtn = document.querySelector('.rerollBtn');
displayGif('cat');

const searchForm = document.querySelector('.searchContainer');
searchForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchInput = searchForm.querySelector('input[type="text"]');
	userQuery = searchInput.value.trim();
	displayGif(userQuery || 'cat');
});

rerollBtn.addEventListener('click', () => {
	displayGif(userQuery || 'cat');
});
