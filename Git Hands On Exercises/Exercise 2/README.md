# Git Hands-On Exercise 2 - Using .gitignore

## Overview

This exercise demonstrates how Git uses the `.gitignore` file to exclude unwanted files and directories from version control. Log files and log folders are ignored to maintain a clean repository.

## Objectives

- Understand the purpose of `.gitignore`.
- Ignore unnecessary files and folders.
- Verify ignored files using Git commands.

## Concepts Covered

- Git Ignore
- Tracked Files
- Ignored Files
- Git Status
- Git Add
- Git Commit

## Technologies Used

- Git
- GitHub
- Visual Studio Code

## Project Structure

```text
Exercise2/
│
├── .gitignore
├── error.log
├── logs/
│   └── output.txt
└── README.md
```

## Files Included

### .gitignore

```gitignore
*.log
logs/
```

### error.log

A sample log file demonstrating ignored file extensions.

### logs/output.txt

A sample log folder demonstrating ignored directories.

## Git Commands

```bash
git status
git add .gitignore
git commit -m "Added gitignore"
```

## Learning Outcomes

After completing this exercise, I learned to:

- Create and configure a `.gitignore` file.
- Ignore specific files and folders.
- Understand tracked and ignored files.
- Keep a Git repository clean and organized.