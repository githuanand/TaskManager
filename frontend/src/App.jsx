import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add a task
  const addTask = async (title) => {
    if (!title.trim()) return;
    try {
      await axios.post(API_URL, { title });
      fetchTasks();
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  // Toggle completion
  const toggleTask = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Error toggling task:", err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="app">
      <h1>📝 Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
