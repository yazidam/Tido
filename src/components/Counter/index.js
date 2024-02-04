function Counter({ id, value, children, increment, decrement, reset }) {
  return (
    <div>
      <h1>{children}</h1>
      <h2>{value}</h2>
      <button
        onClick={() => {
          increment(id);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement(id);
        }}
        disabled={value === 0}
      >
        -
      </button>

      <button
        onClick={() => {
          reset(id);
        }}
        disabled={value === 0}
      ></button>
    </div>
  );
}
export default Counter;
