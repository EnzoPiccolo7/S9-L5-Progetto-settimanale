class smartphone {
      _saldo:number;
     _NumeroChiamate:number;
     listachiam:any = [];
     sec:number = 0;
     min:number = 0;
     durata:String = '';

    constructor(Saldo:number,NumeroChiamate:number)
    {
        
        this._saldo = Saldo;
        this._NumeroChiamate = NumeroChiamate; 
       
    }

    public ricarica():void {   
        this._saldo = this._saldo + 5;
        console.log(this._saldo.toFixed(2))
    }
    

    public chiamata():void {
        
        this.sec++;
        if (this.sec >= 60) {
            this.sec = 0;
            this.min++;
            this._saldo = this._saldo - 0.20;
        }
          
        console.log(this._saldo.toFixed(2))

    } 
    public stacca2(): void {
        this.sec = 0;
        this.min = 0;



    }

    public stacca():void{
        if(this.sec > 0){
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
    
    public numero404():number {
        console.log(this._saldo.toFixed(2))
        return this._saldo;
        
    } 
   
    public  NumeroChiamate() {
        console.log(this._NumeroChiamate)


    }
    
    
    public azzeraChiamate():void {
        this.listachiam = [];
        this._NumeroChiamate = 0;
        console.log(this._NumeroChiamate);

}
}
 let FirstUser = new smartphone(2,0);
let SecondUser = new smartphone(4,0);
let thirdUser = new smartphone(7,0);

let ric1 = document.querySelector('.ricarica1');
ric1?.addEventListener('click',  FirstUser.ricarica    );

let ric2 = document.querySelector('.ricarica2');
ric2?.addEventListener('click',function (){
    SecondUser.ricarica();}
    );

let ric3 = document.querySelector('.ricarica3');
ric3?.addEventListener('click',function (){
    thirdUser.ricarica();}
    ); 

/* USER 1 */
/* cronometro chiamata */

var timer:any = document.querySelector('.chiama1');
var timer_firstuser: number | undefined;
var timer2_firstuser: number | undefined;
var timer3_firstuser: number | undefined;
var azzera1 = document.querySelector('.azzera1');
var saldo1 = document.querySelector('.saldo1');

let uno = document.querySelector('#uno');
let due = document.querySelector('#due');
let tre = document.querySelector('#tre');
let quattro = document.querySelector('#quattro');
let cinque = document.querySelector('#cinque');
let sei = document.querySelector('#sei');
let sette = document.querySelector('#sette');
let otto =document.querySelector('#otto');
let nove = document.querySelector('#nove');
let zero = document.querySelector('#zero');
let reset = document.querySelector('#reset');
let cancelletto = document.querySelector('#cancelletto');

cancelletto?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += '#';
 })
uno?.addEventListener('click', function(){
   let ciao:any = document.querySelector('#risultato');
   ciao.innerHTML += 1;
})
due?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += 2;
 })
 tre?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += 3;
 })
 quattro?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += 4;
 })
 cinque?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += 5;
 })
 sei?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += 6;
 })
 sette?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += 7;
 })
 otto?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += 8;
 })
 nove?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += 9;
 })
 zero?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato');
    ciao.innerHTML += 0;
 })
 reset?.addEventListener('click', function (){
    resetta();
 })
       
 

 function resetta(){
    let reset:any = document.querySelector('#risultato');
        reset.innerHTML = '';
 }
   


timer?.addEventListener('click',function(){ 
    if(FirstUser._saldo === 0.00){

        alert('hai finito il credito!!! ricarica')
    } else {
        timer_firstuser = setInterval(function(){ 
            if (FirstUser._saldo === 0.00) {
                alert('hai finito il credito!!! ricarica')
                FirstUser.stacca2();
                clearInterval(timer_firstuser)

            }else {
                FirstUser.chiamata()
            }
          },1000);

    timer2_firstuser = setInterval(prinTimer,1000);}
    
});

/* STACCA CHIAMATA */

let stacca = document.querySelector('.stacca1');
stacca?.addEventListener('click', function(){
    clearInterval(timer_firstuser);
    clearInterval(timer2_firstuser);
    FirstUser.stacca();
    resetta();
   
} )


function prinTimer(){
    let tim = <HTMLParagraphElement> document.querySelector('.timer1');
    tim.innerHTML =  'Tempo chiamata '  + (FirstUser.min > 9 ? FirstUser.min : '0' + FirstUser.min) + ':'
    + (FirstUser.sec > 9 ? FirstUser.sec : '0' + FirstUser.sec);
}
azzera1?.addEventListener('click',function(){
    FirstUser.azzeraChiamate();
})

saldo1?.addEventListener('click',function(){
    FirstUser.numero404();
    let saldoatt1 = <HTMLParagraphElement> document.querySelector('.saldoatt');
    if (saldoatt1 === null){
        console.log('sbagliato a collegare il pulsante')
    } else {
        saldoatt1.innerHTML = 'Saldo ' + FirstUser._saldo.toFixed(2) + '€';

    }
})

let lista1 = document.querySelector('.lista1');
lista1?.addEventListener('click',function(){
        FirstUser.NumeroChiamate();
        let lista1stampa = <HTMLParagraphElement>document.querySelector('.listachiam1');
        if (lista1stampa === null){
            console.log('sbagliato a collegare il pulsante')
        } else {
            lista1stampa.innerHTML =  FirstUser._NumeroChiamate.toString() + ' chiamata';
            FirstUser.listachiam.forEach((ele: { listachiam:any ; }) => {
                let i = '<br  /> durata: minuti '+ ele + 'secondi';
                console.log(i);
                lista1stampa.innerHTML = lista1stampa.innerHTML  + i; /* dopo aver cliccato su azzera lista,
                                                                        cliccare su lista chiamata per aggiornare la lista */
            });
    
        }
});

/* USER 2 */

var timer2:any = document.querySelector('.chiama2');
var timer_firstuser2: number | undefined;
var timer2_firstuser2: number | undefined;
var timer3_firstuser2: number | undefined;
var azzera2 = document.querySelector('.azzera2');
var saldo2 = document.querySelector('.saldo2');
let uno2 = document.querySelector('#uno2');
let due2 = document.querySelector('#due2');
let tre2 = document.querySelector('#tre2');
let quattro2 = document.querySelector('#quattro2');
let cinque2 = document.querySelector('#cinque2');
let sei2 = document.querySelector('#sei2');
let sette2 = document.querySelector('#sette2');
let otto2 =document.querySelector('#otto2');
let nove2 = document.querySelector('#nove2');
let zero2 = document.querySelector('#zero2');
let reset2 = document.querySelector('#reset2');
let cancelletto2 = document.querySelector('#cancelletto2');

cancelletto2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += '#';
 })

uno2?.addEventListener('click', function(){
   let ciao:any = document.querySelector('#risultato2');
   ciao.innerHTML += 1;
})
due2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += 2;
 })
 tre2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += 3;
 })
 quattro2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += 4;
 })
 cinque2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += 5;
 })
 sei2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += 6;
 })
 sette2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += 7;
 })
 otto2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += 8;
 })
 nove2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += 9;
 })
 zero2?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato2');
    ciao.innerHTML += 0;
 })
 reset2?.addEventListener('click', function (){
    resetta2();
 })
       
 

 function resetta2(){
    let reset:any = document.querySelector('#risultato2');
        reset.innerHTML = '';
 }

timer2?.addEventListener('click',function(){ 
    if(SecondUser._saldo === 0.00){

        alert('hai finito il credito!!! ricarica')
    } else {
        timer_firstuser2 = setInterval(function(){ 
            if (SecondUser._saldo === 0.00) {
                alert('hai finito il credito!!! ricarica')
                SecondUser.stacca2();
                clearInterval(timer_firstuser2)

            }else {
                SecondUser.chiamata()
            }
          },1000);

    timer2_firstuser = setInterval(prinTimer2,1000);}
    
    
});

/* STACCA CHIAMATA */

let stacca2 = document.querySelector('.stacca2');
stacca2?.addEventListener('click', function(){
    clearInterval(timer_firstuser2);
    clearInterval(timer2_firstuser2);
    SecondUser.stacca();
    resetta2();
   
} )


function prinTimer2(){
    let tim2 = <HTMLParagraphElement> document.querySelector('.timer2');
    tim2.innerHTML =   'Tempo chiamata ' + (SecondUser.min > 9 ? SecondUser.min : '0' + SecondUser.min) + ':'
    + (SecondUser.sec > 9 ? SecondUser.sec : '0' + SecondUser.sec);
}
azzera2?.addEventListener('click',function(){
    SecondUser.azzeraChiamate();
})

saldo2?.addEventListener('click',function(){
    SecondUser.numero404();
    let saldoatt2 = <HTMLParagraphElement> document.querySelector('.saldoatt2');
    if (saldoatt2 === null){
        console.log('sbagliato a collegare il pulsante')
    } else {
        saldoatt2.innerHTML = 'Saldo '+ SecondUser._saldo.toFixed(2) + '€';

    }
})

let lista2 = document.querySelector('.lista2');
lista2?.addEventListener('click',function(){
    SecondUser.NumeroChiamate();
    let lista1stampa2 = <HTMLParagraphElement>document.querySelector('.listachiam2');
    if (lista1stampa2 === null){
        console.log('sbagliato a collegare il pulsante')
    } else {
        lista1stampa2.innerHTML =  SecondUser._NumeroChiamate.toString() + ' chiamata';
        SecondUser.listachiam.forEach((ele: { listachiam:any ; }) => {
            let i2 = '<br  /> durata: minuti '+ ele + 'secondi';
            console.log(i2);
            lista1stampa2.innerHTML = lista1stampa2.innerHTML  + i2;/* dopo aver cliccato su azzera lista,
            cliccare su lista chiamata per aggiornare la lista */

            
        });
    
        }
});

/* USER 3 */

var timer3:any = document.querySelector('.chiama3');
var timer_firstuser3: number | undefined;
var timer2_firstuser3: number | undefined;
var timer3_firstuser3: number | undefined;
var azzera3 = document.querySelector('.azzera3');
var saldo3 = document.querySelector('.saldo3');
let uno3 = document.querySelector('#uno3');
let due3 = document.querySelector('#due3');
let tre3 = document.querySelector('#tre3');
let quattro3 = document.querySelector('#quattro3');
let cinque3 = document.querySelector('#cinque3');
let sei3 = document.querySelector('#sei3');
let sette3 = document.querySelector('#sette3');
let otto3 =document.querySelector('#otto3');
let nove3 = document.querySelector('#nove3');
let zero3 = document.querySelector('#zero3');
let reset3 = document.querySelector('#reset3');
let cancelletto3 = document.querySelector('#cancelletto3');

cancelletto3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += '#';
 })

uno3?.addEventListener('click', function(){
   let ciao:any = document.querySelector('#risultato3');
   ciao.innerHTML += 1;
})
due3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += 2;
 })
 tre3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += 3;
 })
 quattro3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += 4;
 })
 cinque3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += 5;
 })
 sei3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += 6;
 })
 sette3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += 7;
 })
 otto3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += 8;
 })
 nove3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += 9;
 })
 zero3?.addEventListener('click', function(){
    let ciao:any = document.querySelector('#risultato3');
    ciao.innerHTML += 0;
 })
 reset3?.addEventListener('click', function (){
    resetta3();
 })
       
 

 function resetta3(){
    let reset:any = document.querySelector('#risultato3');
        reset.innerHTML = '';
 }

timer3?.addEventListener('click',function(){ 
    if(thirdUser._saldo === 0.00){

        alert('hai finito il credito!!! ricarica')
    } else {
        timer_firstuser3 = setInterval(function(){ 
            if (thirdUser._saldo === 0.00) {
                alert('hai finito il credito!!! ricarica')
                thirdUser.stacca2();
                clearInterval(timer_firstuser3)

            }else {
                thirdUser.chiamata()
            }
          },1000);

    timer2_firstuser = setInterval(prinTimer3,1000);}
        });

/* STACCA CHIAMATA */

let stacca3 = document.querySelector('.stacca3');
stacca3?.addEventListener('click', function(){
    clearInterval(timer_firstuser3);
    thirdUser.stacca();
    resetta3();
   
} )


function prinTimer3(){
    let tim3 = <HTMLParagraphElement> document.querySelector('.timer3');
    tim3.innerHTML =  'Tempo chiamata ' + (thirdUser.min > 9 ? thirdUser.min : '0' + thirdUser.min) + ':'
    + (thirdUser.sec > 9 ? thirdUser.sec : '0' + thirdUser.sec);
}
azzera3?.addEventListener('click',function(){
    thirdUser.azzeraChiamate();
})

saldo3?.addEventListener('click',function(){
    thirdUser.numero404();
    let saldoatt3 = <HTMLParagraphElement> document.querySelector('.saldoatt3');
    if (saldoatt3 === null){
        console.log('sbagliato a collegare il pulsante')
    } else {
        saldoatt3.innerHTML = 'Saldo ' + thirdUser._saldo.toFixed(2) + '€';

    }
})

let lista3 = document.querySelector('.lista3');
lista3?.addEventListener('click',function(){
    thirdUser.NumeroChiamate();
        let lista3stampa = <HTMLParagraphElement>document.querySelector('.listachiam3');
        if (lista3stampa === null){
            console.log('sbagliato a collegare il pulsante')
        } else {
            lista3stampa.innerHTML =  thirdUser._NumeroChiamate.toString() + ' chiamata';
            thirdUser.listachiam.forEach((ele: { listachiam:any ; }) => {
                let i3 = '<br /> durata: minuti '+ ele + 'secondi';
                console.log(i3);
                lista3stampa.innerHTML = lista3stampa.innerHTML  + i3;/* dopo aver cliccato su azzera lista,
                cliccare su lista chiamata per aggiornare la lista */
                
            });
    
        }
})