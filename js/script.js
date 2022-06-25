"use strict";
class smartphone {
    constructor(Saldo, NumeroChiamate) {
        this.listachiam = [];
        this.sec = 0;
        this.min = 0;
        this.durata = '';
        this._saldo = Saldo;
        this._NumeroChiamate = NumeroChiamate;
    }
    ricarica() {
        this._saldo = this._saldo + 5;
        console.log(this._saldo.toFixed(2));
    }
    chiamata() {
        this.sec++;
        if (this.sec >= 60) {
            this.sec = 0;
            this.min++;
            this._saldo = this._saldo - 0.20;
        }
        console.log(this._saldo.toFixed(2));
    }
    stacca() {
        if (this.sec > 0) {
            this._saldo = this._saldo - 0.20;
        }
        this.sec = 0;
        this.min = 0;
        console.log(this._saldo.toFixed(2));
        this._NumeroChiamate++;
        this.durata.concat(this.min.toString(), ";", this.sec.toString());
        console.log(this.durata);
        console.log(this._NumeroChiamate);
    }
    numero404() {
        console.log(this._saldo.toFixed(2));
        return this._saldo;
    }
    NumeroChiamate() {
        console.log(this._NumeroChiamate);
    }
    azzeraChiamate() {
        this.listachiam = [];
        this._NumeroChiamate = 0;
        console.log(this._NumeroChiamate);
    }
}
let FirstUser = new smartphone(1, 0);
let SecondUser = new smartphone(12, 0);
let thirdUser = new smartphone(13, 0);
let ric1 = document.querySelector('.ricarica1');
ric1 === null || ric1 === void 0 ? void 0 : ric1.addEventListener('click', function () {
    FirstUser.ricarica();
});
let ric2 = document.querySelector('.ricarica2');
ric2 === null || ric2 === void 0 ? void 0 : ric2.addEventListener('click', function () {
    SecondUser.ricarica();
});
let ric3 = document.querySelector('.ricarica3');
ric3 === null || ric3 === void 0 ? void 0 : ric3.addEventListener('click', function () {
    thirdUser.ricarica();
});
/* cronometro chiamata */
var timer = document.querySelector('.chiama1');
var timer_firstuser;
var timer2_firstuser;
var azzera1 = document.querySelector('.azzera1');
var saldo1 = document.querySelector('.saldo1');
timer === null || timer === void 0 ? void 0 : timer.addEventListener('click', function () {
    if (FirstUser._saldo < 0.20) {
        alert('hai finito il credito!!! ricarica');
    }
    else {
        timer_firstuser = setInterval(function () { FirstUser.chiamata(); }, 1000);
        timer2_firstuser = setInterval(prinTimer, 1000);
    }
});
let stacca = document.querySelector('.stacca1');
stacca === null || stacca === void 0 ? void 0 : stacca.addEventListener('click', function () {
    clearInterval(timer_firstuser);
    FirstUser.stacca();
});
function prinTimer() {
    let tim = document.querySelector('.timer1');
    tim.innerHTML = +(FirstUser.min > 9 ? FirstUser.min : '0' + FirstUser.min) + ':'
        + (FirstUser.sec > 9 ? FirstUser.sec : '0' + FirstUser.sec);
}
azzera1 === null || azzera1 === void 0 ? void 0 : azzera1.addEventListener('click', function () {
    FirstUser.azzeraChiamate();
});
saldo1 === null || saldo1 === void 0 ? void 0 : saldo1.addEventListener('click', function () {
    FirstUser.numero404();
    let saldoatt1 = document.querySelector('.saldoatt');
    if (saldoatt1 === null) {
        console.log('sbagliato a collegare il pulsante');
    }
    else {
        saldoatt1.innerHTML = FirstUser._saldo.toFixed(2);
    }
});
