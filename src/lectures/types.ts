// ---------- EXPLICIT TYPES (loại rõ ràng)-----------

let s: string = 'abc';
let n: number = 12;
let b: boolean = true;
let arr: number[] = [1, 2, 3];
let c: any;

// ---------- INFERED TYPES (loại suy luận)-----------
// các kiểu dữ liệu đơn giản thì nó tự hiểu

let s2 = 'abc';
let n2 = 12;
let arr2 = [1, 2, 3];

/*
- khi chuyển từ ts qua js thì nó sẽ bỏ hết khai báo kiểu dữ liệu (thuật ngữ: eraised type)
- khi chuyển từ ts sang js thì js có es5 và es6, nó sẽ tùy vào môi trường (trong tsconfig), 
thì es5 ko có let nên nó sẽ dùng var, vậy nên để chắc ăn thì nên dùng cái mới nhất. (thuật ngữ: downleveling)
*/

// mình có thể chỉ định 1 giá trị cụ thể làm kiểu data, và chỉ đc gán dữ liệu đó cho nó
let customA: 2 = 2;
const normalA = 2; //dòng này với dòng trên kia là 1, hover vào biến normalA sẽ thấy nó giống dòng trên

// dù biến student là const nhưng mình vẫn thay đổi đc thuộc tính, bởi vì const nghĩa là mình ko đc thay đổi đỉa chỉ object (ko đc gán lại) thôi, chứ mình vẫn thay đổi đc giá trị trong nó.
// điều này đúng với cả array, dù là const nhưng vẫn pop push được bình thường.
const student1 = {
  a: 1,
  b: 2,
};
student1.a = 10; // vẫn sửa đc nhé

// dùng "as const" thì student2 ko thay đổi đc nhé, hover vào sẽ thấy nó có thêm dòng readonly
const student2 = {
  a: 1,
  b: 2,
} as const;

//ngoài ra "as" còn giúp mình định nghĩa biến khi truyền vào hàm vì 1 số lúc typescript ko hiểu kiểu dữ liệu mà mình phải nhúng tay vào
function getStatusName(state: 'active') {
  console.log(state);
}

let string = 'active';
getStatusName(string as 'active'); //ko có as nó sẽ báo lỗi vì biến string là 1 biến có thể thay đổi, nhưng cái hàm đó nhận param là const, có thể biến biến đó thành const nhưng mà mình đang học về "as"

// never type
// đây là ví dụ về type alias và extend của nó
type NewType = number & string; // never
