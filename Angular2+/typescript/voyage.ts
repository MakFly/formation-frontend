class Sejour{

    constructor(private _nom:string , private _prix:number){ }

    getNom():string{
        return this._nom;
    }
    setNom(nom:string){
        this._nom = nom;
    }

    getPrix():number{
        return this._prix;
    }

    set prix(prix:number){
        this._prix = prix;
    }
}

class SejourService
{
    private _sejours:Sejour[]

    constructor(){
        this._sejours=[new Sejour('tokyo', 100), new Sejour('NYC',500)]
    }
    
    public rechercherNom(nom:string):Sejour[]{
        
        return this._sejours.filter(s => s.getNom() == nom)
    }

}

let sejourService = new SejourService()
console.log(sejourService.rechercherNom('tokyo'))

