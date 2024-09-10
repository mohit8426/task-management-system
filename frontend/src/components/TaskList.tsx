import React from 'react';

interface Task {
  id: number;
  title: string;
  status: string;
  priority: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        {task.title} - {task.status} - {task.priority}
      </li>
    ))}
  </ul>
);

export default TaskList;
