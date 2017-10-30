var TodoTasks = /** @class */ (function () {
    function TodoTasks(length, task, done) {
        this.task = task;
        this.done = done;
        this.lengthlist = length;
    }
    TodoTasks.prototype.addTask = function (newtask) {
        this.task[this.lengthlist] = (newtask.task);
        this.done[this.lengthlist] = (false);
        this.lengthlist = this.lengthlist + 1;
        console.log(this.lengthlist);
        localStorage.setItem('key', JSON.stringify({
            locallength: this.lengthlist,
            localtask: this.task,
            localdone: this.done
        }));
        this.displayTasks();
    };
    TodoTasks.prototype.displayTasks = function () {
        var itr;
        itr = 0;
        var listid = document.getElementById("activelist");
        var completedlistid = document.getElementById("completedlist");
        var inputid = document.getElementById("input");
        listid.innerHTML = "";
        completedlistid.innerHTML = "";
        var localstorage = JSON.parse(localStorage.getItem("key"));
        while (itr < localstorage.locallength) {
            var ul = document.createElement("ul");
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("onchange", "updateTaskOuter(" + itr + ")");
            checkbox.setAttribute("class", "checkboxclass_css");
            var text = document.createElement("text");
            text.innerText = localstorage.localtask[itr];
            var button = document.createElement("button");
            button.setAttribute("onclick", "deleteTaskOuter(" + itr + ")");
            button.innerText = "delete task";
            button.setAttribute("class", "buttonclass_css");
            var updatebutton = document.createElement("button");
            updatebutton.setAttribute("onclick", "editTaskOuter(" + itr + ")");
            updatebutton.innerText = "update task";
            updatebutton.setAttribute("class", "buttonclass_css");
            if (localstorage.localdone[itr]) {
                checkbox.setAttribute("checked", "TRUE");
                text.setAttribute("class", "completedtextclass_css");
                ul.setAttribute("class", "completedlistclass_css");
            }
            else {
                text.setAttribute("class", "notcompletedtextclass_css");
                ul.setAttribute("class", "notcompletedlistclass_css");
            }
            ul.appendChild(checkbox);
            ul.appendChild(text);
            ul.appendChild(button);
            ul.appendChild(updatebutton);
            if (localstorage.localdone[itr])
                completedlistid.appendChild(ul);
            else
                listid.appendChild(ul);
            itr++;
        }
    };
    TodoTasks.prototype.deleteTask = function (index) {
        var itr;
        itr = index;
        while (itr + 1 < this.done.length) {
            this.task[itr] = this.task[itr + 1];
            this.done[itr] = this.done[itr + 1];
            itr++;
        }
        this.lengthlist--;
        localStorage.setItem('key', JSON.stringify({
            locallength: this.lengthlist,
            localtask: this.task,
            localdone: this.done
        }));
        this.displayTasks();
    };
    TodoTasks.prototype.updateTask = function (index) {
        this.done[index] = !this.done[index];
        localStorage.setItem('key', JSON.stringify({
            locallength: this.lengthlist,
            localtask: this.task,
            localdone: this.done
        }));
        this.displayTasks();
    };
    TodoTasks.prototype.editTask = function (index) {
        var prompt1 = prompt("Enter task", this.task[index]);
        if (prompt1 != null) {
            this.task[index] = prompt1;
        }
        localStorage.setItem('key', JSON.stringify({
            locallength: this.lengthlist,
            localtask: this.task,
            localdone: this.done
        }));
        this.displayTasks();
    };
    return TodoTasks;
}());
var localstorage = JSON.parse(localStorage.getItem("key"));
if (localstorage == null)
    var todoObject = new TodoTasks(0, [], []);
else
    var todoObject = new TodoTasks(localstorage.locallength, localstorage.localtask, localstorage.localdone);
var addTaskOuter = function (task, done) {
    todoObject.addTask({
        task: task,
        done: false
    });
};
var updateTaskOuter = function (index) {
    todoObject.updateTask(index);
};
var deleteTaskOuter = function (index) {
    todoObject.deleteTask(index);
};
var displayTaskOuter = function () {
    todoObject.displayTasks();
};
var editTaskOuter = function (index) {
    todoObject.editTask(index);
};
//localstorage.store(""key",json.stringify{object}
//json.parse(localstorage.getIten("key")) 
