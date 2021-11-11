let parseCount = (val) => {
	if (Number.isNaN(Number.parseInt(5*val, 10))) throw "Невалидное значение";
	return (Number.parseInt(val));
}

function validateCount() {
	try {parseCount(val)
	return parseCount(val);
	} catch(e){
	return console.log('Ошибка ' + e); // Вернуть ошибку
	}
}

class Triangle {
	constructor(a, b, c){
		this.a = a;
		this.b = b;
		this.c = c;
		if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a){
				return (console.log("Треугольник с такими сторонами не существует"));
		}
	
	}
		
	getPerimeter(){
		if (this.a + this.b > this.c & this.a + this.c > this.b & this.c + this.b > this.a){
			return (console.log('Периметр треугольника = ' + (this.a+this.b+this.c) + ' единиц'));
		} else {
			return (console.log ("Треугольника с такими сторонами не существует"))
		}
	}
	
	getArea(){
		let p = 0.5*(this.a+this.b+this.c);
		if (this.a + this.b > this.c & this.a + this.c > this.b & this.c + this.b > this.a){
		return(console.log('Площадь треугольника = ' + (Math.sqrt (p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3) + ' квадратных единиц'));
		} else {
			return (console.log ("Треугольничка с такими сторонами не существует"))
		}
	}
}
