

let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomColor=getRandomColors();
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;
    h3.innerText=randomColor;
    console.log("color updated!");
});
function getRandomColors()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
