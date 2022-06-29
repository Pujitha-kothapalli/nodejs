function verifylogin(user1,pwd,callback){
    if(pwd == "pwd1"){
        callback(null,"correct login")
    }
    else{
        callback("incorrect login",null)
    }
}


verifylogin("user1","pwd2",function(err,result){
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})

verifylogin("user1","pwd1",(err,result) =>{    //we can also omit "function" keyword in callback function in new version
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})

console.log("Program is starting")

setTimeout(() => {   //performs an operation after a particular period of time
    console.log("inside timeout")
}, 2000);

console.log("after time out")
console.log("program ending")