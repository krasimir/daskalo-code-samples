(()=>{var o=[],l=localStorage.getItem("todoapp");l&&(o=JSON.parse(l));function u(){localStorage.setItem("todoapp",JSON.stringify(o))}var s={getTodos(){return o},addTodo(r){return o.push({text:r,done:!1}),u(),o},markAsDone(r){return o=o.map((e,t)=>t===r?{text:e.text,done:!0}:e),u(),o},deleteTodo(r){return o=o.filter((e,t)=>t!==r),u(),o}},n=s;function a(){let r=n.getTodos(),e=document.querySelector("#container"),t=["<ul>"];r.forEach((d,i)=>{t.push(`
      <li style="${d.done?"background:#009f00;color:#fff;":""}">
        <span>${d.text}</span>
        <button data-action="done" data-index="${i}">Done</button>
        <button data-action="delete" data-index="${i}">Delete</button>
      </li>
    `)}),t.push("</ul>"),t.push(`
    <form>
      <label>
        <input type="text" name="todo-text" placeholder="your text here"/>
        <button>New task</button>
      </label>
    </form>
  `),e.innerHTML=t.join("")}window.addEventListener("load",()=>{a();let r=document.querySelector("#container");r.addEventListener("submit",e=>{e.preventDefault();let t=document.querySelector("input").value;n.addTodo(t),a()}),r.addEventListener("click",e=>{if(e.target.getAttribute("data-action")){let t=e.target.getAttribute("data-action"),d=Number(e.target.getAttribute("data-index"));t==="delete"?(n.deleteTodo(d),a()):t==="done"&&(n.markAsDone(d),a())}})});})();
