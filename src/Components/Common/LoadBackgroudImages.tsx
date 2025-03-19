export const LoadBackgroundImages = () => {
	const backgroundImages = document.querySelectorAll<HTMLElement>('[data-background]');

	if (backgroundImages.length > 0) {
		backgroundImages.forEach(element => {
			const image = element.dataset.background;
			if (image) {
				element.style.backgroundImage = `url('${image}')`;
			}
		});
	}
}
