import React from 'react';
import TaskList from './TaskList';

interface Task {
  id: number;
  title: string;
  status: string;
  priority: string;
}

interface TaskBoardProps {
  tasks: Task[];
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {
  const toDoTasks = tasks.filter(task => task.status === 'To Do');
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
  const doneTasks = tasks.filter(task => task.status === 'Done');

  return (
    <div className="task-board">
      <div>
        <h3>To Do</h3>
        <TaskList tasks={toDoTasks} />
      </div>
      <div>
        <h3>In Progress</h3>
        <TaskList tasks={inProgressTasks} />
      </div>
      <div>
        <h3>Done</h3>
        <TaskList tasks={doneTasks} />
      </div>
    </div>
  );
};

export default TaskBoard;
