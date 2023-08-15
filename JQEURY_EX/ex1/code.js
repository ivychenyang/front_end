$(function(){
    //jQuery处理书写
    //要素取得
    let text = $("#text-1");
    //要素的内容取得Hello取得
    console.log(text.html())

    //hello 变goodbye
    text.html("GoodBye")
    //リンクの話
    //リンク要素を取得
    let link =$("#link-1");
    //リンクのURL取得
    console.log(link.attr("href"));
    //リンク書き換え
    link.attr("href","https://kinarino.jp/cat8/38722");
    link.attr("target","_blank");
    //cssの話
    let texts =$(".text-class");
    //とってきた要素に色をつける
    //texts.css("color","red");
    texts.eq(0).css("color","red");
    texts.eq(2).css("color","red");
   
});
