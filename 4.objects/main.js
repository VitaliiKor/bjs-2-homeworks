let student1 = new Student("Tony", "male", 17);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);

let student2 = new Student("Buzz", "female", 19);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')

console.log(student1); 
console.log(student2);
console.log(student1.getAverage())
console.log(student2.getAverage());
console.log(student1.addMarks(15, 16, 17, 1, 31, 12, 15, 5, 3, 5, .1, 0.5));
console.log(student2.addMarks(5, 6, 7, 11, 3, 2, 5, 25, 33, 55, 1, 0.5));
