import BaseNode from "./BaseNode"

export const LLMNode = ({ id }) => {

  return (

    <BaseNode
      title="LLM"
      inputs={[`${id}-prompt`]}
      outputs={[`${id}-response`]}
    >

      <div style={{fontSize:"12px"}}>
        AI Model
      </div>

    </BaseNode>

  )
}