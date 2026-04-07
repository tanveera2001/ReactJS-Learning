var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>Hello Word!</h1>, document.getElementById("root"));


ReactDOM.render(React.createElement("h1", null, "Hello World!"), document.getElementById("root"));