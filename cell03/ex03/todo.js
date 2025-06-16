window.onload = function () {
  let ftList = document.getElementById("ft_list");

  // Load from cookie
  let saved = getCookie("todoList");
  if (saved) {
    let todos = JSON.parse(saved);
    todos.forEach(text => {
      createTodo(text);
    });
  }

  document.getElementById("new-btn").onclick = function () {
    let todoText = prompt("Enter new TO DO:");
    if (todoText && todoText.trim() !== "") {
      createTodo(todoText.trim());
      saveTodos();
    }
  };

  function createTodo(text) {
    let div = document.createElement("div");
    div.className = "todo";
    div.innerText = text;

    div.onclick = function () {
      if (confirm("Do you want to delete this TO DO?")) {
        ftList.removeChild(div);
        saveTodos();
      }
    };

    ftList.appendChild(div);
  }

  function saveTodos() {
    let todos = [];
    let elements = ftList.querySelectorAll(".todo");
    elements.forEach(el => {
      todos.push(el.innerText);
    });
    // Save in reverse order to maintain "newest on top"
    setCookie("todoList", JSON.stringify(todos.reverse()), 7);
  }

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0)
        return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
};
