import { useState } from "react";
import KeydownEvent from "./KeydownEnvent";

function Parent() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Ẩn component" : "Hiện component"}
      </button>
      {show && <KeydownEvent />}
    </div>
  );
}

export default Parent;
