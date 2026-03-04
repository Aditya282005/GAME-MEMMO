let gameseq=[];
let userseq=[];
let btns=["red","green","yellow","purple"];
let p=document.querySelector(".para");


let start=false;
let level=0;
console.log("heyyy");
document.addEventListener("keypress",()=>{
    if(start==false){
    console.log("key was pressed");
start=true;
levelup();
}

})


function levelup(){
    userseq=[];
    level++;
    p.innerText= `level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
     let ran=document.querySelector(`.${randcolor}`);
     gameseq.push(randcolor);
     console.log(gameseq);
          console.log(randcolor);
               console.log(ran);
    gameflash(ran);
    }

function checkanss(idx){
  //console.log("curr level:",level);
 
  if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
         setTimeout(levelup,1000);
    }
    console.log("same value");
  }else{
    p.innerHTML=`Game over! Your score was <b>${level}</b> Press any key to start`;
    again();
  }


  }
  function again(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
  }
       
    




    function gameflash(btn){
        btn.classList.add("flash");
        setTimeout(function (){
            btn.classList.remove("flash");
        },250);
    }
function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(function (){
            btn.classList.remove("userflash");
        },250);




    }
function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkanss(userseq.length-1);
    console.log(usercolor);
}
let allbtns=document.querySelectorAll(".btn");
for( let btn of allbtns){
    btn.addEventListener("click",btnpress);
}


