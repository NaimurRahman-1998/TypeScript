{
    class Person { // ------> this is a parent class
        constructor (public name : string, public age : number, public role : string) {
            this.name = name;
            this.age = age;
            this.role = role;
        }
        getDetails() {
            return `${this.name} is a ${this.role} and ${this.age} years old`
        }
    }
    // now make a child class which will inherit the properties of th e parent class

    class Student extends Person {
                /**  | 
                     | --> using extends to inherit the properties of person class */

        constructor (public name : string, public age : number, public role : string) {
            super(name,age,role) //-----> by calling super() making the properties of parent class
        }

    }

    const student1 = new Student('jon',22,'student');
    console.log(student1.getDetails())

    // lets make another

    class Teacher extends Person {

        constructor(public name : string, public age : number, public role : string, public id : number){
            super(name,age,role)
            this.id= id;
        }
        takeClass () {
            return `${this.name} is a ${this.role} and id is : ${this.id}`
        }
    }

    const teacher1 = new Teacher('hisenburg', 45 , 'Teacher' , 445 )
    console.log(teacher1.takeClass);
    
}