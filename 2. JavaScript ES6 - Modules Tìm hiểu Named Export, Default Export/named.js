//Cách 1: Khai báo hàm biến class rồi export
// const myVar = 10000;
// function myFunction() {
//   console.log("xin chào đây là hàm");
// }

//export { myVar, myFunction };

//Cách 2: export tại nơi khai báo
export const myVar = 10000;
export function myFunction() {
  console.log("xin chào đây là hàm");
}

//file có 1 export default
let df2 = "đây là biến default 2 trong named.js";
export default df2;
