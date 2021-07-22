'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let D, x, x1, x2;
  D = b**2-4*a*c;

if (D === 0){
	x = Number((-b/(2*a)).toFixed(2));
	arr = [x];
} else if (D > 0){
	x1 = Number(((-b + Math.sqrt(D) )/(2*a)).toFixed(2));
	x2 = Number(((-b - Math.sqrt(D) )/(2*a)).toFixed(2));
	arr = [x1, x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) { // percent - процентная ставка, 
																		//contribution - Начальный взнос
																		// amount - сумма кредита, 
																		//date - срок ипотеки
  let totalAmount, monthlyPayment, n, S, P, start_date, end_date; //S - тело кредита, 
										//P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ипотеки, ^ - возведение в степень
										// totalAmount - общая стоимость ипотеки
	if (isNaN(percent)){
		return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`)
	}
	if (isNaN(contribution)){
		return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)
	}
	if (isNaN(amount)){
		return (`Параметр "Сумма кредита" содержит неправильное значение "${amount}"`)
	}
	S = amount - contribution;
	P = percent/12/100;
	start_date = new Date(); //Date right now
	end_date = new Date(new Date(date)); //Date of end of loan
	n = (end_date.getFullYear() - start_date.getFullYear())*12 + (end_date.getMonth() - start_date.getMonth())
	monthlyPayment = S * (P + P / (((1 + P)**n) - 1));
	totalAmount = Number((monthlyPayment*n).toFixed(2));
	return totalAmount;
}
