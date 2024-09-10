import axios from 'axios';
import { Task } from '../types';

// API base URL
const API_URL = `${process.env.REACT_APP_API_URL}/tasks`;

// Get all tasks
export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get<Task[]>(API_URL);
  return response.data;
};

// Get a task by its ID
export const getTaskById = async (id: string): Promise<Task> => {
  const response = await axios.get<Task>(`${API_URL}/${id}`);
  return response.data;
};

// Create a new task
export const createTask = async (task: Partial<Task>): Promise<Task> => {
  const response = await axios.post<Task>(API_URL, task);
  return response.data;
};

// Update an existing task
export const updateTask = async (id: number, updates: Partial<Task>): Promise<Task> => {
  const response = await axios.put<Task>(`${API_URL}/${id}`, updates);
  return response.data;
};

// Delete a task by its ID
export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
