import { useState } from "react"
import BaseNode from "./BaseNode"

export const InputNode = ({ id, data }) => {

  const [name,setName] = useState(data?.inputName || "input")
  const [type,setType] = useState(data?.inputType || "Text")

  return (

    <BaseNode
      title="Input"
      outputs={[`${id}-value`]}
    >

      <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>

        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{padding:"4px",borderRadius:"6px"}}
        />

        <select
          value={type}
          onChange={(e)=>setType(e.target.value)}
          style={{padding:"4px",borderRadius:"6px"}}
        >
          <option>Text</option>
          <option>File</option>
        </select>

      </div>

    </BaseNode>

  )
}