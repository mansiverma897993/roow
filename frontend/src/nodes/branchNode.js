import BaseNode from "./BaseNode"

export const BranchNode = ({ id }) => {
  return (
    <BaseNode
      title="Branch"
      inputs={[`${id}-condition`, `${id}-onTrue`, `${id}-onFalse`]}
      outputs={[`${id}-result`]}
      contentStyle={{
        fontSize: "12px",
        color: "#e5e7eb",
      }}
    >
      <div>
        Route data based on a boolean condition into different paths.
      </div>
    </BaseNode>
  )
}

