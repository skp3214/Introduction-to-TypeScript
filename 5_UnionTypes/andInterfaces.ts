interface Dog{
    breed:string;
    bark():void;
}
interface Cat{
    breed:string;
    meow():void;
}

type Pet=Dog|Cat;
function getPet(pet:Pet){
    console.log(pet.breed);
    if("bark" in pet){
        pet.bark();
    }
    else if("meow" in pet){
        pet.meow();
    }

}

const myDog:Dog={
    breed:"Golden Retriever",
    bark():void{
        console.log("Woof Woof");
    }
}
const myCat:Cat={
    breed:"Persian",
    meow():void{
        console.log("Meow Meow");
    }
}
getPet(myDog);
getPet(myCat);