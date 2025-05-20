// src/components/Editor.tsx
import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';
import 'jodit/es2021/jodit.min.css';

type EditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = {
    readonly: false,
    toolbarAdaptive: false,
    toolbarSticky: false,
    useIframeResizer: false,
    showXPathInStatusbar: false,
    showCharsCounter: true,
    showWordsCounter: true,
    uploader: {
      insertImageAsBase64URI: true, // Permite subir imagem local direto
    },
    height: 400,
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      onBlur={(newContent) => onChange(newContent)}
    />
  );
};
