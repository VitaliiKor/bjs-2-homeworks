function parseCount(val) {
    let result = Number.parseInt(val);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(val) {
    try {
        return parseCount(val);
    } catch (e) {
        return e;
    }
}

class Triangle {
	constructor(a, b, c){
		this.a = a;
		this.b = b;
		this.c = c;
		if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a){
			throw new Error ('Треугольник с такими сторонами не существует');
		}
	}
		
	getPerimeter(){
		return (/*console.log('Периметр треугольника = ' + (*/this.a+this.b+this.c/*) + ' единиц')*/);
	}
	
	getArea(){
		let p = 0.5*(this.a+this.b+this.c);
		return/*(console.log('Площадь треугольника = ' + (*/+(Math.sqrt (p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3)/*) + ' квадратных единиц'))*/;
	}
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return new class Object2Methods {
            getArea = () => 'Ошибка! Треугольник не существует';
            getPerimeter = () => 'Ошибка! Треугольник не существует';
        }
    }
}
