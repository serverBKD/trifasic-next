
export async function fetchEmail(data,URL) {
	try {
		const newleak = await fetch(URL, {
			method: 'POST',
			body: JSON.stringify(data),
		})
		console.log('created:', newleak)
		return newleak.json()
	} catch (error) {
		console.log(error.message)
	}
} 