{
type Student = {
    name: string;
    age:number;
    contactNo ?: number;              /* created a type Alias */
    address: string;
    city: string;
    code: string | number;
}

/* with that ype we can make several data with values */

const student1 : Student ={
    name: "jon",
    age: 65,
    contactNo: 13454131,
    address: "habijabi",
    city: "dhaka",
    code : "no code"
}
const student2 : Student ={
    name: "sam",
    age: 45,
    address: "USA",
    city: "L.V",
    code : 700,
}

// for function

type AddFunction = (num1: number, num2:number) => number;

const add : AddFunction =(num4,num2)=>{
    return num4+num2
}







}