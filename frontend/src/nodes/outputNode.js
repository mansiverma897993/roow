import BaseNode from "./BaseNode"

export const OutputNode = ({ id }) => {

  return (

    <BaseNode
      title="Output"
      inputs={[`${id}-input`]}
    >

      <div style={{fontSize:"12px"}}>
        Output result
      </div>

    </BaseNode>

  )
}