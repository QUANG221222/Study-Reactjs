import { useState } from "react";
import TimeDemo from "./TimeDemo";

function Parent() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Ẩn component" : "Hiện component"}
      </button>
      {show && <TimeDemo />}
    </div>
  );
}

export default Parent;
