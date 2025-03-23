# 🏥 Chronic Disease Management Portal (CDM)

A **Spring Boot-based** web application designed to manage patients with chronic diseases. It provides **secure authentication using JWT**, **database management with MySQL**, and a RESTful API to handle patient records.

---

## 🚀 Features

✔️ **Patient Management (CRUD)**  
✔️ **JWT-based Authentication & Authorization**  
✔️ **Role-based Access Control (Admin, Doctor, Patient)**  
✔️ **Secure API using Spring Security**  
✔️ **MySQL Database Integration**  
✔️ **Spring Data JPA for Database Transactions**  
✔️ **Exception Handling & Logging**  

---

## 🛠️ Tech Stack

- **Backend**: Spring Boot, Spring Security, Spring Data JPA  
- **Database**: MySQL  
- **Authentication**: JWT (JSON Web Token)  
- **Dependencies**: Lombok, Hibernate, Jackson  

---

## 📌 API Endpoints

### 🔑 **Authentication API**
| Method | Endpoint           | Description |
|--------|--------------------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Authenticate and get JWT token |

### 🏥 **Patient API**
| Method  | Endpoint                 | Description                |
|---------|--------------------------|----------------------------|
| `GET`   | `/api/patients`          | Get all patients          |
| `GET`   | `/api/patients/{id}`     | Get patient by ID         |
| `POST`  | `/api/patients`          | Add new patient          |
| `PUT`   | `/api/patients/{id}`     | Update patient by ID     |
| `DELETE`| `/api/patients/{id}`     | Delete patient by ID     |

---

## 🔑 **JWT Authentication Flow**

1️⃣ **User Registers/Login** → Receives **JWT Token**  
2️⃣ **Send JWT Token in Header (`Authorization: Bearer YOUR_JWT_TOKEN`)**  
3️⃣ **Access Secured Endpoints**  

---

## ⚙️ Setup & Installation

### 🔹 Prerequisites

- **Java 17+**
- **Maven 3.8+**
- **MySQL 8+**
- **Postman (for API testing)**

### 🔹 Steps to Run

1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo/cdm-portal.git
cd cdm-portal
