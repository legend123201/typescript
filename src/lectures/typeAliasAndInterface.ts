/*
- TYPE ALIAS VÀ INTERFACE CHỨC NĂNG GIỐNG NHAU (NHƯNG INTERFACE MẠNH HƠN CHÚT), NÊN MẶC ĐỊNH CỨ DÙNG INTERFACE, ĐẾN KHI NÀO KO DÙNG ĐC THÌ MỚI DÙNG TYPE. (trên mạng ngta recomand như vậy)
- dấu "|" nghĩa là union type, thuộc tính đó có thể có 1 trong những kiểu dữ liệu đó.
- chữ "readonly" nghĩa là chỉ để đọc, mới khởi tạo lần đầu thì đc phép gán giá trị nhưng về sau chỉ dùng để đọc.
- dấu "?" nghĩa là thuộc tính đó mình có thể không cần khi mình khởi tạo hoặc gán dữ liệu.
*/

interface Student {
  readonly id: number | string;
  name: string;
  age?: number;
  grade: 'A' | 'B' | 'C' | 'D';
}

type Student2 = {
  readonly id: number | string;
  name: string;
  age?: number;
  grade: 'A' | 'B' | 'C' | 'D';
};

// Intersection type: nghĩa là mình sẽ gộp các thuộc tính của các thằng cha
// lưu ý: thuộc tính nào bị trùng thì nó sẽ suy ra thuộc tính kết hợp, ví dụ đều là string thì cuối cùng ra string (như trường hợp name: string ở dưới)
// nếu như 1 cái number, 1 cái string thì nó sẽ ra unknow

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

// interface way
interface Employee extends Identity, Contact {}
interface Customer extends Identity, BusinessPartner, Contact {}

// type alias way
type Employee2 = Identity & Contact;
type Customer2 = BusinessPartner & Contact;

let employee: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
};

let customer: Customer = {
  id: 1,
  name: 'ABC Inc.',
  credit: 1000000,
  email: 'sales@abcinc.com',
  phone: '(408)-897-5735',
};

// Add new props: Thêm thuộc tính mới dựa trên cái đã có bằng cách khai báo đè
// Chỉ có interface mới làm đc

interface User {
  id: number;
  name: string;
}

// declaration merging
// works, no error

interface User {
  age?: number;
}

const john: User = {
  id: 1,
  name: 'John',
  age: 18,
};

// type alias sẽ bị lỗi liền

type User2 = {
  id: number;
  name: string;
};
// ts error: Duplicate identifier 'Student'.
// type User2 = {
// age?: number;
// }

// TRƯỜNG HỢP KHÔNG DÙNG INTERFACE ĐƯỢC
// Mapped type
// ví dụ bên dưới giúp mình tạo ra 1 kiểu dữ liệu mà mình lấy các thuộc tính của student và kiểu dữ liệu của nó là boolean
// hãy hover vào MappedTypes là thấy
interface Student3 {
  id: number;
  name: string;
}

type MappedTypes = {
  [Key in keyof Student3]: boolean;
};
