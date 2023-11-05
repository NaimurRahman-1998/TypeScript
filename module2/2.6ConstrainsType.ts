// constrains
// constrains explictlt tells a generic type which properties it must have

// here well look normal function with generic type
{
    const addToCourse = <T>(student : T) =>{
        const course = "welcome to course";

        return {...student , course}
    }

    const student1 = addToCourse({name:"jon",id:112})
    const student2 = addToCourse({emni:"emni"})
    const student3 = addToCourse([1,2,3])

    // here we can see that in the function we can pass anything we like, 
    // so if we have to explicitly say that it requires 2 properties minimum
    // we will use constrains

}

{
    interface Student {
        name: string;
        id: number
    }
    const addToCourse = <T extends Student>(student : T) =>{
                            /* |
                               |---> now T Type will expect to have Student Type properties */
        const course = "welcome to course";

        return {...student , course}
    }

    const student1 =  addToCourse({name:"jon",id:45 , emni:'as'});
}