export {};
// return type của function thì cũng như biến, nó có thể tự hiểu những kiểu trả về đơn giản
// nhưng mình cứ nên khai báo mọi trường hợp cho chắc nhé

function showName(name: number): void {
  console.log(name);
}

function sum(a: number, b: number): number {
  return a + b;
}

// mình khởi tạo param optional, là khi truyền vào ko có nó cũng đc
function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// mình định nghĩa param có default value, người ta ko truyền vào thì mặc định nó có giá trị đó
function getLength1(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// LƯU Ý: ko thể vừa dùng optional và vừa dùng default value cùng 1 lúc, vì mâu thuẫn.
// ts error: Parameter cannot have question mark and initializer.ts(1015)
// function getLength2(numberList?: number[] = []) {
//   return Array.isArray(numberList) ? numberList.length : 0;
// }

// mình có 3 cách khai báo hàm
// cách 1: dùng tốt cho những hàm đơn giản như hàm sum, swap,...
// cách 2: dùng tốt cho hàm trung bình.
// cách 3: dùng tốt cho hàm lớn có nhiều param, quản lý param tốt hơn.

// CÁCH 1:
function createStudent(id: number, name: string, age: number) {
  console.log(id, name, age);
}
createStudent(1, 'Bob', 18);

// CÁCH 2
function createStudent1(student: { id: number; name: string; age: number }) {
  const { id, name, age } = student;
  console.log(id, name, age);
}
createStudent1({
  id: 1,
  name: 'Bob',
  age: 18,
});

// mình có thể ghi thuộc tính trên phần param của hàm luôn
function createStudent2({ id, name, age }: { id: number; name: string; age: number }) {
  console.log(id, name, age);
}

createStudent2({
  id: 1,
  name: 'Bob',
  age: 18,
});

// CÁCH 3:
interface Student {
  id: number;
  name: string;
  age: number;
}

function createStudent3({ id, name, age }: Student) {
  console.log(id, name, age);
}

createStudent3({
  id: 1,
  name: 'Bob',
  age: 18,
} as Student);
