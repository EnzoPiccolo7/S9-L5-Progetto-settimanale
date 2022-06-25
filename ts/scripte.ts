abstract class Veicolo {
    private _marca: string;
    private _modello: string;
    private _targa: string;

    constructor(marca: string, modello: string, targa: string){
        this._marca = marca;
        this._modello = modello;
        this._targa = targa;
    }

    public get marca() : string {
        //controlli
        return this._marca;
    }

    public get modello() : string {
        //controlli
        return this._modello;
    }
     
    public get targa() : string {
        //controlli
        return this._targa
    }
    
    public set targa(targa : string) {
        //controlli
        this._targa = targa;
    }
}

class Automobile extends Veicolo {
    private _porte: number;
    constructor(marca: string, modello: string, targa: string, porte: number){
        super(marca,modello,targa);
        this._porte = porte;
    }
    public get porte() : number {
        return this._porte;
    } 
}

class Moto extends Veicolo { 
    private _bauletto: boolean;
    constructor(marca: string, modello: string, targa: string, bauletto: boolean){
        super(marca,modello,targa);
        this._bauletto = bauletto;
    }
    
    public get bauletto() : boolean {
        return this._bauletto;
    }
    
    public set bauletto(bauletto : boolean) {
        this._bauletto = bauletto;
    }
    
    
}

class Camper extends Veicolo {
    private _postiletto: number;
    constructor(marca: string, modello: string, targa: string, postiletto: number) {
        super(marca,modello,targa);
        this._postiletto = postiletto;
    }

    public get postiletto() : number {
        return this._postiletto;
    }
    
}

class Barca {
    private _marca: string;
    private _modello: string;
    private _targa: string;

    constructor(marca: string, modello: string, targa: string){
        this._marca = marca;
        this._modello = modello;
        this._targa = targa;
    }

    public get marca() : string {
        //controlli
        return this._marca;
    }

    public get modello() : string {
        //controlli
        return this._modello;
    }
     
    public get targa() : string {
        //controlli
        return this._targa
    }
    
    public set targa(targa : string) {
        //controlli
        this._targa = targa;
    }
}

let f500 = new Automobile('Fiat', '500', 'ABC123', 5);
let h600 = new Moto('Honda', 'Hornet', 'QWERT99', false);
let mob5 = new Camper('Mobilvetta', 'M5', '123ABC', 7);
let IT90 = new Barca('FIAT', 'IT90', '123456');

let salone: Veicolo[] = [];
salone.push(f500);
salone.push(h600);
salone.push(mob5);
salone.forEach(ele => {
    if(ele instanceof Automobile){
        let a = <Automobile> ele;
        console.log(a.marca, a.modello, a.targa, a.porte);
    } else {
        console.log(ele.marca, ele.modello, ele.targa);
    }
    
})