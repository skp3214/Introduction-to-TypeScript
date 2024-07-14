// Never and Void

// Never is a type that has no value. It is used to represent a value that cannot be
// represented by any other type. It is often used in situations where a function
// returns a value that is not expected to be used, such as in error handling.
// Never is a subtype of all other types, including itself. This means that a variable
// of type Never can be assigned any value, but it cannot be used to store a value.

function consoleError(errMsg:string):void{
    console.log(errMsg)
}

function handleError(errMsg:string):never{
    throw new Error(errMsg);
}


