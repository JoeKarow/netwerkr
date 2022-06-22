const convertDateTime = ( data, [ ...keys ] ) => {
    const convertedData = keys.forEach( key => {
        data[ key ] = data[ key ].toString()
    } )

    return data
}

export { convertDateTime }