//deside to create one class with all methods that i need to controllers
const { tasksSet } = require("../models/taskModels.js");

class TaskController {
  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const index = tasksSet.findIndex((item) => item.id == id);
      if (index === -1) {
        return res.status(404).json({ message: "Task not found" });
      }
      tasksSet.splice(index, 1);
      res.status(200).json({ message: "Task successfully deleted" });
      
    } catch (error) {
        console.error(error); // Логируем ошибку
        res.status(500).json({ message: "Something went wrong during the deletion process" });
    }

    
  }


  async getAllTasks(req, res) {
    // res.json({ message: "Получили всех пользователей!" });
    res.json(tasksSet);
  }
  async getOneTaskById(req, res) {
    const { id } = req.params;
    const task = tasksSet.find((item) => item.id == id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  }
  async createTask(req, res) {
    try {
      const { title, description } = req.body;
      if (!title || !description) {
        return res
          .status(400)
          .json({ message: "Title and description are required" });
      }
      const newTask = {
        id: tasksSet.length + 1,
        title,
        description,
        isCompleted: false,
      };
      tasksSet.push(newTask);
      res.json(tasksSet);
    } catch (error) {}
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the task" });
  }
  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { title, description, isCompleted } = req.body;
      if (!title || !description || isCompleted === undefined) {
        return res.status(400).json({
          message: "All fields (title, description, isCompleted) are required.",
        });
      }
      if (index === -1) {
        res.status(404).json({ message: "user to update not found" });
        return;
      }
      tasksSet[index] = { ...tasksSet[index], title, description, isCompleted };
      res.json(tasksSet);
    } catch (error) {
      console.error("Error updating task:", err);

      res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new TaskController();
