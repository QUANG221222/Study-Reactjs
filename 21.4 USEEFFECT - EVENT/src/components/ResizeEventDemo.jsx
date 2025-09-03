import { useEffect } from "react";

function ResizeEventDemo() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        console.log("Đạt kích thước <= 800px!");
      }
    };

    //Đăng ký event
    window.addEventListener("resize", handleResize);
    console.log("Đã add event resize!");

    // Bỏ cleanup để demo hậu quả khi mount/unmount liên tục
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Đã remove envent resize!");
    };
  }, []); // Chỉ mount 1 lần
  return (
    <div>
      <h3>Resize cửa sổ nhỏ hơn 800px để xem console</h3>
    </div>
  );
}

export default ResizeEventDemo;
