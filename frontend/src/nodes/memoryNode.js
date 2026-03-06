import BaseNode from "./BaseNode"

export const MemoryNode = ({ id }) => {
  return (
    <BaseNode
      title="Memory"
      inputs={[`${id}-context`]}
      outputs={[`${id}-augmented`]}
      contentStyle={{
        fontSize: "12px",
        color: "#d1fae5",
      }}
    >
      <div>
        Store and reuse previous conversation or workflow state.
      </div>
    </BaseNode>
  )
}

