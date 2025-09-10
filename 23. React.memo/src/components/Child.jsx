import { memo } from "react";

const Child = ({ value }) => {
  console.log("Child render");
  return <div>Giá trị từ cha: {value}</div>;
};

export default memo(Child);
