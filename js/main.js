class Shape{
    calculateArea(){

    }

}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius=radius;

    }

    calculateArea(){
       
        let a=(3.14*this.radius*this.radius);
        console.log(`The Area of circle is ${a}`);

        
    }
}

class Triangle extends Shape{
    constructor(width,height){
        super()
        this.width=width;
        this.height=height;

    }

    calculateArea(){
        let b=1/2*(this.width*this.height);
        console.log(`The are of Triangle is ${b}`);
    }
}

let circle=new Circle(10);
circle.calculateArea();

let triangle=new Triangle(10,5);
triangle.calculateArea()