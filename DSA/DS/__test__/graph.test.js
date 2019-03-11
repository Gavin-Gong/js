import Graph from "../graph"


test("graph", () => {
  let g = new Graph();
  g.addVertice("A");
  g.addVertice("B");
  g.addVertice("C");
  g.addVertice("D");
  g.addVertice("E");
  g.addVertice("F");
  g.addVertice("G");
  g.addVertice("H");
  g.addVertice("I");
  g.addEdge('A', 'B');
  g.addEdge('A', 'C');
  g.addEdge('A', 'D');
  g.addEdge('C', 'D');
  g.addEdge('C', 'G');
  g.addEdge('D', 'G');
  g.addEdge('D', 'H');
  g.addEdge('B', 'E');
  g.addEdge('B', 'F');
  g.addEdge('E', 'I');
  expect(g.toString()).toEqual(
`A -> B C D
B -> A E F
C -> A D G
D -> A C G H
E -> B I
F -> B
G -> C D
H -> D
I -> E`
)});