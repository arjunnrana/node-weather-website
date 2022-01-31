const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(address) + '.json?access_token=pk.eyJ1IjoiYXJqdW5ucmFuYSIsImEiOiJja3l0cnJzNjIwaGV2MnFvOHFpMjcyc213In0.a2P5-Q0jh90XeaT_gXbcQw'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services.', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode