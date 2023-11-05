{
    // Generic type is a type where user makes a type which is dynamic
    // To make a generic type we generalized the type by making it dynamic 
    // so that this type can be used for several variables.

    type GenericArray1 = number[];
    type GenericArray2 = Array<number>
    type GenericArray3<T> = Array<T>   // T is referred to the parameter type passed

    const numberArray1 : number[] | GenericArray1 = [1,2,3]
    /* |
       |
       |---> */ const numberArray2 : Array<number> | GenericArray2 = [1,2,3]
               /* |
                  |
                  |------> */  const numberArray3 : GenericArray3<number> = [1,2,3]
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