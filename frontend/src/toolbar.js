// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '18px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
          padding: '10px 14px',
          borderRadius: '999px',
          background:
            'radial-gradient(circle at 0 0, rgba(148,163,184,0.45), transparent 55%), rgba(15,23,42,0.94)',
          boxShadow: '0 14px 40px rgba(15,23,42,0.95)',
          backdropFilter: 'blur(14px)',
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '8px',
          padding: '6px 10px',
          borderRadius: '999px',
          background: 'rgba(15,23,42,0.85)',
          boxShadow: '0 10px 30px rgba(15,23,42,0.9)',
        }}
      >
        <DraggableNode type="template" label="Template" />
        <DraggableNode type="branch" label="Branch" />
        <DraggableNode type="memory" label="Memory" />
        <DraggableNode type="http" label="HTTP" />
        <DraggableNode type="logger" label="Logger" />
      </div>
    </div>
  );
};
