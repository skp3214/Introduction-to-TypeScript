// explicit return type of function is boolean.
// it means it is neccessary to return boolean value.
// if we don't return boolean value, it will give error.


let getValue=(myVal:number):boolean=>{
    if(myVal>5){
        return true;
    }
    else{
        return false;
    }
}

const heroes=["thor","spiderman","superman"];
let herolength=heroes.map((hero):number=>{
    return hero.length;
})
let newhero=heroes.map((hero):string=>{
    return hero.toUpperCase();
})

