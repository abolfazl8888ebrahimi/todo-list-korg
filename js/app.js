let todoform = document.querySelector(".todo")
let container = document.querySelector(".container")
let todo = JSON.parse(localStorage.getItem('todo')) || [];

todoform.addEventListener("submit" , (e) => {

    const todos = {
        name: e.target.title.value,
        isFinished: false,
        id: Math.random(),
    }

    localStorage.setItem("todo" , JSON.stringify(todo))

    todo.push(todos)

    showtodoINUI(todo);

    e.preventDefault();
})
memoContainer.addEventListener("click", (e) => {
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
  });

container.addEventListener("click" , () => {

if(e.target.classList.contains("delete-btn")) {
    const data = e.target.getAttribute("data-id")
    todo = todo.filter((todo) => todo.id !== data);
    localStorage.setItem("todo" , JSON.stringify(todo))
    updateUI();
    else if (e.target.classList.contains("checkBtn")) {
        todo.forEach((todoset) => {
          if (todoset.id === id) {
            todoset.isItImportant = !todoset.isItImportant;
          }
        });
}

})

function showtodolistsINUI(Todoset){
    Todoset.forEach(item => {
        let div = document.createElement("div");
        div.classList.add(
        "w-[260px]" ,
        "h-[70px]",
        "rounded-[25px]",
        "p-[11px]",
        "flex" ,
        "justify-between" ,
        "bg-orange-300" ,
        "items-center" ,
        "ml-[70px] ",
        "relative " ,
        "top-[150px]", 
        "z-20",
            )
div.setAttribute("id", `${item.id}`);
div.innerHTML = `<h1 class="title">${item.title}</h1>`;
let clickBtn = document.createElement("div")
let deleteBtn = document.createElement("button");
deleteBtn.classList.add(
    "fa-solid" ,
    "fa-check" ,
    "check-btn" ,
);
let checkBtn = document.createElement("button")
checkBtn.classList.add(
    "fa-solid" ,
    "fa-trash" ,
    "delete-btn" ,
);
clickBtn.appendChild(checkBtn);
clickBtn.appendChild(deleteBtn);
div.appendChild(clickBtn);
container.appendChild("div")
    });
}
function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
  }