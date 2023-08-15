//要素取得
let text = document.getElementById("text-1");
console.log(text);
//要素内容取得
console.log(text.innerHTML);
//要素内容变更
text.innerHTML = "Hello";

//aタグのリンクを取得 id link -1
//要素的取得
let link = document.getElementById("link-1");
console.log(link);
//要素的内容取得
console.log(link.innerHTML);
//hrefリンク内容取得
console.log(link.href);
//hrefリンク内容变更
link.href="https://developer.mozilla.org";
//target_blank
link.target="_blank";
//クラス指定值的取得ex-1

let ex1 = document.getElementsByClassName("ex-1");
console.log(ex1);
console.log(ex1[0]);
//タグ名指定值取得div
let ex2=document.getElementsByTagName("div");
console.log(ex2[2]);