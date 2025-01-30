const heartCreate = () => {
	const heart = document.createElement('div');
	heart.classList.add('heart');
	heart.innerText = '❤️';
	heart.style.zIndex = -1;
	heart.style.opacity = Math.random(0.01, 0.2);
	heart.style.left = Math.random() * 100 + 'vw';
	heart.style.fontSize = Math.random() * 50 + 10 + 'px';
	document.body.appendChild(heart);
}
setInterval(heartCreate, 400);