import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate for react-router-dom v6
import { getTaskById, updateTask, deleteTask } from '../services/taskService';
import { Task } from '../types';

type TaskFormData = {
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High';
};

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get task ID from URL
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [task, setTask] = useState<Task | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  // Define formData with correct types
  const [formData, setFormData] = useState<TaskFormData>({
    status: 'To Do',
    priority: 'Low',
  });

  useEffect(() => {
    if (id) {  // Ensure id is not undefined before calling the API
      getTaskById(id).then((taskData) => {
        setTask(taskData);
        setFormData({ status: taskData.status, priority: taskData.priority });
      });
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value as TaskFormData[keyof TaskFormData] });
  };

  const handleUpdateTask = () => {
    if (task) {
      updateTask(task.id, formData).then(() => {
        setTask({ ...task, ...formData });
        setIsEditing(false);
      });
    }
  };

  const handleDeleteTask = () => {
    if (task) {
      deleteTask(task.id).then(() => {
        navigate('/'); // Redirect to dashboard after deletion
      });
    }
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="task-details">
      <h2>{task.title}</h2>
      {!isEditing ? (
        <div>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      ) : (
        <div>
          <label>
            Status:
            <select name="status" value={formData.status} onChange={handleInputChange}>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </label>
          <label>
            Priority:
            <select name="priority" value={formData.priority} onChange={handleInputChange}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <button onClick={handleUpdateTask}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
      <button onClick={handleDeleteTask}>Delete Task</button>
    </div>
  );
};

export default TaskDetails;
