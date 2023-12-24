export async function fecthData(_DATA,URL) {
	try {
		const data = await fetch(URL, {
			method: 'POST',
			headers:{'content-type': 'application/json; charset=UTF-8'},
			body: JSON.stringify(_DATA),
		})
		return data
	} catch (error) {
		console.log(error.message)
	}
} 