{
    // if there is a same method in various classes , but the method will act according to the instance of the specific class

    class Shape {
        getArea () {
            console.log(0);
        }
    }

    class CircleArea extends Shape {
        radius : number;
        constructor(radius : number){
            super();
            this.radius = radius;
        }
        getArea() {
            console.log(3.1214 * (this.radius)*(this.radius));
            
        }
    }

    const shape = new Shape();
    const circle = new CircleArea(10) 

    const getShapeArea = (param : Shape) =>{
        param.getArea()
    }

    getShapeArea(shape)      // -> 0
    getShapeArea(circle)     // ->312.14
    // calling same method but returning different value depending on Class instance
}