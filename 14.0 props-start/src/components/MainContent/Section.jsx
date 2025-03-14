// eslint-disable-next-line react/prop-types
function Section({ title, children, abc }) {
  return (
    <section id={abc}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
