import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Boards = ({ boardOpenPopup }) => {
  const [isProject1Open, setIsProject1Open] = useState(false);
  const [isProject2Open, setIsProject2Open] = useState(false);

  const handleImageSubmit = async (event, projectNumber) => {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = event.target.elements.file;
    const image = fileInput.files[0];

    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    formData.append("image", image);
    formData.append("project", projectNumber);

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          animation: "dropTop .3s linear",
        }}
      >
        {/* Header */}
        <div
          style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }}
        >
          <h1 style={{ margin: 0 }}>Influencer Board Submission</h1>
          <div
            onClick={() => boardOpenPopup(false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <AiOutlineCloseSquare />
          </div>
        </div>

        {/* Body */}
        <div style={{ marginTop: "10px" }}>
          <h3>Boards:</h3>
          {/* Buttons */}
          <button
            onClick={() => setIsProject1Open(true)}
            style={buttonStyle}
          >
            Submit Board 1
          </button>
          <button
            onClick={() => setIsProject2Open(true)}
            style={buttonStyle}
          >
            Submit Board 2
          </button>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid lightgray", paddingTop: "10px" }}>
          <p>Written by Todd Taylor</p>
        </footer>
      </div>

      {isProject1Open && (
        <div style={popupStyle}>
          <h3>Submit Board 1</h3>
          <form onSubmit={(e) => handleImageSubmit(e, 1)}>
            <input type="file" name="file" accept="image/*" />
            <button type="submit" style={buttonStyle}>
              Upload Image
            </button>
          </form>
          <button onClick={() => setIsProject1Open(false)} style={buttonStyle}>
            Close
          </button>
        </div>
      )}
      {isProject2Open && (
        <div style={popupStyle}>
          <h3>Submit Board 2</h3>
          <form onSubmit={(e) => handleImageSubmit(e, 2)}>
            <input type="file" name="file" accept="image/*" />
            <button type="submit" style={buttonStyle}>
              Upload Image
            </button>
          </form>
          <button onClick={() => setIsProject2Open(false)} style={buttonStyle}>
            Close
          </button>
        </div>
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
  fontWeight: "bold",
};

// Popup Style
const popupStyle = {
  position: "fixed",
  background: "white",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
};
