//callback
let age = 19;
let a = true;

Dispay=()=>{
    console.log("Displaing");
    let p = new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(a){
                resolve()
            }else{
                reject("This is Not Possible One1");
            }        
        },2000)
    })
    return p;
}
sum = ()=>{
    console.log("Its haappend");
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age==19){
                resolve()
            }else{
              reject("Age is Low");
            }
        },3000)
    })
    return p
}
done=()=>{
let p  = new Promise((resolve)=>{
    resolve("Alls are OOk");
})
return p

 }
//1 ------------------------------------------>calback
// Dispay(()=>{
//     sum(done)
// })


//2------------------------------------------->promise
// Dispay()
//          .then(sum)
//          .then(done)
//          .then((value)=>{
//             console.log(value);
//          })
//          .catch((err)=>{
//             console.log(err);
//          })


//3 ------------------------------------------Async&Await

async function disp(){

    try{
        await Dispay()
        await sum()
        let result =  await done() 
        console.log(result);}
        
    catch(err){
        console.log(err);
    }
}
disp()