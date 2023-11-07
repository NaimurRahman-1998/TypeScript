{
    class Counter {
        count = 0;
        increament(number : number){
            return this.count+= number
        }
        decreament(number : number){
            return this.count-= number
        }
    }

    const instance1 = new Counter();
    const instance2 = new Counter();


    console.log(instance1.increament(1)) // ---> different memeory  ->1
    console.log(instance2.increament(1)) // ---> different memeory  ->1
}
// so we will use static method 
{
    class Counter {
        static count = 0;
        increament(number : number){
            return Counter.count+= number
        }
        decreament(number : number){
            return Counter.count-= number
        }
    }

    const instance1 = new Counter();
    const instance2 = new Counter();

    console.log(instance1.increament(1)) // ---> same memeory  ->1
    console.log(instance2.increament(1)) // ---> same memeory  ->2
}
// we can make the method also static
{
    class Counter {
        static count = 0;
        static increament(number : number){
            return Counter.count+= number
        }
        static decreament(number : number){
            return Counter.count-= number
        }
    }

    console.log(Counter.increament(1)) // ---> same memeory  ->1
    console.log(Counter.increament(1)) // ---> same memeory  ->2
}