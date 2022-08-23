const Message = () => {
  const [isShow, setIsShow] = React.useState(false);
  const toggleParagraph = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <a href="#" onClick={toggleParagraph}>
        Want to buy a new car?
      </a>
      {isShow && <p>Call +11 22 33 44 now!</p>}
    </div>
  );
};

document.body.innerHTML = "<div id='root' />";
ReactDOM.render(<Message />, document.getElementById("root"));
setTimeout(() => console.log(document.getElementById("root").innerHTML));

//At the start, the paragraph should not be visible
//After a click, the paragraph should be visible
//After a second click, the paragraph should not be visible again
