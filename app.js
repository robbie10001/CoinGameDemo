/*
this function will detect if two element in the DOM, are overlapping. 
We can use this to figure out when our avatar and coin are touching, 
and we can use that to move the coin. 
*/

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player')
const coin = document.querySelector('#coin')
//we create an event listener that picks up when we let go of a given button. 
window.addEventListener('keyup', function(e) {
	if(e.key === 'ArrowDown' || e.key === 'Down') {
	const currentTop = extractPosition(avatar.style.top)
	avatar.style.top = `${currentTop + 50}px`;
	} 
	else if (e.key === 'ArrowUp' || e.key === 'Up') {
	const currentBottom = extractPosition(avatar.style.top)
	avatar.style.top = `${currentBottom - 50}px`;
	} 
	else if (e.key === 'ArrowRight' || e.key === 'Right') {
	const currentLeft = extractPosition(avatar.style.left)
	avatar.style.left = `${currentLeft + 50}px`;
	avatar.style.transform = 'scale(1,1)';
	} 
	else if (e.key === 'ArrowLeft' || e.key === 'Left') {
	const currentRight = extractPosition(avatar.style.left)
	avatar.style.left = `${currentRight - 50}px`;
	avatar.style.transform = 'scale(-1,1)';
	}
	if(isTouching(avatar, coin)) moveCoin();
});
const extractPosition = (pos) => {
	if (!pos) return 100; 
	return parseInt(pos.slice(0,-2))

};

const moveCoin = () => { 
	const x = Math.floor(Math.random() * window.innerWidth)
	const y = Math.floor(Math.random() * window.innerHeight)
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
}

moveCoin()