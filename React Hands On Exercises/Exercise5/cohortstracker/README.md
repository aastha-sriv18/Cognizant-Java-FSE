# Exercise 5 - Cohorts Tracker

## Overview

This exercise demonstrates different techniques for styling React components. A Cohorts Tracker dashboard is developed to display ongoing and completed training cohorts using CSS Modules and conditional styling.

The application highlights cohort status with different colors and applies reusable styles using CSS Modules.

## Objectives

- Understand the need for styling React components.
- Apply CSS Modules for component-level styling.
- Use inline styles for dynamic formatting.
- Implement conditional styling based on component data.

## Features

- Displays ongoing and completed cohorts.
- CSS Module implementation.
- Conditional text color based on cohort status.
- Responsive card-based layout.

## Technologies Used

- React.js
- JavaScript (ES6)
- CSS Modules
- HTML5
- Node.js
- npm

## Project Structure

```text
cohortstracker/
│
├── public/
├── src/
│   ├── Components/
│   │   └── CohortDetails.js
│   ├── CohortDetails.module.css
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

Visit:

```
http://localhost:3000
```

## Expected Output

The application displays multiple cohort cards with:

- Cohort Name
- Current Status
- Trainer
- Coach

The status appears in **green** for ongoing cohorts and **blue** for completed cohorts.

## Learning Outcomes

- Apply CSS Modules.
- Implement inline styling.
- Use conditional styling.
- Build reusable UI components.