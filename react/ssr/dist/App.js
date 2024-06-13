import React from "react";
export default function App({ users }) {
  return /* @__PURE__ */ React.createElement("ul", null, users.map((user) => /* @__PURE__ */ React.createElement("li", { key: user.id }, user.name)));
}
