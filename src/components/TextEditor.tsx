import { useState, FC } from "react";
import Editor from "react-simple-wysiwyg";

type ContentEditableEvent = {
  target: EventTarget & { name?: string; value: string };
};

const TextEditor: FC = () => {
  const [html, setHtml] = useState("");

  function onChange(e: ContentEditableEvent) {
    setHtml(e.target.value);
  }

  return (
    <Editor
      style={{
        minHeight: "300px",
        overflowY: "auto",
      }}
      value={html}
      onChange={onChange}
    />
  );
};

export default TextEditor;
