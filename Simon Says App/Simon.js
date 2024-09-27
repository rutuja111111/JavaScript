let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;


let butns=["red","yellow","green","blue"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("Game Started");
    started=true;
    
    levelUP();
    }
});


function gameBtnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userbtnFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}



function levelUP()
{
    userSeq=[];
    level++;
  h2.innerText=`Level${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    let randomColor=butns[ranIdx];
    let ranBtn=document.querySelector(`.${randomColor}`);
    
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameBtnFlash(ranBtn);

}

function check_gseq_useq(idx){
 
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
          setTimeout(levelUP,1000);
        }
    }
    else
    {
        h2.innerHtml=`Game Over!Your score is<b>${level}</b>.<br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userbtnFlash(btn);
   let userColor=btn.getAttribute("id");// let userColor=btn;
  userSeq.push(userColor);
  console.log(userSeq);
  check_gseq_useq(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
