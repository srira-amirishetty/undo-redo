import useUndoRedo from "../hooks/useUndoRedo";

const Home = () => {
  const [value, setValue, undo, redo, inputRef] = useUndoRedo("", 25);
  return (
    <div style={{ width: "fit-content", margin: "0 auto", marginTop: "200px" }}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
};
export default Home;
