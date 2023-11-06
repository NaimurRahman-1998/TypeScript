// first we will look normal function with type alias
{
  const createArray = (param: string): string[] => [param];

}

// now creat with generic
{
  const createArray = <T>(param :T) : T[] => [param]

  const stringArray = createArray<string>('bangladesh')
  const numberArray = createArray<number>(1);
  const booleanArray = createArray<boolean>(true)

  interface User {
    name:string;
    id:number
  }
  const objectArray = createArray<User>({name:"jon", id: 45})
}




// now with tuple
{
  const createTuple = <T , X>(param1 : T , param2 : X) : [T , X] => [param1,param2]

  const tuple = createTuple<string, number>('string',54)
}


// function that returns Object
{

  const addToCourse = <T>(student :T)  => {
    const course = "Welcome to Course";

    return {
      ...student,
      course
    }
  }

  const student1 = addToCourse({name:"sam" , id:45})
}