{
    // Generic type is a type where user makes a type which is dynamic
    // To make a generic type we generalized the type by making it dynamic 
    // so that this type can be used for several variables.

    
    type GenericArray1 = number[];
    const numberArray1 : GenericArray1 = [1,2,3]
    /* |
       |
       |---> */ type GenericArray2 = Array<number>
                const numberArray2 : GenericArray2 = [1,2,3]
               /* |
                  |
                  |------> */   type GenericArray3<T> = Array<T>  // T is referred to the parameter type passed
                                const numberArray3 : GenericArray3<number> = [1,2,3]
                                                                /* |
                                                                   | --> Type passed  */
    // so we have made a GenericArray Type 
    // where we can say Which type of array will it be 
    // by passing the type as argument,

    // so like number Array 3

    const stringArray3 : GenericArray3<String> = ['a','b','c'];
    const boolArray3 : GenericArray3<boolean> = [true, false , true];

    // for array of objects

    const arrayofObjects : GenericArray3<{name:string,age:number}> = [
        {
            name:'jon',
            age:35
        },
        {
            name:'sam',
            age:25
        },

    ]

    // for tuples

    type GenericTuple<A , B> = [A,B];

    const tuples : GenericTuple<string,number> = ['jon' , 35]

}