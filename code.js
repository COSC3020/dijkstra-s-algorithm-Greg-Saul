// initially tried recursion but it felt inefficient at least for my solution

// pesudocode from slides
// - initialize the dist to each vertex to infinity, source to 0
// - while there are unmarked vertices left in the graph
//     - select the unmarked vertex v with the lowest dist
//     - mark v with distance dist
//     - for each edge (v,w)
//         - dist(w) = min (\textrm{dist}(w), {dist}(v) + {weight of }(v, w))

function dijkstra(graph, sourceNode){
    let dist = [];
    let visited = [];

    for (let i = 0; i < graph.length; i++){
        dist[i] = Infinity;
    }
    dist[sourceNode] = 0;

    while (visited.length < graph.length){
        let min = Infinity;
        let current = 0;

        for (let i = 0; i < graph.length; i++){
            if (visited.indexOf(i) === -1 && dist[i] < min){
                min = dist[i];
                current = i;
            }
        }

        visited.push(current)

        for (let i = 0; i < graph.length; i++){
            if(graph[current][i] > 0 && dist[i] > dist[current] + graph[current][i]){
                dist[i] = Math.min(dist[i], dist[current] + graph[current][i]);
            }
        }
    }

    return dist;
}
