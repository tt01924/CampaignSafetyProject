import { AiOutlineCloseSquare } from "react-icons/ai";
// Popup that occurs when uploading image
const BoardPopup = ({ title, description, link, onClose }) => {
  return (
    <div
      onClick={onClose}
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
          <h1 style={{ margin: 0 }}>{title}</h1>
          <div
            onClick={onClose}
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
          <p>{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007BFF", textDecoration: "none" }}
          >
            Click here
          </a>
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid lightgray",
            paddingTop: "10px",
            marginTop: "10px"
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "#FF6347",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BoardPopup;