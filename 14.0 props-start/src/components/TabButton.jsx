import PropTypes from "prop-types";
//Cách 1
export default function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
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
