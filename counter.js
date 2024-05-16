
let  increaseBtn=document.querySelector(".increase-btn");
let decreaseBtn=document.querySelector(".decrease-btn");
let resetBtn=document.querySelector(".reset-btn");
let para=document.querySelector("p");

increaseBtn.addEventListener("click",()=>{
    let paraValue=document.querySelector("p").innerText;
    increaseScreenValue(paraValue);
})

decreaseBtn.addEventListener("click",()=>{
    let paraValue=document.querySelector("p").innerText;
    decreaseScreenValue(paraValue);
})

resetBtn.addEventListener("click",()=>{
    let paraValue=document.querySelector("p").innerText;
    resetScreenValue(paraValue);
})

function increaseScreenValue(paraValue){
    
    paraValue++;
    para.innerText=paraValue;
    if(paraValue>0){
        para.style.color="green";
    }
}

function decreaseScreenValue(paraValue){
    paraValue--;
    para.innerText=paraValue;
    if(paraValue<0){
        para.style.color="red";
    }
}

function resetScreenValue(){
    para.innerText="0";
    para.style.color="black";
}