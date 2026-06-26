# Exercise 9 - Cricket Application

## Overview

This exercise demonstrates modern JavaScript (ES6) features in React. The application displays player information using arrays, the map() function, destructuring, arrow functions, and the spread operator.

## Objectives

- Implement ES6 features.
- Use arrow functions.
- Apply destructuring.
- Render lists using map().
- Merge arrays using the spread operator.

## Features

- Displays list of players.
- Filters players by score.
- Displays odd and even team players.
- Merges Indian players into a single array.

## Technologies Used

- React.js
- JavaScript (ES6)
- JSX

## Project Structure

```text
cricketapp/
│
├── public/
├── src/
│   ├── Components/
│   │   ├── ListofPlayers.js
│   │   ├── Scorebelow70.js
│   │   ├── OddPlayers.js
│   │   ├── EvenPlayers.js
│   │   └── ListofIndianPlayers.js
│   ├── App.js
│   └── ...
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Running the Project

```bash
npm start
```

## Expected Output

The application displays:

- List of Players
- Players with score below 70
- Odd Players
- Even Players
- Merged Indian Players

## Learning Outcomes

- Use ES6 features in React.
- Render lists dynamically.
- Apply destructuring.
- Merge arrays using spread syntax.
- Use map() effectively.