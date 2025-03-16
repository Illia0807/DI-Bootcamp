class TodoList {
        constructor() {
          this.tasks = [];
        }
      
        addTask(taskName) {
          let task = { name: taskName, isCompleted: false };
          this.tasks.push(task);
          console.log(`task ${task.name} added`);
        }
        markTask(taskName) {
          const task = this.tasks.find((task) => task.name === taskName);
          if (task) {
            task.isCompleted = true;
            console.log(`Task${task.name} is completed`);
          } else {
            console.log(`Task ${task.name} not found`);
          }
        }
        listOfallTask() {
          if (this.tasks.length === 0) {
            console.log("No tasks on list.");
            return;
          }
          this.tasks.forEach((task, index) => {
              console.log(`${index + 1}. ${task.name} [${task.isCompleted ? "Completed" : "Pending"}]`);
          });
        }
      }

export default TodoList;
//       const todo = new TodoList();
//       todo.addTask("Learn JavaScript");
//       todo.addTask("Write project report");
//       todo.listOfallTask();
//       todo.markTask("Learn JavaScript");
//       todo.listOfallTask();

