import BaseNode from "./BaseNode"

export const HttpNode = ({ id }) => {
  return (
    <BaseNode
      title="HTTP"
      inputs={[`${id}-request`]}
      outputs={[`${id}-response`]}
      contentStyle={{
        fontSize: "12px",
        color: "#bfdbfe",
      }}
    >
      <div>
        Call an external HTTP API and pass the response downstream.
      </div>
    </BaseNode>
  )
}

