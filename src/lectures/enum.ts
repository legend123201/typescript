/*
What: Tập hợp các giá trị cùng nhóm.
Why: Dễ dàng quản lý và truy xuất.
When: Sử dụng cho data một chiều ( định nghĩa enum --> rồi sử dụng. ) chứ ko phải trường hợp như là fetch api về rồi chuyển data nhận được về kiểu enum.
*/
enum Status {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
enum Status2 {
  PENDING = 3, // 3
  IN_PROGRESS, // 4
  DONE, // 5
  CANCELLED, // 6
}
enum Status3 {
  PENDING = 3,
  IN_PROGRESS = 5,
  DONE = 8,
  CANCELLED = 10,
}

// gán giá trị cho biến kiểu enum
const stats1: Status = Status.PENDING;
const stats2: Status = 1;
const stats3: Status = -1;

// enum dạng số thì có thể lấy chữ để suy ra số
console.log(Status[0]); // 'PENDING'
console.log(Status['DONE']); // 2

// String enum
enum MediaTypes {
  JSON = 'application/json',
  XML = 'application/xml',
}
fetch('https://example.com/api/endpoint', {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then((response) => {
  // ...
});
