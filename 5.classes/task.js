class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix(){
		this.state = 1,5 * this.state;
	}

	set state(number){
		if (number < 0) {
			this.realState = 0;
		}
		else if (number > 100) {
			this.realState = 100;
		}
		else {
			this.realState = number;
		}
	}
	get state(){
		return this.realState;
	}
}

//class Magazine extends PrintEditionItem {};

// class Book extends PrintEditionItem {};

//class NovelBook extends Book {};

//class FantasticBook extends Book {};

//class DetectiveBook extends Book {};