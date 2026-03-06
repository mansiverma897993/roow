import { PipelineToolbar } from "./toolbar"
import { PipelineUI } from "./ui"
import { submitPipeline } from "./submit"
import { useStore } from "./store"
import { shallow } from "zustand/shallow"

function App() {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  )

  const handleSubmit = () => {
    submitPipeline(nodes, edges)
  }

  return (
    <div className="app-shell">
      <PipelineToolbar />
      <PipelineUI />
      <div className="submit-shell">
        <button className="submit-button" onClick={handleSubmit}>
          Submit Pipeline
        </button>
      </div>
    </div>
  )
}

export default App
