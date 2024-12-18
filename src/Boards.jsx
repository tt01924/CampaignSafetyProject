import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import BoardPopup from "./BoardPopup";

const Boards = ({ boardOpenPopup }) => {
  // States to control project popups
  const [isProject1Open, setIsProject1Open] = useState(false);
  const [isProject2Open, setIsProject2Open] = useState(false);

  return (
    <div
      onClick={boardOpenPopup.bind(this, false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "white",
          borderRadius: "8px",
          width: "300px",
          padding: "20px 10px",
          animation: "dropTop .3s linear"
        }}
      >
        {/* Header */}
        <div
          style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }}
        >
          <h1 style={{ margin: 0 }}>Milanote Board submission</h1>
          <div
            onClick={boardOpenPopup.bind(this, false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10
            }}
          >
            <AiOutlineCloseSquare />
          </div>
        </div>

        {/* Body */}
        <div style={{ marginTop: "10px" }}>
          <h3>boards:</h3>
          {/* Buttons */}
          <button
            onClick={() => setIsProject1Open(true)}
            style={buttonStyle}
          >
            Board 1
          </button> 
          {/* Add required guardrail */}
          <button
            onClick={() => setIsProject2Open(true)}
            style={buttonStyle}
          >
            Board 2
          </button>
          {/* Add required guardrail */}
        </div>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid lightgray", paddingTop: "10px" }}>
          <p>Footer here</p>
        </footer>
      </div>

      {/* Conditionally Render Project Popups */}
      {isProject1Open && (
        <BoardPopup
          title="Project 1 Details"
          description="This is where you submit your first board."
          link="https://github.com/username/project1"
          onClose={() => setIsProject1Open(false)}
        />
      )}
      {isProject2Open && (
        <BoardPopup
          title="Board 2 Details"
          description="This is where you submit your second board."
          link="https://github.com/username/project2"
          onClose={() => setIsProject2Open(false)}
        />
      )}
    </div>
  );
};

export default Boards;

// Button Style
const buttonStyle = {
  background: "#007BFF",
  color: "white",
  border: "none",
  padding: "10px 15px",
  margin: "5px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold"
};