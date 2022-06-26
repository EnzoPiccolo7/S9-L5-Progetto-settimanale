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
    stacca2() {
        this.sec = 0;
        this.min = 0;
    }
    stacca() {
        if (this.sec > 0) {
            this._saldo = this._saldo - 0.20;
        }
        this.durata = this.min.toString() + ':' + this.sec.toString();
        console.log(this.durata);
        this.listachiam.push(this.durata);
        console.log(this.listachiam);
        this.sec = 0;
        this.min = 0;
        console.log(this._saldo.toFixed(2));
        this._NumeroChiamate++;
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
let FirstUser = new smartphone(0.20, 0);
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
/* USER 1 */
/* cronometro chiamata */
var timer = document.querySelector('.chiama1');
var timer_firstuser;
var timer2_firstuser;
var timer3_firstuser;
var azzera1 = document.querySelector('.azzera1');
var saldo1 = document.querySelector('.saldo1');
timer === null || timer === void 0 ? void 0 : timer.addEventListener('click', function () {
    if (FirstUser._saldo === 0.00) {
        alert('hai finito il credito!!! ricarica');
    }
    else {
        timer_firstuser = setInterval(function () {
            if (FirstUser._saldo === 0.00) {
                alert('hai finito il credito!!! ricarica');
                FirstUser.stacca2();
                clearInterval(timer_firstuser);
            }
            else {
                FirstUser.chiamata();
            }
        }, 100);
        timer2_firstuser = setInterval(prinTimer, 100);
    }
});
/* STACCA CHIAMATA */
let stacca = document.querySelector('.stacca1');
stacca === null || stacca === void 0 ? void 0 : stacca.addEventListener('click', function () {
    clearInterval(timer_firstuser);
    clearInterval(timer2_firstuser);
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
let lista1 = document.querySelector('.lista1');
lista1 === null || lista1 === void 0 ? void 0 : lista1.addEventListener('click', function () {
    FirstUser.NumeroChiamate();
    let lista1stampa = document.querySelector('.listachiam1');
    if (lista1stampa === null) {
        console.log('sbagliato a collegare il pulsante');
    }
    else {
        lista1stampa.innerHTML = FirstUser._NumeroChiamate.toString() + ' chiamata';
        FirstUser.listachiam.forEach((ele) => {
            let i = '</ br> durata: minuti ' + ele + 'secondi';
            console.log(i);
            lista1stampa.innerHTML = lista1stampa.innerHTML + i;
        });
    }
});
/* USER 2 */
var timer2 = document.querySelector('.chiama2');
var timer_firstuser2;
var timer2_firstuser2;
var timer3_firstuser2;
var azzera2 = document.querySelector('.azzera2');
var saldo2 = document.querySelector('.saldo2');
timer2 === null || timer2 === void 0 ? void 0 : timer2.addEventListener('click', function () {
    if (SecondUser._saldo === 0.00) {
        alert('hai finito il credito!!! ricarica');
    }
    else {
        timer_firstuser2 = setInterval(function () {
            if (SecondUser._saldo === 0.00) {
                alert('hai finito il credito!!! ricarica');
                SecondUser.stacca2();
                clearInterval(timer_firstuser2);
            }
            else {
                SecondUser.chiamata();
            }
        }, 100);
        timer2_firstuser = setInterval(prinTimer2, 100);
    }
});
/* STACCA CHIAMATA */
let stacca2 = document.querySelector('.stacca2');
stacca2 === null || stacca2 === void 0 ? void 0 : stacca2.addEventListener('click', function () {
    clearInterval(timer_firstuser2);
    clearInterval(timer2_firstuser2);
    SecondUser.stacca();
});
function prinTimer2() {
    let tim2 = document.querySelector('.timer2');
    tim2.innerHTML = +(SecondUser.min > 9 ? SecondUser.min : '0' + SecondUser.min) + ':'
        + (SecondUser.sec > 9 ? SecondUser.sec : '0' + SecondUser.sec);
}
azzera2 === null || azzera2 === void 0 ? void 0 : azzera2.addEventListener('click', function () {
    SecondUser.azzeraChiamate();
});
saldo2 === null || saldo2 === void 0 ? void 0 : saldo2.addEventListener('click', function () {
    SecondUser.numero404();
    let saldoatt2 = document.querySelector('.saldoatt2');
    if (saldoatt2 === null) {
        console.log('sbagliato a collegare il pulsante');
    }
    else {
        saldoatt2.innerHTML = SecondUser._saldo.toFixed(2);
    }
});
let lista2 = document.querySelector('.lista2');
lista2 === null || lista2 === void 0 ? void 0 : lista2.addEventListener('click', function () {
    SecondUser.NumeroChiamate();
    let lista1stampa2 = document.querySelector('.listachiam2');
    if (lista1stampa2 === null) {
        console.log('sbagliato a collegare il pulsante');
    }
    else {
        lista1stampa2.innerHTML = SecondUser._NumeroChiamate.toString() + ' chiamata';
        FirstUser.listachiam.forEach((ele) => {
            let i2 = '</ br> durata: minuti ' + ele + 'secondi';
            console.log(i2);
            lista1stampa2.innerHTML = lista1stampa2.innerHTML + i2;
        });
    }
});
/* USER 3 */
var timer3 = document.querySelector('.chiama3');
var timer_firstuser3;
var timer2_firstuser3;
var timer3_firstuser3;
var azzera3 = document.querySelector('.azzera3');
var saldo3 = document.querySelector('.saldo3');
timer3 === null || timer3 === void 0 ? void 0 : timer3.addEventListener('click', function () {
    if (thirdUser._saldo === 0.00) {
        alert('hai finito il credito!!! ricarica');
    }
    else {
        timer_firstuser3 = setInterval(function () {
            if (thirdUser._saldo === 0.00) {
                alert('hai finito il credito!!! ricarica');
                thirdUser.stacca2();
                clearInterval(timer_firstuser3);
            }
            else {
                thirdUser.chiamata();
            }
        }, 100);
        timer2_firstuser = setInterval(prinTimer3, 100);
    }
});
/* STACCA CHIAMATA */
let stacca3 = document.querySelector('.stacca3');
stacca3 === null || stacca3 === void 0 ? void 0 : stacca3.addEventListener('click', function () {
    clearInterval(timer_firstuser3);
    thirdUser.stacca();
});
function prinTimer3() {
    let tim3 = document.querySelector('.timer3');
    tim3.innerHTML = +(thirdUser.min > 9 ? thirdUser.min : '0' + thirdUser.min) + ':'
        + (thirdUser.sec > 9 ? thirdUser.sec : '0' + thirdUser.sec);
}
azzera3 === null || azzera3 === void 0 ? void 0 : azzera3.addEventListener('click', function () {
    thirdUser.azzeraChiamate();
});
saldo3 === null || saldo3 === void 0 ? void 0 : saldo3.addEventListener('click', function () {
    thirdUser.numero404();
    let saldoatt3 = document.querySelector('.saldoatt3');
    if (saldoatt3 === null) {
        console.log('sbagliato a collegare il pulsante');
    }
    else {
        saldoatt3.innerHTML = thirdUser._saldo.toFixed(2);
    }
});
let lista3 = document.querySelector('.lista3');
lista3 === null || lista3 === void 0 ? void 0 : lista3.addEventListener('click', function () {
    thirdUser.NumeroChiamate();
    let lista3stampa = document.querySelector('.listachiam3');
    if (lista3stampa === null) {
        console.log('sbagliato a collegare il pulsante');
    }
    else {
        lista3stampa.innerHTML = thirdUser._NumeroChiamate.toString() + ' chiamata';
        thirdUser.listachiam.forEach((ele) => {
            let i3 = '</ br> durata: minuti ' + ele + 'secondi';
            console.log(i3);
            lista3stampa.innerHTML = lista3stampa.innerHTML + i3;
        });
    }
});
