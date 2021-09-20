class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix(){
		state = 1,5 * state;
	}
	set state(number){
		let state;
		if (this.state(number) < 0) {
			state = 0;
		}
		else if (this._state(number) > 0) {
			state = 100;
		}
		else {
			state = this._state;
		}
	}
	get state(){
		return state;
	}
}

class Magazine extends PrintEditionItem {}

class Book extends PrintEditionItem {}

class NovelBook extends Book {}

class FantasticBook extends Book {}

class DetectiveBook extends Book {}