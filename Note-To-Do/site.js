let todos = [];
// let todos = [
//     {
//         id: 1,
//         task: "Do homework",
//         isDone: false
//     },
//     {
//         id: 2,
//         task: "Clean your room",
//         isDone: true
//     },
//     {
//         id: 3,
//         task: "Sleep",
//         isDone: false
//     },
// ];

// EVENTS
// NEW TODO
$("#frmTodo").submit(function(event) {
    event.preventDefault();
    let todo = {
        id: maxId() + 1,
        task: $("#inputTask").val().trim(),
        isDone: false
    }
    todos.push(todo);
    saveData();
    this.reset();
    listTodos();
});

// DONE/UNDONE
$("body").on("change", "input[type='checkbox'][data-id]", function() {
    let id = $(this).data("id");
    let isDone = $(this).prop("checked");
    let todo = getTodoById(id);
    todo.isDone = isDone;
    saveData();
    listTodos();
});

// DELETE
$("body").on("dblclick", "li[data-id]", function() {
    if (!confirm("Are you sure to delete the todo item?"))
        return;
    let id = $(this).data("id");
    deleteById(id);
    saveData();
    listTodos();
});


// FUNCTIONS
function saveData() {
    localStorage["data"] = JSON.stringify(todos);
}

function loadData() {
    try {
        todos = JSON.parse(localStorage["data"]);
    }
    catch {
        todos = [];
    }
}

function deleteById(id) {
    let index;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            index = i;
            break;
        }
    }
    todos.splice(index, 1);
}

function getTodoById(id) {
    for (const todo of todos) {
        if (todo.id == id)
            return todo;
    }
    return null;
}

function maxId() {
    let max = 0;

    for (const todo of todos) {
        if (todo.id > max)
            max = todo.id;
    }

    return max;
}

function listTodos() {
    $("ul#todos").html("");
    let sortedTodos = todos.sort((a,b) => a.isDone - b.isDone);
    $.each(sortedTodos, function(index, todo) {
        let li = $("<li/>")
            .attr("data-id", todo.id);
        let cb = $("<input/>")
                    .attr("type", "checkbox")
                    .attr("data-id", todo.id);
        if (todo.isDone) {
            cb.prop("checked", true);
            li.addClass("done");
        }
        else {
            li.addClass("undone");
        }
        li.append(cb);
        li.append(" " + todo.task);
        $("ul#todos").append(li);
    });
}
function clearAllTodos(e){
    if(confirm("silmek istedi??inize emin misiniz?")){
        while(todoList.firstElementChild != null){
        todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }

}
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem)
    {
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            listItem.setAttribute("style","display : none !important");
        }
        else{
            listItem.setAttribute("style","display : block");
        }
    });
}

loadData();
listTodos();
