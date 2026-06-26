# Git Hands-On Exercise 4 - Merge Conflict Resolution

## Overview

This exercise demonstrates how Git detects and resolves merge conflicts. Separate versions of a file are created in different branches, resulting in a conflict that is manually resolved before completing the merge.

## Objectives

- Understand merge conflicts.
- Simulate conflicting changes.
- Resolve merge conflicts manually.
- Use Git commands for merging and conflict resolution.

## Concepts Covered

- Git Branch
- Git Merge
- Merge Conflict
- Git Diff
- Git Log
- Git Ignore

## Technologies Used

- Git
- GitHub
- Visual Studio Code

## Project Structure

```text
Exercise4/
│
├── hello_master.xml
├── hello_branch.xml
├── hello_resolved.xml
├── .gitignore
└── README.md
```

## Files Included

### hello_master.xml

Represents the version of the file in the main branch.

### hello_branch.xml

Represents the version of the file in the feature branch.

### hello_resolved.xml

Represents the final merged file after conflict resolution.

### .gitignore

Ignores backup files generated during conflict resolution.

```gitignore
*.bak
```

## Git Commands

```bash
git branch GitWork
git checkout GitWork
git add .
git commit -m "Added hello.xml in GitWork"
git checkout main
git add .
git commit -m "Added hello.xml in master"
git merge GitWork
git diff main GitWork
git log --oneline --graph --decorate --all
git branch -d GitWork
```

## Learning Outcomes

After completing this exercise, I learned to:

- Create and merge branches.
- Identify merge conflicts.
- Resolve conflicts manually.
- Update `.gitignore` to ignore unnecessary files.
- Visualize commit history using `git log`.