// eslint-disable-next-line react/prop-types
function Tabs({ button, children, ButtonsContainer }) {
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  )
}

export default Tabs
