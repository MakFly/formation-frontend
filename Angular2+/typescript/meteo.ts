console.log("Meteo App")

class Meteo {

    constructor(private _ville:string, private _temperature:number){
    }

    // A AJOUTER
    toString():string {
       return `${this._ville} - ${this._temperature}°C`
    }
}
let nantesCeMatin = new Meteo('Nantes', 12);

// A AJOUTER
console.log(nantesCeMatin.toString())
