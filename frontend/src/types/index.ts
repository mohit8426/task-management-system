// Define the Task type
export interface Task {
    id: number;
    title: string;
    status: 'To Do' | 'In Progress' | 'Done'; // Enforce specific status values
    priority: 'Low' | 'Medium' | 'High';     // Enforce specific priority values
  }
  