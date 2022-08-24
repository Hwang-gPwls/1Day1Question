// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const FocusableInput = (props) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (props.shouldFocus) inputRef.current.focus();
  });

  return <input ref={inputRef} />;
};

document.body.innerHTML = "<div id='root' />";
ReactDOM.render(
  <FocusableInput shouldFocus={true} />,
  document.getElementById("root")
);
setTimeout(() => console.log(document.getElementById("root").innerHTML));

//The input is focused only if shouldFocus is true: Correct answer
//The input is focused only on the first render: Correct answer
//The component uses React Hooks: Correct answer
