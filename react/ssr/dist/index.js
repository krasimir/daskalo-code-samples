import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
async function getUsers() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return await result.json();
}
const root = ReactDOM.createRoot(document.getElementById("root"));
getUsers().then((users) => {
  root.render(/* @__PURE__ */ React.createElement(App, { users }));
});
