
### `models/Student.js`
- Contains the **Student Schema** for MongoDB with fields like `name`, `email`, `age`, `enrolledCourses`, and `createdAt`.

### `models/Course.js`
- Contains the **Course Schema** for MongoDB with fields like `courseName`, `instructor`, and `credits`.

### `index.js`
- The main file to start the server and handle routes:
  - **POST `/students`**: Create a new student.
  - **POST `/courses`**: Create a new course.
  - **GET `/students`**: Get all students with their enrolled courses (using `$lookup`).
  - **PUT `/students/:id`**: Update student info.
  - **DELETE `/students/:id`**: Delete a student.

### `package.json`
- Includes the dependencies like `express` and `mongoose`.

## Project Setup

1. **Install Dependencies**  
   Run `npm install` to install all required dependencies.

2. **Start the Server**  
   Run `node index.js` to start the server on port `3000`.

3. **MongoDB Setup**  
   Make sure you have MongoDB running locally or use MongoDB Atlas for cloud hosting.

4. **Access Routes**  
   - Create a new student via `/students` (POST)
   - Create a new course via `/courses` (POST)
   - Get all students with their enrolled courses via `/students` (GET)
   - Update student info via `/students/:id` (PUT)
   - Delete a student via `/students/:id` (DELETE)

## Features

- MongoDB with Mongoose for database interaction
- CRUD operations for students and courses
- Unique and text indexes for faster queries
