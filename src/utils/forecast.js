const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4d52670b402ddd8fa0805b5ebafe595e&query= ' + latitude + ',' + longitude+ '&units=f'

    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '! It is currently '+ Math.round((body.current.temperature - 32) * 5/9)+ '°C out. It feels like ' + Math.round((body.current.feelslike- 32) * 5/9)+ '°C out.')
        }
    } )
}

module.exports = forecast