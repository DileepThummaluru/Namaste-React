const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From React",
);

const root1 = ReactDOM.createRoot(document.getElementById("react"));
root1.render(heading1);
console.log(heading1);
