

class Square {
  topLeft;
  side;
}

class Rectangle {
  topLeft;
  height;
  width;
}

class Circle {
  center;
  radius;
}

class Geometry {
  PI = 3.1415926;

  area(shape) {
    if(shape instanceof Square) {
      return shape.side * shape.side
    } else if (shape instanceof Rectangle) {
      return shape.width * shape.height
    } else if(shape instanceof Circle) {
      return this.PI * shape.radius * shape.radius
    }
  }
}


class Shape {
  area() {}
}

class Square extends Shape {
  topLeft;
  side;

  area(shape) {
    return shape.side * shape.side
  }
}

class Rectangle extends Shape {
  topLeft;
  height;
  width;

  area(shape) {
    return shape.width * shape.height
  }
}

class Circle extends Shape {
  center;
  radius;

  PI = 3.1415926;

  area(shape) {
    return this.PI * shape.radius * shape.radius
  }
}