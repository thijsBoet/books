export const generateRandomId = () => Math.random().toString(36).substr(2, 9);

export const capitalize = str =>
	str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
