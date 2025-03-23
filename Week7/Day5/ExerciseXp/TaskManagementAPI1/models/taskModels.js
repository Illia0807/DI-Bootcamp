// Raquel i now about JSOn but wwant to try class orient way
class Task {
  constructor(id, title, description, isCompleted) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
  }
}

const tasksSet = [
  new Task(1, "Create server", "Write a basic server using Express", false),
  new Task(2, "Add routes", "Create routes and controllers for the API", false),
  new Task(3, "Set up database", "Integrate Knex and PostgreSQL", true),
];

module.exports = {
  Task,
  tasksSet,
};
