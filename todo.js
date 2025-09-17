const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = todoInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  todoList.appendChild(li);

  const span = document.createElement("span");
  span.textContent = task;
  li.appendChild(span);

  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  li.appendChild(deleteBtn);
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  //   li.appendChild(span);
  //   li.appendChild(deleteBtn);
  //   todoList.appendChild(li);

  todoInput.value = "";
});
