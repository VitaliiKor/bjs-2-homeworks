//let val = 1;
function counterGenerator(val) {
	val = 3;
	function showCounter() {
		console.log(val);
	}
	function increaseCounter() {
		val += 1;
	}
	function decCounter() {
		val -= 5;
	}
	return [showCounter, increaseCounter, decCounter];
}
let [show, increase, dec] = counterGenerator();

show();
increase();
show();
dec();
show();
increase();
show();
dec();
show();
increase();
increase();
show();

