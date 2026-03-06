import BaseNode from "./BaseNode"

export const TemplateNode = ({ id }) => {
  return (
    <BaseNode
      title="Template"
      inputs={[`${id}-data`]}
      outputs={[`${id}-rendered`]}
      contentStyle={{
        fontSize: "12px",
        color: "#cbd5f5",
      }}
    >
      <div>
        Render structured content from inputs using lightweight templates.
      </div>
    </BaseNode>
  )
}

