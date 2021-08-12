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
    marks = [mark];
    } else {
      marks = marks.push(mark);
    }
}

Student.prototype.addMarks = function (... mark) {
  this.mark = mark;
}

Student.prototype.getAverage = function () {
  let average = 0, sum = 0;
  for (let i of marks){
  sum += i;
  }
  average = sum/(marks.length);
  return average;
}


Student.prototype.excludeStudent = function (reason) {
  this.reason = reason;
}

