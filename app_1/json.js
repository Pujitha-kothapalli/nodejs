var book = {title:"Core Java",author:"Herber Shield",price:500,publisher:"Tata McGrill",pages:200}
var jsonbook = JSON.stringify(book)
console.log(jsonbook)

var bookobj = JSON.parse(jsonbook)
for(ele in bookobj){
    console.log(ele+":"+bookobj[ele])
}

