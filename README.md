# Student Registration App

A full-stack student registration application built with **Angular** and **Spring Boot**. The project is organized into separate frontend and backend applications in one repository.

## Overview

The application provides a foundation for managing student registration data through an Angular user interface and a Spring Boot REST API.

### Repository structure

```text
Student-Registration/
├── Student-Regester-Frontend/   # Angular application
└── Student-Regester-Backend/    # Spring Boot REST API
```

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | Angular, TypeScript, HTML, CSS |
| Backend | Java, Spring Boot, Spring Web |
| Data access | Spring Data JPA, Hibernate |
| Build tools | npm, Maven |
| API testing | Postman (recommended) |
| Version control | Git, GitHub |

> Update this table if your project uses a different database or additional libraries.

## Features

- Angular-based frontend for the student registration application.
- Spring Boot backend exposing REST endpoints.
- Layered backend structure with controller, service, service implementation, entity, and repository packages.
- Database persistence through Spring Data JPA.
- Frontend and backend maintained in a single repository.

## Prerequisites

Install the following before running the project:

- Node.js and npm
- Angular CLI compatible with the frontend project's Angular version
- JDK compatible with the Spring Boot version (JDK 17+ is a common choice)
- Git
- A database configured for the backend, if using an external database

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ashishbawne28/Student-Registration.git
cd Student-Registration
```

### 2. Run the backend

Open a terminal in the backend directory:

```bash
cd Student-Regester-Backend
```

Configure your database connection in `src/main/resources/application.properties` using environment variables. For example:

```properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
```

Set the variables in your terminal before starting the application. Example for PowerShell:

```powershell
$env:DB_URL="jdbc:your-database-url"
$env:DB_USERNAME="your-database-username"
$env:DB_PASSWORD="your-database-password"
```

Run the Spring Boot application using the Maven wrapper:

```powershell
.\mvnw.cmd spring-boot:run
```

On macOS or Linux:

```bash
./mvnw spring-boot:run
```

The backend will start on the port configured in the Spring Boot application (Spring Boot's default is `8080`).

### 3. Run the frontend

Open a second terminal in the frontend directory:

```bash
cd Student-Regester-Frontend
npm install
```

Start the Angular development server:

```bash
npx ng serve
```

Open the local URL printed by Angular in your terminal (commonly `http://localhost:4200`).

## API Configuration

Make sure the Angular application sends HTTP requests to the backend's actual base URL. If the backend runs on a different port or uses a different API prefix, update the frontend service or environment configuration accordingly.

The exact endpoint paths depend on the controller mappings in this project. Refer to `Student-Regester-Backend/src/main/java/com/example/demo/controller/` for the current routes.

## Development Notes

- Keep database credentials, API keys, and other secrets out of source control.
- Do not commit `.env` files, build output, `node_modules`, or Maven `target` directories.
- If you change the backend port or API route mappings, update the frontend API configuration as well.
- Use Postman or another API client to test backend endpoints independently from the frontend.

## Future Enhancements

Possible improvements for the project include:

- Form validation and clearer user feedback.
- Search, filtering, and pagination for student records.
- Edit and delete student details.
- Authentication and role-based authorization.
- Automated unit and integration tests.
- API documentation with Swagger / OpenAPI.

## Author

**Ashish Bawne**

- GitHub: [@ashishbawne28](https://github.com/ashishbawne28)
- Project repository: [Student-Registration](https://github.com/ashishbawne28/Student-Registration)

---

If you find an issue or have a suggestion, please open an issue in the GitHub repository.
