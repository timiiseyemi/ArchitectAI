import dagre from "@dagrejs/dagre"
import { Node, Edge } from "reactflow"

const graph = new dagre.graphlib.Graph()

graph.setDefaultEdgeLabel(() => ({}))

export function getLayoutedElements(
  nodes: Node[],
  edges: Edge[]
) {
  graph.setGraph({
    rankdir: "TB",
    nodesep: 120,
    ranksep: 140,
    marginx: 50,
    marginy: 50,
  })

  nodes.forEach((node) => {
    graph.setNode(node.id, {
      width: 240,
      height: 90,
    })
  })

  edges.forEach((edge) => {
    graph.setEdge(edge.source, edge.target)
  })

  dagre.layout(graph)

  return nodes.map((node) => {
    const position = graph.node(node.id)

    node.position = {
      x: position.x - 120,
      y: position.y - 45,
    }

    return node
  })
}