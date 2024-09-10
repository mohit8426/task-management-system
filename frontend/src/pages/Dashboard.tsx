import React, { useState, useEffect } from 'react';
import TaskBoard from '../components/TaskBoard';
import TaskForm from '../components/TaskForm';
import axios from 'axios';

// Define the Task interface
interface Task {
  id: number;
  title: string;
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High';
}

const Dashboard: React.FC = () => {
  // Define the tasks state with the Task[] type
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from the backend API
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/tasks`).then((response) => {
      setTasks(response.data);
    });
  }, []);

  // Handle the task creation, adding the new task to the existing state
  const handleTaskCreate = (newTask: { title: string; status: string; priority: string }) => {
    axios.post(`${process.env.REACT_APP_API_URL}/tasks`, newTask).then((response) => {
      setTasks([...tasks, response.data]);
    });
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      {/* Pass the handleTaskCreate method to TaskForm */}
      <TaskForm onTaskCreate={handleTaskCreate} />
      {/* Render the TaskBoard with the list of tasks */}
      <TaskBoard tasks={tasks} />
    </div>
  );
};

export default Dashboard;
