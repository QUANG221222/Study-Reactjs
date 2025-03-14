function Tabs({ button, children }) {
  return (
    <>
      <menu>{button}</menu>
      {children}
    </>
  );
}

export default Tabs;
