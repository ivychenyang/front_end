//オプジェットの作成
let obj ={name:"Alice",id:122,isStudent:true};
console.log(obj);
//Alice
console.log(obj.name);
console.log(obj["name"]);
//上書きの仕方
obj.id=30;
console.log(obj.id);
obj["isStudent"]=false;
console.log(obj["isStudent"]);
//for
// for(let i=0;i<10;i++){
//     console.log(i);
// }
for(let key in obj){
    console.log(key+":"+obj[key])
}