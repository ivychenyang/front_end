$(function(){
//<ol>の要素の取
let list =$("#list");
//新し<a>要素を追加
let newLink = $("<a>");
//aタグの中に内容を追加
newLink.html("developer.mozilla.org");
//リスとの末尾追加
list.append(newLink);

//新しliをつくってaタグを入れる
let newItem = $("<li>");
list.append(newItem);
newItem.append(newLink);
let newText=$("<p>")
newText.html("and more");
list.after(newText);


//要素删除
//list.remove();

//要素の中を空
list.empty();
$("#button1").click(()=>{
    console.log("hello");
});
//クルックベント.addEvent~
$("#button1").on("click",()=>{
    console.log("GoodBye");
    
});
$("#button1").on("click",()=>{
    console.log("GoodBye2");
});
});
