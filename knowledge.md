<!-- 1. React JS là gì? -->

_ReactJS_ : là 1 thư viện js dùng để xây dựng giao diện người dùng (UI)
\_Được Facebook phát triển, và hiện họ sử dụng vào các sản phẩm của chọ như Facbook, Instagram,...(_meta: hệ sinh thái_)

_Component(thành phần)_: là 1 đối tượng của js là thành phần cấu hình nên giao diện người dùng, khối mã hoàn chỉnh _html,css,js_
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

<!-- 10.Review-Javascript-Spread-Operator -->

_Spread Operator(...)_:

- tác dụng:
  `Trải các phần tử của một mảng` ra thành `Các phần tử riêng lẻ`
  `Trải các cặp key-value` trong một đối tượng `để kết hợp hoặc sao chép`
  _Thường được sử dụng để:_
  -Gộp (merge) dữ liệu
  -Sao chép mảng hoặc đối tượng
  -Thêm dữ liệu mới một cách linh hoạt

<!-- 11. React js - Cách Sử Dụng JSX Trong React
 -->

_File `.jsx` là `javascript sytax extension` - cú pháp `cú pháp mở rộng của JavaScript` cho phép bạn viết mã đánh dấu giống HTML bên trong tệp JavaScript.
`Trình duyệt không` thể `hiểu` trực tiếp \_file.jsx_, mà cần một công cụ để chuyển đổi sang `javascript` (Vite)
_Khi nào dùng .js .jsx theo trường phái dùng .jsx_:thêm .jsx để giúp phân biệt rõ file đấy có render UI, clean code hơn còn .js thì sẽ là các function xử lý logic.

_Fragment là gì?_
\_Các viết sử dụng cặp thẻ `<>` và `</>` là cú pháp `Fragment trong React`. Đây là một tính năng giúp _nhóm nhiều phần tử con lại với nhau_ mà không cần thêm 1 thẻ HTML bao bọc nào (như div, span, v.v),...

_Lý do sử dụng Fragment?_:
`1. Không thêm thẻ dư thừa vào DOM `: Khi bạn chỉ cần nhóm các phần tử lại mà không muốn thêm thẻ HTML bao bọc, Fragment giúp tránh việc làm 'bẩn' cấu trúc DOM.
`2. Giữ cho mã sạch sẽ (clean code):` giảu thiểu việc sử dụng các thẻ không cần thiết chỉ để bọc nội dung

<!-- 12. React js - Component trong React -->
`Quy ước Function trong ReactJS`
_Như bạn đã thấy trong react, \_component thật ra chỉ là 1 hàm js_, tuy nhiên nó phải tuân theo phải tuân theo quy tắc:

1. Tên function viết hoa chữ cái đầu\_. Tại vì nhìn vào sẽ phân biệt đâu là thẻ tùy chỉnh và đâu là thẻ html mặc định
2. Và nó phải _return về giá trị có thể hiển thị được_, và là _1 phần tử duy nhất_

`Vanilla JavaScript` là thuật ngữ dùng để chỉ mã JS được viết mà không cần bất kỳ thư viện hoặc khuôn khổ bên ngoài nào

<!-- 14.1 React js _ Props Trong React Là Gì -->

`Props (Properties)` là một đối số được truyền vào các component của React.

_Trong react_, chúng ta có thể tái sử dụng component để render 1 phần tử dễ dàng mà không cần phải code lại, và có thể gọi lại nhiều lần tùy thích. Bằng cách sử dụng **props(property)**, ta có thể tùy chỉnh nội dung hành vi của mỗi lần gọi component.

<!-- 14.2 React js _ Tối ưu hoá code với Destructuring và Spread Operator  -->

`Bước 1`: Sử dụng _Spread Operator_ để trải (spread) các thuộc tính của một object
`Bước 2`: Sử dụng _Destructuring_ để giảm thiểu gọi: props

<!-- 14.5 React js _ props.children_ -->

`children props`: tự động chứa mọi thứ bên trong cặp mở và đóng của component. `props.children` sẽ `hiển thị nội dung` mà bạn `đặt giữa cặp thẻ` <TabButton> và </TabButton> khi sử dụng component này
-Sử dụng `Destructuring` để giảm thiểu gọi: props. React sẽ tự động hiểu `nội dung giữa thẻ mở và thẻ đống là props.children`

<!-- 14.6 React js - React onClick -->

`onClick và các event handler khác:` là `props đặt biệt` được React `hỗ trợ để gắn sự kiện` vào
Bạn `Cần truyền một hàm sử lý` sự kiện vào `onClick để xác định hành động khi người dùng click`

<!-- 14.7 React js - Truyền hàm sự kiện từ Component cha vào Component con -->
