import PropTypes from "prop-types";
//Cách 1
export default function TabButton({ children }) {
  //js
  // const btn = document.querySelector("button");
  // btn.addEventListener("click", () => {
  //   //làm một việt gì đó
  // });
  function handleClick() {
    alert("Nút bấm được click");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
TabButton.propTypes = {
  children: PropTypes.string.isRequired,
};
//Cách 2
// export default function TabButton({ batky }) {
//   return (
//     <li>
//       <button>{batky}</button>
//     </li>
//   );
// }
