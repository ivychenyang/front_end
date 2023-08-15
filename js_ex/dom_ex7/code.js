
let label= document.getElementById("label1");
let button1=document.getElementById("change-text1");
let button2=document.getElementById("change-text2");
let button3=document.getElementById("change-text3");

button1.addEventListener('click',()=>{
    label.innerHTML="0";
});
button2.addEventListener('click',()=>{
    for(let i=0;i<10;i++){
            console.log(i);
        label.innerHTML=i;
    }
})

