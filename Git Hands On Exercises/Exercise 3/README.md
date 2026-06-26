# Git Hands-On Exercise 3 - Branching and Merging

## Overview

This exercise demonstrates Git branching and merging operations. A new branch is created, changes are committed, differences are compared, and the branch is merged back into the main branch.

## Objectives

- Understand Git branching.
- Create and switch branches.
- Commit changes in a branch.
- Merge branches.
- Delete merged branches.

## Concepts Covered

- Git Branch
- Git Checkout
- Git Switch
- Git Merge
- Git Diff
- Git Log

## Technologies Used

- Git
- GitHub
- Visual Studio Code

## Project Structure

```text
Exercise3/
│
├── master.txt
├── GitNewBranch.txt
└── README.md
```

## Files Included

### master.txt

Represents the contents of the main branch.

### GitNewBranch.txt

Represents the changes made in the feature branch before merging.

## Git Commands

```bash
git branch GitNewBranch
git branch -a
git checkout GitNewBranch
git add .
git commit -m "Added feature in GitNewBranch"
git checkout main
git diff main GitNewBranch
git merge GitNewBranch
git log --oneline --graph --decorate
git branch -d GitNewBranch
```

## Learning Outcomes

After completing this exercise, I learned to:

- Create Git branches.
- Switch between branches.
- Commit changes independently.
- Compare branches using `git diff`.
- Merge feature branches into the main branch.
- Delete branches after merging.