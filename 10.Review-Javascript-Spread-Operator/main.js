//1. Spread Operator với mảng
//Danh sách sở thích hiện tại
let soThich = ["đọc sách", "nghe nhạc"];

//Sở thích mới muốn thêm
const soThichMoi = ["Đi du lịch", "xem phim"];

//Cập nhật danh sách sở thích
soThich = [...soThich, "abc", ...soThichMoi];

console.log(soThich);

//2. Spread Operator với object
//Thông tin người dùng ban đầu
let user = {
  id: 1,
  name: "Nguyễn Văn A",
  email: "nguyenvana@gmail.com",
  role: "member",
};

//Thông tin cần cập nhật
const updates = {
  address: "123 Nguyễn Văn A, Đức Thọ",
  role: "admin",
};

//Cập nhật thông tin người dùng
user = { ...updates, ...user };
console.log(user);

//2 thuộc tính giống nhau thì thằng đứng sau sẽ lấy thuộc tính của nó
