[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## My Analysis

The runtime of this would be $\theta(V^2)$ where $V$ is the number of vertices. This is because inside the while loop there is 2 for loops that each run $V$ times one right after another. They run one right after another giving us $\theta(2V)$. The while loop runs while visited length is less than graph length. This makes the loop run $V$ times. This gives us $V(2V)$ or just $V^2$ after we multiply and drop the constant.


## Sources
https://www.w3schools.com/jsref/jsref_infinity.asp infinity for js

https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/  no code was taken from here, I just used their visual representations to help my understanding

chat gpt to help me find an error specifically with line 25 ```if (visited.indexOf(i) === -1 && dist[i] < min){```
