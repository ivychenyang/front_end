//ol li no情报取得
let list =document.getElementById("list");
//新要素制成
let newLink =document.createElement("a");
//内容插入
newLink.innerHTML = "developer.mozilla.org";
list.append(newLink);
//list.after(newLink);

//新的<li>制成
let item =document.createElement("li");
list.append(item);
item.append(newLink);

//要素的删除
let removeLink = document.getElementById("link-2");
//removeLink.remove();
removeLink.parentNode.remove();

/**document.getElementById("button").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
}; */

// document.getElementById("button").onclick=()=>{
//   処理
// }

let btnEvent =document.getElementById("button1");
btnEvent.onclick =function(){
    console.log("ボタンをクリックした1");
}
btnEvent.onclick=function(){
    console.log("ボタンをクリックした2");
}
/**対象の要素.addEventListener(種類, () => {
  // 処理を記述
}); */
// 対象の要素.addEventListener(種類, function() {
//    // 処理を記述
//  }, false);
btnEvent.addEventListener("click",()=>{
    console.log("ボタンリックその3");
})
btnEvent.addEventListener("click",()=>{
    console.log("ボタンリックその４");
})
//hello方法作成
function hello(){
    console.log("hello");
}