import PropTypes from "prop-types";
//Cách 1
export default function TabButton({ children, onSelect, isSelected }) {
  //js
  // const btn = document.querySelector("button");
  // btn.addEventListener("click", () => {
  //   //làm một việt gì đó
  // });
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
TabButton.propTypes = {
  children: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};
//Cách 2
// export default function TabButton({ batky }) {
//   return (
//     <li>
//       <button>{batky}</button>
//     </li>
//   );
// }
