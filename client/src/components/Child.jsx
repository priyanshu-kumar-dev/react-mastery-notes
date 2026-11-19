import GrandChild from "./GrandChild";

function Child({ name }) {
  return (
    <>
      <GrandChild name={name} />
    </>
  );
}

export default Child;