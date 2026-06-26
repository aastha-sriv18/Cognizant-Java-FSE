# Exercise 12 - Ticket Booking Application

## Overview

This exercise demonstrates conditional rendering in React by displaying different interfaces for guest users and logged-in users.

## Objectives

- Implement conditional rendering.
- Render components based on application state.
- Switch between Login and Logout views.

## Features

- Guest View
- User View
- Login Button
- Logout Button
- Flight Details Display

## Technologies Used

- React.js
- JavaScript (ES6)
- JSX

## Project Structure

```text
ticketbookingapp/
│
├── public/
├── src/
│   ├── Components/
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

Initially:

- Guest page with flight details.

After Login:

- User page with ticket booking option.

After Logout:

- Returns to Guest page.

## Learning Outcomes

- Understand conditional rendering.
- Switch UI based on state.
- Manage user login/logout flow.