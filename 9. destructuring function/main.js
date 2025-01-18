//Gỉa sử có 1 đối tượng đơn hàng
const donHang = {
  maDonHang: 101,
  tienTe: "VND",
  tongTien: 50000,
};

//1. Không sử dụng Destructuring
function xuLyDonHang(donHang) {
  const maDonHang = donHang.maDonHang;
  const tienTe = donHang.tienTe;
  const tongTien = donHang.tongTien;
  console.log(`Mã đơn hàng : ${maDonHang}`);
  console.log(`Tiền tệ : ${tienTe}`);
  console.log(`Tổng tiền : ${tongTien}`);
}
xuLyDonHang(donHang);
//2. Sử dụng Destructuring
function xuLyDonHangDestructuring({ maDonHang, tienTe, tongTien }) {
  console.log(`Mã đơn hàng : ${maDonHang}`);
  console.log(`Tiền tệ : ${tienTe}`);
  console.log(`Tổng tiền : ${tongTien}`);
}
xuLyDonHangDestructuring(donHang);

//3. Destructuring với giá trị mặc định
function xuLyDonHangDefault({ maDonHang = 0, tienTe = "VND", tongTien = 0 }) {
  console.log(`Mã đơn hàng : ${maDonHang}`);
  console.log(`Tiền tệ : ${tienTe}`);
  console.log(`Tổng tiền : ${tongTien}`);
}
//Gọi hàm với dữ liệu thiếu
xuLyDonHangDefault({ maDonHang: 101 });

//4. Destructuring với rest paramenter
function xuLyDonHangRest({ maDonHang, ...rest }) {
  console.log(`Mã đơn hàng : ${maDonHang}`);
  console.log(rest);
}

//Gọi hàm
xuLyDonHangRest({
  maDonHang: 101,
  tienTe: "USD",
  tongTien: 10000,
  khachHang: "Nhat Quang",
});

function xuLyDonHangRestAlias({ maDonHang: ma, ...rest }) {
  console.log(`Mã đơn hàng : ${ma}`);
  console.log(rest);
}
xuLyDonHangRestAlias({
  maDonHang: 101,
  tienTe: "USD",
  tongTien: 10000,
  khachHang: "Nhat Quang",
});
