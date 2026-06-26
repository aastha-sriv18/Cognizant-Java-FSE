# Exercise 4 - Blog Application

## Overview

This exercise demonstrates React class components and component lifecycle methods. A Blog application is developed to understand how components are initialized, mounted, rendered, and how errors can be handled using lifecycle hooks.

The application introduces the use of `componentDidMount()` and `componentDidCatch()` methods.

## Objectives

- Understand React component lifecycle.
- Implement class components.
- Use componentDidMount().
- Use componentDidCatch().
- Understand component rendering sequence.

## Features

- Class component implementation.
- Lifecycle hook demonstration.
- Fetching data after component mounting.
- Basic error handling using componentDidCatch().
- Blog post display.

## Technologies Used

- React.js
- JavaScript (ES6)
- JSX
- HTML5
- CSS3
- Node.js
- npm

## Project Structure

```text
blogapp/
│
├── public/
├── src/
│   ├── Post.js
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── package.json
└── README.md
```

## Installation

Install dependencies.

```bash
npm install
```

## Running the Project

Start the application.

```bash
npm start
```

Visit:

```
http://localhost:3000
```

## Expected Output

The application displays blog post details and demonstrates the execution of lifecycle methods during component rendering.

## Learning Outcomes

After completing this exercise, I learned to:

- Create React class components.
- Understand the React component lifecycle.
- Implement `componentDidMount()`.
- Implement `componentDidCatch()`.
- Render data after component mounting.