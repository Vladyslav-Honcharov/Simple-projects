const addTodoBtn = document.getElementById("addTodo");
addTodoBtn.addEventListener("click", async () => {
  const input = document.getElementById("todo-text");
  const title = input.value;
  if (title.trim()) {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, completed: false }),
      }
    );
    const todo = await res.json();
    todosToHtml(todo);
    input.value = "";
  }
});

async function getTodos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const todos = await res.json();
  todos.forEach((element) => {
    todosToHtml(element);
  });
}
getTodos();

function todosToHtml({ id, completed, title }) {
  const todoList = document.getElementById("todos");
  todoList.insertAdjacentHTML(
    "beforeend",
    `      <div class="form-check" id = "todo${id}">
  <label id = "label${id}" class="form-check-label">
    <input onchange = "changeCompletedTodo(${id})" type="checkbox" class="form-check-input" ${
      completed && "checked"
    }/>
    ${title}

  </label>
  <button
  onclick = "deleteTodo(${id})"
    type="button"
    class="btn btn-close"
    aria-label="Close"
    style="font-size: 12px"
  ></button>
</div>`
  );
}

async function deleteTodo(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  if (data) {
    document.getElementById(`todo${id}`).remove();
  }
}

async function changeCompletedTodo(id) {
  const label = document.getElementById(`label${id}`);
  const completed = document.querySelector(`#todo${id} input `).checked;

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  const data = await res.json();
  if (completed) {
    label.style.textDecoration = "line-through";
  } else {
    label.style.textDecoration = "none";
  }
}
