{
    // Type Assertion KeyWord is -> 'as'
    // we use type assertion when we know what type of value will return better than typeScript

    let value : any;
    
    value = 'This is a string';     // here we know that the value is string type 

    /* value. */  // but value. will not give any suggestion of string method

    (value as string).concat('Hi') //now by using type assertion we can say it is a string type and we can use sting methods.
    

    value = 45;

    (value as number).toFixed(2)

    const kgToGram = ( value : string | number) =>{
        if (typeof value === 'string'){
            return `the value is ${parseFloat(value)*1000}`
        }else if (typeof value === 'number'){
            return value * 1000
        }
    }

    const result1 = kgToGram(1) 
    // when we hover over result1 we can see there are 3 possible types
    // which are String | number | undefined , but as we passed number , we are sure that it will return number
    // So
    const result2 = kgToGram(2) as number
    // now when we hover over result2 we can see it will return number type bcz we used type assertion

    // try {
        
    // } catch (error) {
    //     // console.log(error.message); // here it will give error is type unknown
    // }

    type CustomError = {
        message : string;
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
    }


}