//normal func
function add (num1:number,num2:number): number {
    return num1 + num2
}

//arrow func
const sqr = (num1:number) : number =>  num1*num1 


//method
let user1 :{
    name: string;
    balance : number;
    addBalance : Function;
    total: Function;
} = {
    name : 'jon',
    balance : 0,
    addBalance(balance : number) {
        balance += this.balance ;
    },
    total():string{
        return `my total balance is ${this.balance}`
    }
}

user1.addBalance(10)
user1.total()


// HOF

//array.map
let arr : number[] = [2,4,6];

const newArr : number[] = arr.map((el:number) : number => el*el)