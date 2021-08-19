function Student(name, gender, age) {
    this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (... mark) {
    if(this.mark === undefined){ 
    this.mark = [mark];
    } else {
      this.mark.push(mark);
    }
}

Student.prototype.getAverage = function () {
  let average = 0, sum = 0;
  for (let i of this.marks){
  sum += i;
  }
  return average = sum/(this.marks.length);
}

Student.prototype.excludeStudent = function (reason) {
  this.reason = reason;
}

