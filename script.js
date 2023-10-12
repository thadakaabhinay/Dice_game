// var random=Math.trunc(Math.random()*6)+1;
var img=document.querySelector(".dice");
var roll=document.querySelector(".btn--roll");
var hold=document.querySelector(".btn--hold");
var game=document.querySelector(".btn--new")
var p1=document.querySelector("#current--0");
var totp1=document.querySelector("#score--0")
var p2=document.querySelector("#current--1");
var totp2=document.querySelector("#score--1")
var summ2=0;
var summ=0;
var flag=true






function dices(){
    var random=Math.trunc(Math.random()*6)+1;
    if (random===1){
        img.src="dice-1.png";
    }else if(random===2){
        img.src="dice-2.png"
    }else if(random===3){
        img.src="dice-3.png"
    }else if(random===4){
        img.src="dice-4.png"
    }else if(random===5){
        img.src="dice-5.png"
    }else if(random===6){
        img.src="dice-6.png"
    };
   
    if((summ+random)>=20 || (summ2+random)>=20){
        if ((summ+random)>=20){
            alert("Player 1 won!");
            summ=summ+random;
            totp1.textContent=summ;
            roll.disabled=true; 
        }
        if ((summ2+random)>=20){
            alert("player 2 won!");
            summ2=summ2+random;
            totp2.textContent=summ2;
            roll.disabled=true;
        }
    }else{
        if(flag){
            p2.textContent=0;
            if(random==1){
                totp1.textContent=0;
                p1.textContent=random;
                summ=0;
            }else{
                p1.textContent=random;
                summ=summ+random;
                totp1.textContent=summ; 
            }
       
        }
        else{
            p1.textContent=0;
            if(random==1){
                totp2.textContent=0;
                p2.textContent=random;
                summ2=0;
            }else{
                p2.textContent=random;
                summ2=summ2+random;
                totp2.textContent=summ2; 
            }
    
    
        }
    

    }
 




    
    
}
function holds(){
    if(!flag) {
        flag=true;
    }else{
        flag=false;
    }
}
// if(summ>=20 || summ2>=20){
//     if (summ>=20){
//         alert("Player 1 won!");
//     }
//     if (summ2>=20){
//         alert("player 2 won!");
//     }
// }
function ngame(){
    totp1.textContent=0;
    totp2.textContent=0;
    p1.textContent="0";
    p2.textContent="0";
    img.src="dice-5.png"
    roll.disabled=false;
    summ=0;
    summ2=0;
    flag=true;
}

roll.addEventListener("click",dices)
hold.addEventListener("click",holds)
game.addEventListener("click",ngame);

// console.log(summ)