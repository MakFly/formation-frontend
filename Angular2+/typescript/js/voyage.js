"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.setNom = function (nom) {
        this._nom = nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    Object.defineProperty(Sejour.prototype, "prix", {
        set: function (prix) {
            this._prix = prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [new Sejour('tokyo', 100), new Sejour('NYC', 500)];
    }
    SejourService.prototype.rechercherNom = function (nom) {
        return this._sejours.filter(function (s) { return s.getNom() == nom; });
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.rechercherNom('tokyo'));
