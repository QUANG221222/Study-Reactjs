// eslint-disable-next-line react/prop-types
function Tabs({ button, children, ButtonsContainer = 'menu' }) {
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  )
}

export default Tabs
