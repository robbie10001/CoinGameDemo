/*
this function will detect if two element in the DOM, are overlapping. 
We can use this to figure out when our avatar and coin are touching, 
and we can use that to move the coin. 
this function was not explained and was just imported into the code.
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
//these variables allow us to interact with both the image of the person and our bitcoin.
const avatar = document.querySelector('#player')
const coin = document.querySelector('#coin')
let counter = 0
//we create an event listener that picks up when we let go of a given button. 
window.addEventListener('keyup', function(e) {
	if(e.key === 'ArrowDown' || e.key === 'Down') {
	const currentTop = extractPosition(avatar.style.top)
	avatar.style.top = `${currentTop + 100}px`;
	} 
	else if (e.key === 'ArrowUp' || e.key === 'Up') {
	const currentBottom = extractPosition(avatar.style.top)
	avatar.style.top = `${currentBottom - 100}px`;
	} 
	else if (e.key === 'ArrowRight' || e.key === 'Right') {
	const currentLeft = extractPosition(avatar.style.left)
	avatar.style.left = `${currentLeft + 100}px`;
	//the bottom line makes the image turn 180 degrees.
	avatar.style.transform = 'scale(1,1)';
	} 
	else if (e.key === 'ArrowLeft' || e.key === 'Left') {
	const currentRight = extractPosition(avatar.style.left)
	avatar.style.left = `${currentRight - 100}px`;
	//the bottom line make the image turn 180 degrees.
	avatar.style.transform = 'scale(-1,1)';
	}
	//we use the function on line 7,if it is true, we call our function on like 61, 
	//this moves the coin to a new location within the window. 
	//we also do some maths to figure out how many times a user has collected a coin and its value in bitcoin. 
	if(isTouching(avatar, coin)) {
	moveCoin();
	counter += 1 
	console.log(counter)
	let earnings = counter * 10769.95
	let answer = Math.round(earnings)
	document.getElementById('output').innerHTML = "WOW! G-MONEY HAS MADE: $" + answer + " DOLLARS";

	} 
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