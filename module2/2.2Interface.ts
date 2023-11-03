{
    // interFace is same as type alias

    type UserTypeAlias = {
        name : string;
        age : number;
    }
    interface UserTypeInterface02 {   //1. don't use " = " 2. only used for object  
        role : string
    } 

    
    let user1 : UserTypeAlias & {role : string} ={    // use union for accessing other type
        name:"Jon",
        age:35,
        role: "manager"
    }
    interface User2 extends UserTypeInterface02 {   // use keyWord extends instead of union 
        name : string;
        age: number;
    }
    let userWithInterface : User2 = {
        name:"jon",
        age:35,
        role: "manager"
    }

    //

    /* 
     1.type alias works with primitive values and arrays
        interface works with all non-primitive values like Object,Array,Function     
    */

    // array

    type ArrayTypeAlias = number[];

    interface ArrayTypeInterface {
        [index : number] : number
    }

    const arr1 : ArrayTypeAlias = [1,2,3];
    const arr2 : ArrayTypeInterface = [4,5,6]


    //function

    type FnTypeAlias = (arg1:number , arg2:number) => number

    interface FnTypeInterface {
        (arg1:number , arg2:number) : number
    }

    const add1 : FnTypeAlias = (n1,n2) => n1+n2 
    const add2 : FnTypeInterface = (n1,n2) => n1+n2 



    //
}