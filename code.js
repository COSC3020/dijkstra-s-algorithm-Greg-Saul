// pesudocode from slides
// - initialize the dist to each vertex to infinity, source to 0
// - while there are unmarked vertices left in the graph
//     - select the unmarked vertex v with the lowest dist
//     - mark v with distance dist
//     - for each edge (v,w)
//         - dist(w) = min (\textrm{dist}(w), {dist}(v) + {weight of }(v, w))


// using adjacency matrix because I find that easier for weighted graphs
function dijkstra(graph, sourceNode) {
    let dist = [];
    let visited = []
    for(let i = 0; i < graph.length; i++){
        dist[i] = Infinity;
    }
    dist[sourceNode] = 0;

    while(visited.length < graph.length){
        
    }
}
