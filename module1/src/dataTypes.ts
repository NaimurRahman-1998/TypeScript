// primitive Data Types

//String
let firstName = "hello world"  // implicit declaration where ts assumes it is a string type;

let lastName : string = "Bye World";  // explicitly saying it is a string type

//Number
let age : number = 35;

//boolean
let isMale :boolean = true

//null
let nullType : null = null;

//undefined
let undefinedType: undefined = undefined;


/* --------- Non Primitive ---------------- */

//array 
let friends : string[] = ['jon','sam'];

//tuples
//tuples ==> array => in order of data

let ageName : [number,string] = [35,'jon'];

ageName[0] = 45;