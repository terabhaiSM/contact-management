# Contact Management System

## Project Description

The Contact Management System is a web application that allows users to store, manage, and interact with customer or client contact information. The application provides features to:
- **Add** a new contact.
- **View** a list of all contacts with pagination and sorting.
- **Edit** contact information.
- **Delete** contacts.

The back-end is built with **Node.js** using the **Express.js** framework, and **MongoDB** is used as the database for storing contact information.

### Major Technical Decisions:
- **Node.js and Express.js**: Used for creating the backend API, allowing for easy routing and handling requests.
- **MongoDB**: Chosen as the database due to its flexibility with document-based storage, scalability, and its ability to handle the dynamic nature of user data such as different fields for contacts.
- **Material-UI (MUI)**: Utilized for building the frontend components such as forms, tables, and buttons in a modern, responsive manner.

---

## Technologies Used:
- **Frontend**: ReactJS, Material-UI (MUI)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Docker (for containerization), Render (for deployment)
- **State Management**: React Hooks

---

## Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies
Install the backend and frontend dependencies:

#### Backend
Navigate to the `backend` directory and install the necessary packages:

```bash
cd backend
npm install
```

#### Frontend
Navigate to the `frontend` directory and install the necessary packages:

```bash
cd frontend
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `backend` folder to store your environment variables. Here’s a template:

```
PORT=5002
MONGO_URI=mongodb+srv://<username>:<password>@cluster1.t8prj2e.mongodb.net/contact-management
```

- **`PORT`**: The port where your backend server will run (default is 5002).
- **`MONGO_URI`**: MongoDB connection string. Replace `<username>` and `<password>` with your MongoDB credentials.

### 4. Running the Application

#### Start Backend Server
In the `backend` directory, start the backend server:

```bash
cd backend
npm start
```

This will start the server on `http://localhost:5002`.

#### Start Frontend Server
In the `frontend` directory, start the frontend server:

```bash
cd frontend
npm start
```

This will start the React app on `http://localhost:3000`.

### 5. Docker Setup (Optional)
To run the app in Docker containers, follow these steps:

1. **Build the Docker images**:

```bash
docker build -t contact-management-backend ./backend
docker build -t contact-management-frontend ./frontend
```

2. **Run the Docker containers**:

```bash
docker run -d -p 5002:5002 --env-file ./backend/.env contact-management-backend
docker run -d -p 3000:3000 contact-management-frontend
```

---

## Database Schema

Here’s the MongoDB schema used for storing contact data:

```js
const mongoose = require('mongoose');

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
```

- **firstName**: The first name of the contact.
- **lastName**: The last name of the contact.
- **email**: The email address of the contact (unique).
- **phoneNumber**: The phone number of the contact.
- **company**: The company the contact is associated with.
- **jobTitle**: The job title of the contact.

---

## API Endpoints

- **GET /contacts**: Retrieves all contacts from the database.
- **POST /contacts**: Adds a new contact to the database.
- **PUT /contacts/:id**: Updates the contact information for the specified `id`.
- **DELETE /contacts/:id**: Deletes a contact by `id`.

---

## Why MongoDB?

MongoDB was chosen as the database for this project for the following reasons:

1. **Schema Flexibility**: MongoDB’s document-based structure allows for dynamic schema design, which makes it easier to adapt and scale with changing application needs.
   
2. **Scalability**: MongoDB is highly scalable, making it a good choice for handling growing datasets.

3. **Developer Productivity**: MongoDB’s JSON-like format makes it easier for developers to work with data that mirrors JavaScript objects, reducing the need for complex data transformations.

4. **Community Support**: MongoDB has strong community support and is widely used in modern web applications, ensuring easy access to resources and solutions.

---

## How It Works

### Frontend

- **Contact Form**: A form is provided to add new contacts. The form captures first name, last name, email, phone number, company, and job title, then sends this data to the backend via a `POST` request.
  
- **Contacts Table**: The contacts are displayed in a table with pagination and sorting. Each contact has "Edit" and "Delete" buttons to modify or remove contacts.

### Backend

- **Routes**: The backend handles CRUD operations for contacts via REST API endpoints.
  - **POST /contacts**: Adds a new contact to the MongoDB database.
  - **GET /contacts**: Retrieves all contacts.
  - **PUT /contacts/:id**: Updates the contact data.
  - **DELETE /contacts/:id**: Deletes a contact from the database.

- **MongoDB**: The contact data is stored in a MongoDB collection called `contacts`, which supports fast read and write operations.

---

## Project Structure

- **backend/**: Contains the backend Node.js application and MongoDB connection.
- **frontend/**: Contains the ReactJS frontend application that communicates with the backend.
- **Dockerfile**: Docker configuration for both frontend and backend.
- **.env**: Environment file containing MongoDB connection string and backend configuration.

---

## Future Improvements

- **Authentication**: Add user authentication to secure access to contacts.
- **Advanced Search/Filter**: Provide more options to search and filter contacts.
- **Error Handling**: Improve error handling and validation for API requests.
- **Deployment**: Set up deployment pipelines on platforms like Render, Heroku, or AWS.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.