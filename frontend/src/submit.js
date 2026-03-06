export async function submitPipeline(nodes, edges) {

  try {

    const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nodes, edges })
    })

    const data = await response.json()

    const message = `
Pipeline Analysis

Nodes: ${data.num_nodes}
Edges: ${data.num_edges}

Valid DAG: ${data.is_dag ? "Yes" : "No"}
`

    window.alert(message)

  } catch (error) {

    console.error("Pipeline submission failed:", error)

    window.alert("Error connecting to backend")

  }

}