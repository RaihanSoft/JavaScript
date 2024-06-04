let amoount = 1000;
let age = 18
Account=(callback)=>{
    console.log("Creating A Bank Account");

    setTimeout(()=>{
        if(age >=18){
           callback()
        }else{
            console.log("Your Can't Create Bank Account");
        }
    },2000)
}

Diposite = (callback)=>{
    console.log("Please Deposite Here");

    setTimeout(()=>{
        if(amoount >= 1100){
            callback()

        }else{
            console.log("Minimum Deposite 1000, Please Try Again");
        }

    },3000)
}

Withdrow = ()=>{
    console.log("Here Is your withdrowal Ammount");
}

Account(()=>{
    Diposite(Withdrow)

})