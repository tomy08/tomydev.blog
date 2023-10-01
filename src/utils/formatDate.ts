export function formatDate(date: Date, lang?: string): string {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	return date.toLocaleDateString(lang || 'en-us', options)
}
