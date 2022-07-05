import { DateTime as dt } from 'luxon'

const convertDateTime = (data, [...keysToReplace]) => {
	try {
		// keys.forEach( key => {
		//     data[ key ] = data[ key ].toString()
		// } )

		const seeker = obj => {
			Object.keys(obj).forEach(key => {
				if (keysToReplace.includes(key)) {
					if (obj[key]) {
						// obj[ key ] = obj[ key ].toString()
						obj[key] = dt.fromJSDate(obj[key]).toUTC().toISO()
					}
				}
				if (typeof obj[key] === 'object' && obj[key] !== null) {
					seeker(obj[key])
				}
			})
		}
		seeker(data)
	} catch (err) {
		throw new Error(err)
	}
	// console.log( data )
	return data
}

export { convertDateTime }
