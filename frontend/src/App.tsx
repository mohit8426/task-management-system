import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskDetails from './pages/TaskDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define route for the dashboard */}
        <Route path="/" element={<Dashboard />} />
        {/* Define route for task details */}
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
