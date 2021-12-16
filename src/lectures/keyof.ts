export {};
// trong typescript có từ khóa "keyof", trong javascript không có
// dùng để liệt kê tất cả các key trong object
interface Student {
  id: number;
  name: string;
}

type StudentKeys = keyof Student;

const key: StudentKeys = 'id';
const key2: StudentKeys = 'name';
