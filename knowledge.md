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
