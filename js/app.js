
  class Todos {
    constructor(title) {
        this.title = title;
        this.isFinished = false;
        this.id = Math.random();
    }
}

class TodoList {
  constructor() {
      this.todo = [];
      let todoform = document.querySelector(".todo");
       let container = document.getElementsByClassName("tost")[0]
  }

  add(todo) {
      this.todo.push(todos);
  }



  renderTodoListInUI() {
      const todoListElement = document.getElementById("todoList");

      this.todos.forEach(todo => {
          const todoElement = document.createElement("div");
          todoElement.innerHTML = <p class="title">${todo.title}</p>;
          todoListElement.appendChild(todoElement);
          div.classList.add(
            "w-[260px]",
            "h-[70px]",
            "rounded-[25px]",
            "p-[11px]",
            "flex",
            "justify-between",
            "bg-orange-300",
            "items-center",
            "ml-[70px]",
            "relative",
            "top-[150px]",
            "z-20"
          );
      });
  }

  saveLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo));
  }

  loadTodoListFromLocalStorage() {
      const storedTodos = JSON.parse(localStorage.getItem("todoLists"));
      if (storedTodos) {
          this.todos = storedTodos;
      }
  }
}

clickBtn() {
 this.document.createElement("div"); 
 this.deleteBtn.classList.add("fa-solid", "fa-check", "check-btn");
}
deleteBtn() {
  this.document.createElement("button");
  this.checkBtn.classList.add("fa-solid", "fa-trash", "delete-btn");
}

clickContainer() {
  let id = e.target.getAttribute("data-id");
  if (e.target.classList.contains("deleteBtn")) {
    memos = memos.filter((memo) => memo.id !== id);
    localStorage.setItem("memos", JSON.stringify(memos));
    toggleMemoContainerVisibility();
    showMemosInUI();
  } else if (e.target.classList.contains("checkBtn")) {
    memos.forEach((memo) => {
      if (memo.id === id) {
        memo.isItImportant = !memo.isItImportant;
      }
    });
    memos.sort((a, b) => b.isItImportant - a.isItImportant);
    localStorage.setItem("memos", JSON.stringify(memos));
    showMemosInUI();
  }
}

generateUUID() {

  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
  const r = (Math.random() * 16) | 0;
  const v = c === "x" ? r : (r & 0x3) | 0x8;
  return v.toString(16);

}

const todoset = new TodoList();