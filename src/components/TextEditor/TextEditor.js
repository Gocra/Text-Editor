import { useEffect, useRef } from "react";
import "./TextEditor.css";

const TextEditor = () => {
  const pageRef = useRef();

  useEffect(() => {
    if (pageRef.current === null) return;
    pageRef.current.focus();
  }, [pageRef]);

  return (
    <div className="text-editor">
      <div
        ref={pageRef}
        className="page"
        contentEditable="true"
        spellCheck="false"
      ></div>
    </div>
  );
};

export default TextEditor;
