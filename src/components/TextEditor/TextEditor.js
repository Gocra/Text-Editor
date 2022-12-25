import { useEffect, useRef } from "react";
import "./TextEditor.css";
import content from "./defaultContent";

const TextEditor = () => {
  const pageRef = useRef();

  useEffect(() => {
    if (pageRef.current === null) return;
    pageRef.current.innerHTML = content;
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
