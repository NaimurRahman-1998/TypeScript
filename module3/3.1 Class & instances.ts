{
    // General Class in TS
    class Animal {
        name:string;
        type:string;
        sound:string;
        age:number;
        constructor(name : string, type:string, sound:string ,age:number) {
            this.name = name;
            this.type = type;
            this.sound = sound
            this.age = age
        }

        makeSound () {
            return `${this.name} sounds like ${this.sound}`
        }
    }

    const dog = new Animal('jack' , "bulldog" , "woof" , 5)
    console.log(dog.makeSound())
    console.log(dog.name);
    
}
//using "public" keyword which is a parameter property we dont have to declare the property type
{
    class Animal {
        constructor(public name : string,public type:string,public sound:string ,public age:number) {
            this.name = name;
            this.type = type;
            this.sound = sound
            this.age = age
        }

        makeSound () {
            return `${this.name} sounds like ${this.sound}`
        }
    }
}