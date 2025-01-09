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
