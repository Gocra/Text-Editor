import coloursArray from "../../util/colourArrays";
import "./ColourPicker.css";

const ColourPicker = ({ setColour }) => {
  return (
    <div className="colour-picker">
      {coloursArray.map((arr, i) => (
        <div className="row" key={i}>
          {arr.map((colour, j) => (
            <div
              onClick={() => {
                setColour(colour);
              }}
              className="colour"
              key={j}
              style={{
                backgroundColor: colour,
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColourPicker;
