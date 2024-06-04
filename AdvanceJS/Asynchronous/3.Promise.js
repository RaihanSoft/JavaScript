let amoount = 1000;
let age = 18
Account=()=>{
    console.log("Creating A Bank Account");

    let p = new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(age >=18){
               resolve()
            }else{
               reject("Your Can't Create Bank Account");
            }
        },2000)
    })
    return p



}

Diposite = ()=>{
    console.log("Please Deposite Here");

    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(amoount >= 1100){
                resolve()
    
            }else{
                reject("Minimum Deposite 1000, Please Try Again");
            }
    
        },3000)
    })
    return p


}

Withdrow = ()=>{
    let p = new Promise((resolve) => {
        resolve("Here is your withdrowal Ammount");
    })
    return p

}



Account()
          .then(Diposite)
          .then(Withdrow)
          
          .then(function(value){
            console.log(value);
          })

          .catch(function(err){
            console.log(err);
          })

