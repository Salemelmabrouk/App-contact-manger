# Angular-Spring Boot Crud Application for mangement contact

## Description

This is a simple Crud application for mangement contact  built with Angular and Spring Boot.



## Getting Started

### Prerequisites

- Java 17
- Maven
- Angular
- MS SQL Server Database


**1. Clone the repository:**
```shell
git clone https://github.com/Salemelmabrouk/App-contact-manger.git
```

### Angular Frontend
**1. Navigate to the `frontend` directory:**
```shell
cd frontend
```

2. Install dependencies
```shell
npm install
```

### Spring Boot Backend

**1. Navigate to the `backend` directory:**
```shell
cd backend
```

**2. Build the app:**
```shell
mvn clean install
```

## MS SQL Server Database / Stripe
**1. Modify `application.yml`:**
```shell
spring:
  datasource:
    driver-class-name: com.microsoft.sqlserver.jdbc.SQLServerDriver
    url: YOUR_DATABASE_CONNECTION_URL
    username: YOUR_DATABASE_USERNAME
    password: YOUR_DATABASE_PASSWORD
  jpa:
    show-sql: true
    properties:
      hibernate.dialect: org.hibernate.dialect.SQLServerDialect
    hibernate:
      ddl-auto: update
  
 
```
# App-Management-contacts
