import BaseNode from "./BaseNode"

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      title="Logger"
      inputs={[`${id}-input`]}
      outputs={[`${id}-passthrough`]}
      contentStyle={{
        fontSize: "12px",
        color: "#fde68a",
      }}
    >
      <div>
        Inspect and debug values flowing through your pipeline.
      </div>
    </BaseNode>
  )
}

