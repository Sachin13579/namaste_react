let head = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, [React.createElement('h1', { id: "hey1" }, "Hello world from react!"), React.createElement('h2', { id: "hey2" }, "Hello world from react!")]));
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head)