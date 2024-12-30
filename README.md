# Repository for Study Purposes

This repository is created for studying and practicing **Layered Architecture** with **Node.js** and **TypeScript**.

---

## Layered Architecture: Concepts and Detailed Explanation

A **Layered Architecture** separates an application into distinct layers, each with a specific responsibility. This modular design simplifies maintenance, testing, and scaling of the codebase.

### Common Layers in a Node.js + TypeScript Application

1. **Presentation Layer**  
   - Handles user input and interactions (e.g., REST APIs, UI components).

2. **Service Layer**  
   - Contains business logic and orchestrates operations.

3. **Repository Layer**  
   - Interacts with the database for fetching and storing data.

4. **Model Layer**  
   - Defines the structure of the data (schemas and types).

---

## Benefits of a Layered Architecture

1. **Separation of Concerns**  
   Each layer has a clear and specific role, leading to better organization.

2. **Reusability**  
   Business logic in the **Service Layer** can be reused across multiple interfaces (e.g., APIs, CLI tools).

3. **Testability**  
   Each layer can be tested in isolation (e.g., unit testing services or repositories).

4. **Scalability**  
   Adding new features or interfaces becomes easier due to the decoupled nature of the layers.

---

## Learning Goals

- Practice building applications using **Node.js** and **TypeScript**.
- Understand the principles and benefits of **Layered Architecture**.
- Gain hands-on experience in structuring code for maintainability and scalability.

---

Each folder has a specific role in implementing the **Layered Architecture**:

- **app.ts**: Entry point of the application. Initializes and configures the app.
- **models/**: Contains data models and schemas for defining data structure.
- **repositories/**: Manages data access logic, interacting with the database.
- **services/**: Implements the core business logic of the application.
- **controllers/**: Handles incoming API requests and responses.
- **routes/**: Defines API routes and maps them to corresponding controllers.
- **utils/**: Holds reusable utility functions.

---

Feel free to explore and contribute to the project!

## Getting Started

1. Clone the repository:
   ```bash
   git clone git@github.com:BlackSheep1337/NodeLayerArch.git
   cd node-typescript-layer-api
2. Install dependencies:
   ```bash
   npm install
3. Run project in dev enviroment:
   ```bash
   npm run start:dev
4. Build and start the project:
   ```bash
   npm run build
   npm start
