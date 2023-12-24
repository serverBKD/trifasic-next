export async function fecthData(_DATA,URL,METHOD) {
	try {
		console.log(_DATA)
		console.log(URL)
		console.log(METHOD)
		console.log(JSON.stringify(_DATA))
		
		// const data = await fetch(URL, {
		// 	method: `${METHOD}`,
		// 	body: JSON.stringify(_DATA),
		// })
		return _DATA.json()
	} catch (error) {
		console.log(error.message)
	}
} 