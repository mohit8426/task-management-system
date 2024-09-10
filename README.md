Task Management System
The Task Management System is a web application designed to help users manage their daily tasks efficiently. It provides features like task creation, assignment, progress tracking, and team collaboration. The project uses React and TypeScript for the frontend, and Go for the backend API, providing a highly performant and scalable solution.

Table of Contents
Features
Tech Stack
Project Setup
Backend API Setup
Frontend Setup
Available Scripts
Environment Variables
Learn More
Features
Task Dashboard: A user-friendly interface for viewing, creating, updating, and deleting tasks.
Task Prioritization: Allows users to assign priority levels (Low, Medium, High) to tasks.
Task Status: Track the status of tasks (To Do, In Progress, Done).
Real-time Updates: Updates are reflected immediately after any change.
Responsive UI: The app is optimized for desktop and mobile usage.
Tech Stack
Frontend
React (with Create React App)
TypeScript for type safety and scalability
Axios for making API requests
CSS Modules for styling
Backend
Go (Golang) for building a high-performance API
PostgreSQL for data persistence
Gorilla Mux for routing
GORM for ORM (Object-Relational Mapping)
Project Setup
Prerequisites
Make sure you have the following installed on your machine:

Node.js (for the frontend)
Go (for the backend)
PostgreSQL (for the database)
Environment Variables
The project requires the following environment variables to be set in both the frontend and backend:

Frontend (.env):

bash
Copy code
REACT_APP_API_URL=http://localhost:8080
Backend (.env):

bash
Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=task_management
Backend API Setup (Go)
Install Go Dependencies:

Make sure you have the necessary Go modules installed:

bash
Copy code
go mod tidy
Set Up PostgreSQL:

Ensure PostgreSQL is running and create the necessary database and user:

bash
Copy code
createdb task_management
You can also run the following commands inside the psql shell:

sql
Copy code
CREATE ROLE your_postgres_user WITH LOGIN PASSWORD 'your_postgres_password';
ALTER ROLE your_postgres_user CREATEDB;
Run the Backend:

Start the Go backend server:

bash
Copy code
go run main.go
The backend will be available on http://localhost:8080.

Frontend Setup (React)
Install Dependencies:

Navigate to the frontend directory and install the necessary dependencies:

bash
Copy code
npm install
Run the Frontend:

Start the frontend React application:

bash
Copy code
npm start
The frontend will be available on http://localhost:3000.

Available Scripts
In the project directory, you can run:

npm start
Runs the frontend app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm run build
Builds the frontend app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

go run main.go
Runs the Go backend server in development mode.

Learn More
Frontend Documentation:
You can learn more in the Create React App documentation.

Backend Documentation:
Go Documentation
Gorilla Mux
GORM
License
This project is licensed under the MIT License - see the LICENSE file for details.
