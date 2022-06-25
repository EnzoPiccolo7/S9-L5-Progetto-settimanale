"use strict";
class Veicolo {
    constructor(marca, modello, targa) {
        this._marca = marca;
        this._modello = modello;
        this._targa = targa;
    }
    get marca() {
        //controlli
        return this._marca;
    }
    get modello() {
        //controlli
        return this._modello;
    }
    get targa() {
        //controlli
        return this._targa;
    }
    set targa(targa) {
        //controlli
        this._targa = targa;
    }
}
class Automobile extends Veicolo {
    constructor(marca, modello, targa, porte) {
        super(marca, modello, targa);
        this._porte = porte;
    }
    get porte() {
        return this._porte;
    }
}
class Moto extends Veicolo {
    constructor(marca, modello, targa, bauletto) {
        super(marca, modello, targa);
        this._bauletto = bauletto;
    }
    get bauletto() {
        return this._bauletto;
    }
    set bauletto(bauletto) {
        this._bauletto = bauletto;
    }
}
class Camper extends Veicolo {
    constructor(marca, modello, targa, postiletto) {
        super(marca, modello, targa);
        this._postiletto = postiletto;
    }
    get postiletto() {
        return this._postiletto;
    }
}
class Barca {
    constructor(marca, modello, targa) {
        this._marca = marca;
        this._modello = modello;
        this._targa = targa;
    }
    get marca() {
        //controlli
        return this._marca;
    }
    get modello() {
        //controlli
        return this._modello;
    }
    get targa() {
        //controlli
        return this._targa;
    }
    set targa(targa) {
        //controlli
        this._targa = targa;
    }
}
let f500 = new Automobile('Fiat', '500', 'ABC123', 5);
let h600 = new Moto('Honda', 'Hornet', 'QWERT99', false);
let mob5 = new Camper('Mobilvetta', 'M5', '123ABC', 7);
let IT90 = new Barca('FIAT', 'IT90', '123456');
let salone = [];
salone.push(f500);
salone.push(h600);
salone.push(mob5);
salone.forEach(ele => {
    if (ele instanceof Automobile) {
        let a = ele;
        console.log(a.marca, a.modello, a.targa, a.porte);
    }
    else {
        console.log(ele.marca, ele.modello, ele.targa);
    }
});
