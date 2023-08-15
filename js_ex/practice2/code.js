//ラベル取得
let label= document.getElementById("label1");
let button1=document.getElementById("change-text1");
let button2=document.getElementById("change-text2");
let button3=document.getElementById("change-text3");

//りんごに变更
button1.addEventListener('click',()=>{
    label.innerHTML="リンゴ";
});
button2.addEventListener('click',()=>{
    label.innerHTML="バナナ";
});
button3.addEventListener('click',()=>{
    label.innerHTML="ミカン";
});
