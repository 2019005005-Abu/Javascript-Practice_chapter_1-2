let book={
    topic:'Javascript',
    edition:7
}
//accsing Data
// method 1;
console.log(book.topic+','+book.edition);
console.log(book['topic']+','+book['edition']);
book.Author='Abu Al Shahriar Rifat';
book.contents={}
console.log(book);
let conditionall_Ren1=book.contents ?.cho1?.sec01;
let conditionall_Ren2=book.contents ?.Shahriar?.Rifat;
console.log(conditionall_Ren1);

let primes=[2,3,5,7];
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length-1]);
//Array and Objects acn hold others arrays and Object
let points=[
 {x:0,y:0},
 {x:1,y:1}
]
let data={
 trial1:[[1,2],[3,6]],
 trial2:[[10,11],[12,14]]
}
let matrix1={
    a:[1,2],
    b:[5,5]
}
let matrixCalculation=matrix1['a']-matrix1['b'];
console.log(matrixCalculation);

function Plus1(x){
    return x+1
}
console.log(Plus1(67));
let MyFun=function(first,second){
  return first+second
}

console.log(MyFun(10,90));

let a=[];
console.log(a.push(10));
a.push(20,30,40);
console.log(a.reverse());

points.dist=function(){
    let p1=this[0];
    let p2=this[1];
    let a=p2.x-p1.x;
    let b=p2.y-p2.y;
    return Math.sqrt(a*a-b*b);
}
console.log("Difference between  2 points"+ ' '+points.dist());


function abs(x){
    if(x>=0){
        return x;
    }else{
        return -x;
    }
}
console.log(abs(-10)===abs(10));

function sum(Array){
    let sum=0;
    for(let x of Array){
        sum+=x;
    }
    return sum;
}
let total=sum(primes);
console.log(total);
