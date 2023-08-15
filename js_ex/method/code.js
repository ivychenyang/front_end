//メソッド
function printHello(){
    console.log("Hello");
}
printHello();
//メソッド return あり
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

function print(str1,str2="世界",str3="!!!"){
    console.log(str1+""+str2+""+str3)
}
print("ヤッホー");
print("ヤッホー","お昼寝したい");
print("ヤッホー","お昼寝したい","おやつも食べたい");
//ラムダ式
let add = (x,y) =>x+y;
console.log(add(2,3));
