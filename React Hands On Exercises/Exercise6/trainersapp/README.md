# Exercise 6 - Trainers Application

## Overview

This exercise demonstrates client-side routing in React using React Router. The application displays trainer information and enables navigation between the Home page, Trainers List, and Trainer Details pages.

## Objectives

- Understand React Router.
- Configure BrowserRouter.
- Create navigation links.
- Pass URL parameters.
- Display dynamic content using useParams().

## Features

- Home Page
- Trainers List
- Trainer Details
- Dynamic Routing
- URL Parameter Passing

## Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6)
- JSX
- HTML5
- CSS3

## Project Structure

```text
trainersapp/
│
├── public/
├── src/
│   ├── Components/
│   │   ├── Home.js
│   │   ├── TrainersList.js
│   │   └── TrainerDetails.js
│   ├── Trainer.js
│   ├── TrainersMock.js
│   ├── App.js
│   └── ...
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

Install React Router.

```bash
npm install react-router-dom
```

## Running the Project

```bash
npm start
```

## Expected Output

The application provides:

- Home Page
- Trainers List
- Trainer Details page
- Navigation using React Router

## Learning Outcomes

- Configure React Router.
- Create routes.
- Navigate using Link.
- Pass parameters through URLs.
- Retrieve parameters using useParams().