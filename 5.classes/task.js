class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
	this.name = name;
	this.releaseDate = releaseDate;
	this.pagesCount = pagesCount;
	this.state = 100;
	this.type = null;
	}
}

class Magazine extends PrintEditionItem {}

class Book extends PrintEditionItem {}

class NovelBook extends Book {}

class FantasticBook extends Book {}

class DetectiveBook extends Book {}