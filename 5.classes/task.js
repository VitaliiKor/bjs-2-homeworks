class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix(){
		return this.state = 1.5 * this.state;
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

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount){
		super (name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
};

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount){
		super (name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
};

class NovelBook extends Book {
		constructor(author, name, releaseDate, pagesCount){
		super (author, name, releaseDate, pagesCount);
		this.type = 'novel';
		}
};

class FantasticBook extends Book {
		constructor(author, name, releaseDate, pagesCount){
		super (author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
		}
};

class DetectiveBook extends Book {
		constructor(author, name, releaseDate, pagesCount){
		super (author, name, releaseDate, pagesCount);
		this.type = 'detective';
		}
};