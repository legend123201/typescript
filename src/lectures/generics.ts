export {};
// generic nghĩa là mình tạo nên 1 biến mà biến đó có thể thay đổi tùy vào ngữ cảnh, đc đặt trong dấu "< >"
interface List<T> {
  length: number;
  [index: number]: T;
}

interface Student {
  id: number;
  name: string;
}

const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ['easy', 'frontend'];
const studentList: List<Student> = [
  { id: 1, name: 'easy' },
  { id: 2, name: 'frontend' },
];
