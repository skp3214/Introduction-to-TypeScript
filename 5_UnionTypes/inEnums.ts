enum ShapeKind{
    Circle="circle",
    Square="square"
}

interface Circle{
    kind:ShapeKind.Circle;
    radius:number;
}

interface Square{
    kind:ShapeKind.Square;
    sideLength:number;
}

type Shape=Circle|Square;

function getArea(shape:Shape):number{
    switch(shape.kind){
        case ShapeKind.Circle:
            return Math.PI*shape.radius**2;
        case ShapeKind.Square:
            return shape.sideLength**2;
    }
}

const myCircle:Circle={kind:ShapeKind.Circle,radius:5};
const mySquare:Square={kind:ShapeKind.Square,sideLength:10};

console.log(getArea(myCircle));
console.log(getArea(mySquare));