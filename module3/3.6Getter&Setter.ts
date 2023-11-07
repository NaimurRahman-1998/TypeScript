{
    class BankAccount {
        public readonly name:string;   
        readonly id:number;
        protected _balance:number;        
        constructor(name:string,id:number,balance:number){
            this.name=name;
            this.id=id;
            this._balance=balance
        }

        addBalance (amount : number) {    
            this._balance+= amount;
        }

        getBalance () {
            return this._balance
        }
    }
    const poorPerson = new BankAccount('Jon',35,20);
    
    poorPerson.addBalance(30);
    const myBalance = poorPerson.getBalance()
    console.log(myBalance);
    
}
// now without using method we can get and set the value of the propertiy
{
    class BankAccount {
        public readonly name:string;   
        readonly id:number;
        protected _balance:number;        
        constructor(name:string,id:number,balance:number){
            this.name=name;
            this.id=id;
            this._balance=balance
        }

        set deposit (amount:number){
            this._balance+=amount;
        }

        get balance () {
            return this._balance
        }
    }
    const poorPerson = new BankAccount('Jon',35,20);
    
    poorPerson.deposit = 30;  // now we can access value like property
    const myBalance = poorPerson.balance
    console.log(myBalance);
}