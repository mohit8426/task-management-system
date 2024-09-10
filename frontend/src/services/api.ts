import axios from 'axios';
import { Task } from '../types';

// Define the base URL of the API
const API_URL = `${process.env.REACT_APP_API_URL}/tasks`;

// Create a new task by sending a POST request to the backend API
export const createTask = async (task: Partial<Task>): Promise<Task> => {
  const response = await axios.post<Task>(API_URL, task);
  return response.data;
};
