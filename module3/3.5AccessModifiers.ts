{
    class BankAccount {
        name:string;
        id:number;
        balance:number;
        constructor(name:string,id:number,balance:number){
            this.name=name;
            this.id=id;
            this.balance=balance
        }
    }

    //make instance using class bank account

    const poorPerson = new BankAccount('Jon',35,20)
    poorPerson.balance = 0 // =>>>>>>>>> here we can access the properties and change values which shouldn't be correct 
    poorPerson.balance =1000
    poorPerson.id = 45454;
}
// so we write modifiers to specific the access
{
    class BankAccount {
        public readonly name:string;    //readonly -> can't change the value ever
        readonly id:number;
        private _balance:number;        // protected -> can't access the value outside the class
        constructor(name:string,id:number,balance:number){
            this.name=name;
            this.id=id;
            this._balance=balance
        }
    }
    const poorPerson = new BankAccount('Jon',35,20)
    poorPerson.id = 5415  // errror
    poorPerson.balance = // error
}
// so to modify the value of balance we create a method inside the class
{
    class BankAccount {
        public readonly name:string;    //readonly -> can't change the value ever
        readonly id:number;
        private _balance:number;        // private -> can't access the value outside the class
        constructor(name:string,id:number,balance:number){
            this.name=name;
            this.id=id;
            this._balance=balance
        }

        addBalance (amount : number) {    // by declaring a mehtod now we can change tha balance
            return this._balance+= amount;
        }
    }
    const poorPerson = new BankAccount('Jon',35,20);

    poorPerson.addBalance(45);
    class StudentAccount extends BankAccount {
        mehtod (){
            this.balance // error bcz child can't access private property
        }
    }
}
// now we will se protected modiefier
{
    class BankAccount {
        public readonly name:string;   
        readonly id:number;
        protected _balance:number;        // protected -> except in child class, can't access the value outside the class 
        constructor(name:string,id:number,balance:number){
            this.name=name;
            this.id=id;
            this._balance=balance
        }

        addBalance (amount : number) {    
            return this._balance+= amount;
        }
    }
    const poorPerson = new BankAccount('Jon',35,20);

    class StudentAccount extends BankAccount {
        method(){
            this._balance // with proteced child class can access
        }
    }
}