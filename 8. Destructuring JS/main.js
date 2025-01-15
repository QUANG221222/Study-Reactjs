// Destructuring Arrays
//Gỉa sử chúng ta có 1 mảng như sau
const userName = ["Toàn", "Hà", "Huy"];
//Nếu muốn lấy ra các phần tử trong mảng trên, chúng ta làm như sau:
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3);
//Nhưng nếu sử dụng destructuring, chúng ta sẽ viết ngắn gọn hơn như sau:
const [user4, user5, user6] = userName;
console.log(user4, user5, user6);

//2.2 Có thể bỏ qua các phần tử không cần thiết bằng cách để dấu phẩy
const [, user7, user8] = userName;
console.log(user7);
console.log(user8);

//2.3 Destructuring với giá trị mặc định
const [user9, user10, user11, user12 = "Default Name"] = userName;
console.log(user12);

//2.4 Destructuring với rest paramenter
const [user13, ...abc] = userName;
console.log(user13);
console.log(abc);

//3. Destructuring Objects

const user = {
  name: "toàn",
  age: 20,
};
//Nếu muốn lấy ra các thuộc tính trong object trên,chúng ta làm như sau:
const ten = user.name;
const tuoi = user.age;
console.log(ten);
console.log(tuoi);

//Nhưng nếu sử dụng destructuring, chúng ta sẽ viết ngắn gọn hơn như sau:
//Lưu ý tên biến phải trùng với tên thuộc tính (key) trong object
const { name, age } = user;

//3.2 Đổi tên biến khi destructuring (dùng alias - tên ví danh)
const { name: ten1, age: tuoi1 } = user;
console.log(ten1);
console.log(tuoi1);

//3.3 Destructuring với giá trị mặc định:
const { name: ten2, age: tuoi2, gioitinh = "nam" } = user;
console.log(ten2);
console.log(tuoi2);
console.log(gioitinh);

//3.4 Destructuring với rest paramenter:
const { name: ten3, ...rest1 } = user;
console.log(ten3);
console.log(rest1);
