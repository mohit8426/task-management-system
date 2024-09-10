import React, { useState } from 'react';

// Define the types for status and priority
type TaskStatus = 'To Do' | 'In Progress' | 'Done';
type TaskPriority = 'Low' | 'Medium' | 'High';

// Define the type for the task creation function
interface TaskFormProps {
  onTaskCreate: (newTask: { title: string; status: TaskStatus; priority: TaskPriority }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreate }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<TaskStatus>('To Do');
  const [priority, setPriority] = useState<TaskPriority>('Low');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a new task and pass it to the parent via the onTaskCreate callback
    onTaskCreate({ title, status, priority });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
