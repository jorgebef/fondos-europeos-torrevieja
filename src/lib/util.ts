import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]) {
	return clsx(input);
}

export function shuffleArray<T>(array: Array<T>) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export const generateAltLanguages = (
	domain: string,
	locales: string[] | readonly string[],
	pathname: string | false,
) => {
	const altLanguages = Object.fromEntries(
		locales.map((loc) => [
			loc,
			pathname ? `${domain}/${loc}/${pathname}` : `${domain}/${loc}`,
		]),
	);

	return altLanguages;
};
