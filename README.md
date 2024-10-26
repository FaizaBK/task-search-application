# Task Search Application

## Description

This simple search application allows users to enter queries and receive real-time suggestions through integration with a REST API. All search requests are stored in a MongoDB database.

## Technologies Used
- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React, TailwindCSS 

### Installation Steps
#### 1. Clone the repository:

   ```bash
   git clone  https://github.com/FaizaBK/task-search-application.
   cd task-search-application
   ```
### 2. Install the backend dependencies:
`npm install`

### 3. Lancez le serveur backend :
`node ../server.js`

### 3.Navigate to the search-app directory and install the frontend dependencie
`cd search-app`
`npm install`

### 3.Start the backend server:
`node ../server.js`

### 4.In another terminal, navigate to the search-app directory and start the React application:

`npm start`

## Project Structure

`task-search-application/
├── server.js
├── package.json
├── models/
│   └── SearchRequest.js
├── search-app/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
`

## Available Scripts

In the project directory, you can run:

- npm start: Runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload whenever you make changes.

- npm test: Launches the test runner in interactive mode.

- npm run build: Builds the app for production in the build folder. The app is optimized for the best performance.

- npm run eject: Copies all configuration files and dependencies into your project, providing full control.






