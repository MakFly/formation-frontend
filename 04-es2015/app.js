let favoriteCityId = {
    ville: 'rome',
    ville1: 'paris'
}

console.log(favoriteCityId.ville)
console.log(favoriteCityId.ville1)

const cityId = ['paris', 'nyc', 'rome', 'rio-de-janeiro']
    /* citiesId = [] */
cityId.push('tokyo')
console.log(cityId)

/* Création d'objet */
function getWeather(cityId) {
    let city = cityId.toLocaleUpperCase();
    let temperature = 20;
    return { city: city, temperature: temperature }
}

const weather = getWeather(favoriteCityId.ville1);

const city = weather.city
const temperature = weather.temperature

console.log(city)
console.log(temperature)

/* Rest Operateur */

let [parisId, nycId, ...OthersCitiesId] = cityId

console.log(parisId)
console.log(nycId)
console.log(OthersCitiesId.length)

/* Classe */
class Trip {

    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() {
        return this._price
    }
    set price(price) {
        this._price = price
    }

    static getDefaultTrip(id, name, imageUrl) {
        return new Trip(id, name, imageUrl)
    }

    toString() {
        return `Trip[${ this.id }, ${this.name}, ${this.imageUrl}, ${this.price}]`
    }
}

let parisTrip = {
    id: Trip.id,
    name: Trip.name,
    imageUrl: Trip.imageUrl
}


parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg')
console.log(parisTrip)
console.log(parisTrip.name)



parisTrip.price = 100
console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

console.log(defaultTrip.toString())

/* Héritage */

class FreeTrip extends Trip {

    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl)
        this.price = 0
    }

    toString() {
        return 'Free' + super.toString();
    }

}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jgp')

console.log(freeTrip.toString())

/* Promise , Map, Set Arrow Function */
class TripService {
    constructor() {
        // TODO Set of 3 trips
        //
        this.tripSet = new Set();
        this.tripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.tripSet.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'))
        this.tripSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
            // new Trip('paris', 'Paris', 'img/paris.jpg')
            // new Trip('nantes', 'Nantes', 'img/nanges.jpg')
            // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }
    findByName(tripName) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.tripSet.forEach(
                    trip => {
                        if (tripName == trip.name) {
                            resolve(trip)
                        } else {
                            reject("No trip with name " + tripName)
                        }
                    }
                )
            }, 2000)
        })

    }
}

const tripService = new TripService()
tripService.findByName("Paris").then((trip) => {
    console.log(trip);
})

class PriceService {
    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        this.mapPrice = new Map([
            ['paris', 100],
            ['rio-de-janeiro', 800]
        ]);

    }
    findPriceByTripId(tripId) {
        // TODO return promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = this.mapPrice.get(tripId)
                if (result) {
                    resolve(result)
                } else {
                    reject("No price for trip " + tripId)
                }
            }, 2000)
        })
    }
}


const priceService = new PriceService()
priceService.findPriceByTripId("paris").then((result) => {

    console.log(result);
}).catch(function(error) {
    // gestion globale des erreurs
    console.log(error)
});