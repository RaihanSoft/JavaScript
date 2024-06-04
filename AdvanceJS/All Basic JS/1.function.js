//regular function
function  hello (){
    console.log("This is Siyam");
}
let a  = hello();

console.log(a);

//function expression
 
let b = function(){
    console.log("This is Rayhan");
}
console.log(b);


//Named function expression

const c = function hey (){
    console.log("Sam boy");
}
console.log(c);

//Arrow Function

const hello = () => {
    console.log("sam");
}
hello();

//2

const d = (a,b) => {
    return{
        a:5,
        b:6
    
    }
    }
    
    console.log(d());


//Anonymous function

let e = function(){
    return ()=>{
        console.log("THis is siyam");

    }

}
e();
