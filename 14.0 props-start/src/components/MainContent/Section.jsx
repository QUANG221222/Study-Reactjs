// eslint-disable-next-line react/prop-types
function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Section
