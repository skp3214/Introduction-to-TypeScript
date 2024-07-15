let formatInput=(input:string|number):string=>{
    if(typeof input==='number'){
        return input.toString()
    }
    return input
}

console.log(formatInput("45"));
console.log(formatInput(45));