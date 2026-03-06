// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = "grabbing"
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    )
    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "90px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        borderRadius: "999px",
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.95), rgba(129,140,248,0.95))",
        justifyContent: "center",
        padding: "0 14px",
        fontSize: "13px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "#e5e7eb",
        boxShadow: "0 10px 25px rgba(37,99,235,0.65)",
        border: "1px solid rgba(191,219,254,0.65)",
        transition:
          "transform 160ms ease-out, box-shadow 160ms ease-out, background 160ms ease-out",
      }}
      draggable
      onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
      onMouseUp={(e) =>
        (e.currentTarget.style.transform = "translateY(0px)")
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(37,99,235,0.78)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(37,99,235,0.65)"
        e.currentTarget.style.transform = "translateY(0px)"
      }}
    >
      <span>{label}</span>
    </div>
  )
}
