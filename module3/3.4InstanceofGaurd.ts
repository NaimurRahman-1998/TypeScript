{
  //make a parent Class
  class Person {
    firstName: string;
    lastName: string;
    age: string;
    constructor(firstName: string, age: string, lastName: string) {
      this.firstName = firstName;
      this.age = age;
      this.lastName = lastName;
    }

    getFullName() {
      return `${this.firstName + this.lastName}`;
    }
  }

  class Student extends Person {
    constructor(firstName: string, age: string, lastName: string) {
      super(firstName, lastName, age);
    }

    isStudent() {
      console.log(`He is a student and he is going to class`);
    }
  }

  class Teacher extends Person {
    constructor(firstName: string, age: string, lastName: string) {
      super(firstName, lastName, age);
    }

    isTeacher() {
      console.log(`He is a teacher and he is taking class`);
    }
  }

  // make instance
  const studnet1 = new Student("Jon", "Doe", "18");
  const teacher1 = new Teacher("Ross", "Geller", "35");

  // now making a function that will call the unique method of the child classes

  const getClass = (person: Student | Teacher) => {
    if (person instanceof Student) {            // checking if the argument is instance of a specific class
      person.isStudent();
    } else if (person instanceof Teacher) {
      person.isTeacher();
    }
  };

  // or we can do this

  const isStudent = (person: Person) : person is Student => {
    return person instanceof Student;
  };
  const isTeacher = (person : Person) : person is Teacher =>{
    return person instanceof Teacher
  }

  const getUniqueMethod = (person: Student | Teacher) => {
    if (isStudent(person)) {
      person.isStudent();
    } else if (isTeacher(person)) {
      person.isTeacher();
    }
  };

  getUniqueMethod(studnet1)
}
