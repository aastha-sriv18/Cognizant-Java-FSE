# Theory Questions

## What is Recursion?

Recursion is a programming technique where a method calls itself until a terminating condition is reached.

It simplifies repetitive calculations such as:

* Factorial
* Fibonacci
* Tree Traversal
* Financial Growth

## Time Complexity

Each recursive call executes once per year.

Therefore,
```text
Time Complexity = O(n)
```

where n = number of years.

## Optimization

The recursive solution can be optimized by:

- Using an iterative loop instead of recursion.
- Applying Dynamic Programming (Memoization) if overlapping subproblems exist.
- Avoiding excessive recursive calls to reduce stack usage.

The iterative approach is generally preferred for very large numbers of years because it avoids stack overflow while maintaining O(n) time complexity.