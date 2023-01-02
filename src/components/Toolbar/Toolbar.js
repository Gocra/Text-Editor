import { useState } from "react";
import "./Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUndo,
  faRedo,
  faPrint,
  faHeading,
  faBold,
  faItalic,
  faUnderline,
  faHighlighter,
  faPalette,
  faListDots,
  faListNumeric,
  faAlignJustify,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faChevronDown,
  faIndent,
  faOutdent,
} from "@fortawesome/free-solid-svg-icons";
import ColourPicker from "../ColourPicker/ColourPicker";

const Toolbar = () => {
  const [headingDropdownIsOpen, setHeadingDropdownIsOpen] = useState(false);
  const [showTextColourPicker, setShowTextColourPicker] = useState(false);
  const [showHighlightColourPicker, setShowHighlightColourPicker] =
    useState(false);

  const eCommand = (command) => {
    document.execCommand(command, false, null);
  };

  const heading = (size) => {
    if (size === 0) {
      document.execCommand("formatBlock", false, "<P>");
    } else {
      document.execCommand("formatBlock", false, `<H${size}>`);
    }
    setHeadingDropdownIsOpen(false);
  };

  const changeTextColor = (color) => {
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("foreColor", false, color);
    setShowTextColourPicker(false);
  };

  const highlight = (color) => {
    document.execCommand("hiliteColor", false, color);
    setShowHighlightColourPicker(false);
  };

  return (
    <div className="toolbar">
      <div className="buttons-container">
        <div className="toolbar-section">
          <button
            data-tooltip="Undo"
            className="btn"
            onClick={() => eCommand("undo")}
          >
            <FontAwesomeIcon icon={faUndo} className="icon" />
          </button>
          <button
            data-tooltip="Redo"
            className="btn"
            onClick={() => eCommand("redo")}
          >
            <FontAwesomeIcon icon={faRedo} className="icon" />
          </button>
          <button data-tooltip="Print" className="btn" onClick={window.print}>
            <FontAwesomeIcon icon={faPrint} className="icon" />
          </button>
        </div>
        <div className="toolbar-section">
          <button
            data-tooltip="Headings"
            className="btn"
            onClick={() => setHeadingDropdownIsOpen(!headingDropdownIsOpen)}
          >
            <FontAwesomeIcon icon={faHeading} className="icon" />
            <FontAwesomeIcon icon={faChevronDown} className="icon-dropdown" />
          </button>
          {headingDropdownIsOpen ? (
            <div className="dropdown">
              <button className="dropdown-item" onClick={() => heading(0)}>
                Normal Text
              </button>
              <button className="dropdown-item" onClick={() => heading(1)}>
                <h1>Heading 1</h1>
              </button>
              <button className="dropdown-item" onClick={() => heading(2)}>
                <h2>Heading 2</h2>
              </button>
              <button className="dropdown-item" onClick={() => heading(3)}>
                <h3>Heading 3</h3>
              </button>
            </div>
          ) : null}
        </div>
        <div className="toolbar-section">
          <button
            data-tooltip="Bold"
            className="btn"
            onClick={() => eCommand("bold")}
          >
            <FontAwesomeIcon icon={faBold} className="icon" />
          </button>
          <button
            data-tooltip="Italitc"
            className="btn"
            onClick={() => eCommand("italic")}
          >
            <FontAwesomeIcon icon={faItalic} className="icon" />
          </button>
          <button
            data-tooltip="Underline"
            className="btn"
            onClick={() => eCommand("underline")}
          >
            <FontAwesomeIcon icon={faUnderline} className="icon" />
          </button>
          <button
            data-tooltip="Font Colour"
            className="btn"
            onClick={() => setShowTextColourPicker(!showTextColourPicker)}
            onBlur={() => {
              setShowTextColourPicker(false);
            }}
          >
            <FontAwesomeIcon icon={faPalette} className="icon" />
            {showTextColourPicker ? (
              <ColourPicker setColour={changeTextColor} />
            ) : null}
          </button>
          <button
            data-tooltip="Highlight Colour"
            className="btn"
            onClick={() =>
              setShowHighlightColourPicker(!showHighlightColourPicker)
            }
            onBlur={() => {
              setShowHighlightColourPicker(false);
            }}
          >
            <FontAwesomeIcon icon={faHighlighter} className="icon" />
            {showHighlightColourPicker ? (
              <ColourPicker
                setIsOpen={setShowHighlightColourPicker}
                setColour={highlight}
              />
            ) : null}
          </button>
        </div>
        <div className="toolbar-section">
          <button
            data-tooltip="Bulleted List"
            className="btn"
            onClick={() => eCommand("insertUnorderedList")}
          >
            <FontAwesomeIcon icon={faListDots} className="icon" />
          </button>
          <button
            className="btn"
            data-tooltip="Numbered List"
            onClick={() => eCommand("insertOrderedList")}
          >
            <FontAwesomeIcon icon={faListNumeric} className="icon" />
          </button>
        </div>
        <div className="toolbar-section">
          <button
            data-tooltip="Align Left"
            className="btn"
            onClick={() => eCommand("justifyLeft")}
          >
            <FontAwesomeIcon icon={faAlignLeft} className="icon" />
          </button>
          <button
            data-tooltip="Align Center"
            className="btn"
            onClick={() => eCommand("justifyCenter")}
          >
            <FontAwesomeIcon icon={faAlignCenter} className="icon" />
          </button>
          <button
            data-tooltip="Align Right"
            className="btn"
            onClick={() => eCommand("justifyRight")}
          >
            <FontAwesomeIcon icon={faAlignRight} className="icon" />
          </button>
          <button
            data-tooltip="Align Full"
            className="btn"
            onClick={() => eCommand("justifyFull")}
          >
            <FontAwesomeIcon icon={faAlignJustify} className="icon" />
          </button>
          <button className="btn" data-tooltip="Indent">
            <FontAwesomeIcon
              icon={faIndent}
              className="icon"
              onClick={() => eCommand("indent")}
            />
          </button>
          <button className="btn" data-tooltip="Unindent">
            <FontAwesomeIcon
              icon={faOutdent}
              className="icon"
              onClick={() => eCommand("outdent")}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
