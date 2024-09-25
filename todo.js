let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=input.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);

    ul.appendChild(li);
    
 
   input.value="";
   
});
let delbtns=document.querySelectorAll(".delete");
for(delbtn of delbtns)
{
    delbtn.addEventListener("click",function(){
    let parent=this.parentElement;
    console.log(parent);
    parent.remove();
});
}