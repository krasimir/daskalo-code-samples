import React, { useEffect, useState } from "react";
import { useDependencies } from "./dependencies.js";
export default function Users() {
  const [users, setUsers] = useState([]);
  const { getUsers } = useDependencies();
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);
  return /* @__PURE__ */ React.createElement("ul", null, users.map((user) => /* @__PURE__ */ React.createElement("li", { key: user.id }, user.name)));
}
