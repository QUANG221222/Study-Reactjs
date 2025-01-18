<!-- 1. React JS là gì? -->

_ReactJS_ : là 1 thư viện js dùng để xây dựng giao diện người dùng (UI)
\_Được Facebook phát triển, và hiện họ sử dụng vào các sản phẩm của chọ như Facbook, Instagram,...(_meta: hệ sinh thái_)

_Component(thành phần)_: là 1 thành phần cấu hình nên giao diện người dùng, khối mã hoàn chỉnh _html,css,js_
_Giải thích_: nếu trước chỉ có html,css,js thì sẽ có nhiều phần bị lặp lại, nên người ta đưa ra ý tưởng chia bố cục trang web thành các thành phần nhỏ hơn

_Web xây dựng vào react ko load lại toàn bộ trang_:
_Virtual DOM (document object Model ảo)_ : là bản sao của DOM thật. chỉ tồn tại trong bộ nhớ ứng dụng
_React update component qua 4 bước_

1. _Render lần đầu_: react tạo 1 bảng DOM ảo và hiển thị lên giao diện
2. _Update virtual DOM_: Khi có thay đổi trong state hoặc props, react tạo 1 DOM ảo mới
3. _Diffing Alrogithm(thuật toán khác biệt)_: so sánh giữa Virtual DOM cũ và mới để xác định sự khác biệt.
4. _Cập nhật DOM thật_: chỉ những thành phần thay đổi được áp dụng vào DOM thật

<!-- 2. JavaScript ES6 - Modules Tìm hiểu Named Export, Default Export  -->

_Module là gì?_: là _1 file chứa mã JS_ mà có thể tái sử dụng ở các file khác.

\_Trong JS, Export được sử dụng để chia sẻ các hàm, biến, class từ 1 Module. có 2 cách để 2 export:
_Name Export_: Cho phép export nhiều phần tử từ 1 file, khi cần thì ta sử dụng từ khóa _Import_ từ Name Export.

_Default Export_: _Mỗi module chỉ có 1 default export_
\_Trong 1 module thì chỉ có 1 export default
\_Nếu 1 file js có 1 export default, nó sẽ không được gộp vào đối tượng _{as 'name'}_ khi sử dụng _import \* as_

_Đổi tên import_: df export không cần dùng _as_, named export cần cùng _as_

<!-- 3. Hướng Dẫn Tạo Dự Án React CodeSandbox vs Local Project using VScode -->

_Bước 1_: cài đặt môi trường nodejs
_Bước 2_: gõ lệnh _npm install --global yarn_ (yarn nhanh hơn npm :D)
_Bước 3_: gõ lệnh _yarn create vite_
_Bước 4_:
\_cd "file name"
\_yarn
\_yarn dev

<!-- 8. Destructuring JavaScript -->

_Destructuring_ là một tính năng quan trọng, cho phép bạn _trích xuất dữ liệu_ từ _arrays_ hoặc _object_ một cách dễ dàng ngắn gọn.
_Với array_: trích xuất dữ liệu _dựa trên vị trí (index)_
_Với Object_: trích xuất dữ liệu _dựa trên thuộc tính (property name)_
_Những kiến thức mới:_:
_Destructuring Array_ : có thể đặt trong mảng 1 tên bất kỳ vì nó tách phần tử bằng vị trí index, có thể tạo phần tử mặc định, và dùng _...rest paramenter_
_Destructuring Object_ : ko thể đặt trong {} 1 tên bất kỳ vì nó tách phần tử bằng dự vào key(thuộc tính) nên muốn thay đổi phải dùng đến _tên ví danh(alias)_, có thể tạo phần tử mặc định, và dùng _...rest paramenter_

<!-- 9. destructuring function -->

_Destructuring_: còn có thể được sử dụng trực tiếp trong tham số (parameter) của một hàm. Điều này giúp _tránh việc lặp lại truy cập thuộc tính bên trong thân hàm_
