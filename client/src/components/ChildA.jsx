function ChildA({ setName }) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
}

export default ChildA;
