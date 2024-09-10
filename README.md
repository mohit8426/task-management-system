# Task Management System

The **Task Management System** is a web application designed to help users manage their daily tasks efficiently. It provides features like task creation, assignment, progress tracking, and team collaboration. The project uses **React** and **TypeScript** for the frontend, and **Go** for the backend API, providing a highly performant and scalable solution.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [Backend API Setup](#backend-api-setup)
- [Frontend Setup](#frontend-setup)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Learn More](#learn-more)

## Features

- Task Dashboard: A user-friendly interface for viewing, creating, updating, and deleting tasks.
- Task Prioritization: Allows users to assign priority levels (`Low`, `Medium`, `High`) to tasks.
- Task Status: Track the status of tasks (`To Do`, `In Progress`, `Done`).
- Real-time Updates: Updates are reflected immediately after any change.
- Responsive UI: The app is optimized for desktop and mobile usage.

## Tech Stack

### Frontend

- **React** (with Create React App)
- **TypeScript** for type safety and scalability
- **Axios** for making API requests
- **CSS Modules** for styling

### Backend

- **Go** (Golang) for building a high-performance API
- **PostgreSQL** for data persistence
- **Gorilla Mux** for routing
- **GORM** for ORM (Object-Relational Mapping)

## Project Setup

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (for the frontend)
- **Go** (for the backend)
- **PostgreSQL** (for the database)

### Environment Variables

The project requires the following environment variables to be set in both the frontend and backend:

**Frontend (`.env`):**

```bash
REACT_APP_API_URL=http://localhost:8080
