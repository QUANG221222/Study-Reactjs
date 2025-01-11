//3. arrow function
console.log("arrow function");
//3.1 Với trường hợp tổng quát, cú pháp
let ten_ham = (parameters) => {
  //Thân hàm
  //Return something
};

let multiplyAndAddArrow = (c, d) => {
  let product = c * d;
  let sum = c + d;
  return product + sum;
};

let multiplyAndAddArrow2 = (c, d) => c * d + c + d;
let kq4 = multiplyAndAddArrow(4, 5);
console.log("Cách 1: ", kq4);
console.log(multiplyAndAddArrow2(4, 5));

//3.2 khi thân hàm chỉ có 1 câu lệnh duy nhất
let nhan = (a, b) => a * b;
let kq5 = nhan(9, 5);
console.log(kq5);

//3.3 khi trả về 1 đối tượng
// let person = (ten, tuoi) => {
//   return {"họ và tên": ten, "hưởng thọ": tuoi};
// };

let person = (ten, tuoi) => ({ "họ và tên": ten, "hưởng thọ": tuoi });

console.log(person("Lan", 70));
