# Theory Questions

## What is Big O Notation?

Big O notation is a mathematical representation used to describe the performance or efficiency of an algorithm as the input size increases. It measures the worst-case growth rate of an algorithm.

Common complexities:

|Complexity	| Performance|
|-----------|------------|
|O(1)	    |Constant    |
|O(log n)	|Logarithmic |
|O(n)   	|Linear      |
|O(n log n) |Linearithmic|
|O(n²)  	|Quadratic   |

## Search Cases
### Best Case

The element is found immediately.

Example:
```text

First element in Linear Search
Middle element in Binary Search
```
### Average Case

The element is somewhere in the middle.

### Worst Case

The element is the last element or not present.

## Analysis
|Algorithm	  |Best	 |Average|	Worst |
|-------------|------|-------|--------|
|Linear Search|	O(1) |	O(n) |	O(n)  |
|Binary Search|	O(1) |O(log n)|O(log n)|

Which is Better?

Binary Search is more suitable because:

- Faster for large datasets.
- Requires sorted data.
- Performs logarithmic search.
- Widely used in e-commerce platforms.