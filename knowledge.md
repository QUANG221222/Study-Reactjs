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

_Xem các file thay đổi_

<!-- 14.9 State React -->

_Vấn đề:_ các `hàm chỉ được gọi 1 lần khay chạy chương trình`, khi chúng ta click vào nút, thì hàm handleSelect được gọi, nhưng App() thì không được gọi lại vì vậy nó không gán lại giá trị vào tabContent

\_Để cập nhật 1 thành phần chúng ta cần sử dụng `useState` - (_State có nghĩa là trạng thái, trong ngữ cảnh này, nó có nghĩa là trạng thái của dữ liệu, thay đổi từ A -> B_)
\_Tất cả các thành phần bắt đầu bằng tiền tố `use`... được gọi là `react Hook`. `Hook bản chất là các hàm tính năng` được react thiết kế sẵn.

\_ 1. Khi sử dụng bắt buộc phải `Gọi tại cấp cao nhất của hàm thành phần `
\_ 2. Không được `Gọi bên trong các câu lệnh if, while,...`

`useState` nhận một `giá trị khởi tạo (initState) làm đối số
\-Trả về một mảng gồm 2 phần tử: `giá trị hiện tại của State`và`hàm thay đổi State`
`const [state, setState] = useState(initState)`

<!-- 14.21 React Tips Tối ưu -->

\_Trong JSX, nếu 1 tag `bắt đầu bằng chữ thường vd: <div> , <span>`, React sẽ hiểu `đó là một thẻ HTML gốc`
\_Nếu `Một tag bắt đầu bằng chữ hoa vd: <MyComponent>`, React sẽ hiểu `đó là một thành phần của component`

<!-- 15. Sai Lầm Khi sử dụng useState Trong React -->

\_Một trong những lỗi phổ biến nhất khi làm việc với state trong React là `nghĩ rằng state thay đổi ngay lập tức sau khi gọi setState()`. Tuy nhiên, React `Không cập nhật state ngay lập tức` mà chỉ `đánh dấu state sẽ thay đổi trong lần render tiếp theo`.

_Khi gọi setState, React thực hiện các bước sau:_

1.Đánh dấu state sẽ thay đổi
2.Chờ render tiếp theo
3.Cập nhật state mới khi render lại component
-->Lưu ý: trong chế độ `StrictMode, React sẽ render 2 lần trong môi trường dev` để phát hiện lỗi tiềm ẩn trong các effect hoặc lifecycle methods. Nhưng trong `production, React sẽ chỉ render 1 lần`.

<!-- 16.1 React State_ Hiểu Rõ One-Way Binding & Two-Way Binding -->

\_Theo mặc định Bất cứ khi nào `state thay đổi`, `giao diện (UI)` sau khi `được React re-render` thì `giá trị mới sẽ được hiển thị`. Đây chính là cơ chế của `One-Way Binding` trong React.

`Two-Way Binding là gì ?`
*là cơ chế giúp đồng bộ dữ liệu giao diện người dùng (UI) và state trong React.
\_Khi dữ liệu trong `UI thay đổi --> state` sẽ cập nhật ngay lập tức. Khi `state thay đổi --> UI sẽ tự động cập nhật theo`.
*Điều này giúp việc quản lý dữ liệu trở nên dễ dàng hơn, đặc biệt trong các form nhập dữ liệu.
\_`Two-Way Binding trong React không chỉ dùng với input` mà có thể áp dụng với nhiều thành phần UI khác như `checkbox, radio, select, range, toggle, ...`

<!-- 17.1 React CSS 01 - Dùng CSS toàn cục với Import CSS -->

`Điểm quan trọng `: Mặc dù chúng ta đưa CSS vào trong component, nhưng khi render, toàn bộ CSS được đưa ra ngoài toàn cục

<!-- 17.3 React CSS - Inline styling in Reactjs -->

\_Chúng ta sẽ không truyền inline css theo cách thông thường như vầy `style="color: red"` trong react. Thay vào đó chúng ta sẽ truyền giá trị động trong jsx, sử dụng đối tượng để truyền dưới dạng key và value `style={{color: red}}`. Dấu ngoặc đầu tiên là truyền giá trị của biến của jsx, còn dấu ngoặc thứ 2 là đối tượng
`Lưu ý: 1 số thuộc tính phải tuân theo quy tắc js, ví dụ` : background-color --> backgroundColor --> text-align -> textAlign
`Ưu điểm` :
\_Inline css thêm vào mã jsx, sẽ chỉ áp dụng lên thành phần đó
\_Chúng ta có thể sử dụng inline css trong 1 số trường hợp cụ thể
`Nhược điểm` :
\_Phải thêm mã vào từng thẻ html riêng lẻ, và mã bị trộn lẫn vào jsx không có sự tách biệt css, và jsx
\_Không tái sử dụng được

<!-- 17.4 CSS Module trong React là gì ? ->

<!-- 18.2 React useRef_ Làm Chủ .current để Điều Khiển Component -->

`userRef` là một hook đặc biệt trong React, dùng để `tạo ra một đối tượng tham chiếu (reference object)`
`userRef()` trả về một đối tượng có property.current
\_Khi gán thuộc tính `ref={playerName}` (ví dụ: `<input ref={playerName}>`)
\_React sẽ tự động gán element DOM thực tế vào `playerName.current`

`?` : kiểm tra tất cả giá trị falsy
`a ?? b`: Kiểm tra null và undefined

<!-- 18.3 So sánh useRef và useState_ Khi nào dùng cái nào? -->

\_Khi khởi tạo lần đầu tiền, `propety.current.value` chưa có giá trị, nó `đang là undefine` nên nó không dùng được _playerName.current.value ?? "NoName"_

_State(trạng thái)_: có ảnh hưởng đến UI. Khi thay đổi, giao diện sẽ cập nhật lại (re-render).
_Refs(tham chiếu)_: Không có ảnh hưởng đến UI. Thay đổi ref không làm giao diện cập nhật lại

<!-- 18.8 useImperativeHandle Hook -->

`useImperativeHandle` cho phép `component con chủ động chỉ định những hàm hoặc thuộc tính ` nào sẽ được `'lộ' ra ngoài cho component cha truy cập ` qua ref
`Component cha chỉ được gọi những hàm/thuộc tính ` được `return trong object của userImperativeHandle`, còn lại hoàn toàn không được truy cập.
==> Tóm lại:
`Chỉ những gì được khai báo trong userImperativeHandle mới dùng được từ cha.`
`Các biến, hàm, DOM khác là private, cha không truy cập được`
