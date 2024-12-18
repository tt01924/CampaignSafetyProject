import { useState } from "react";

import Login from "./Login";
import Script from "./Script";
import Topic from "./Topic";
import Boards from "./Boards"; 
import "./Style.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [isAdmin, setIsAdmin] = useState(false); // Admin role state

  const [isScriptOpen, setIsScriptOpen] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [isBoardsOpen, setIsBoardsOpen] = useState(false);

  // Handle login
  const handleLogin = (username, password) => {
    // Hardcoded login credentials
    if (username === "admin" && password === "admin123") {
      setIsAdmin(true);
      setIsLoggedIn(true);
    } else if (username && password) {
      setIsAdmin(false);
      setIsLoggedIn(true);
    } else {
      alert("Invalid login credentials");
    }
  };
  
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />; // Show the Login page if not logged in
  }
  
  if (isAdmin) {
    return (
      <div className="App">
        <h1>Welcome, Admin!</h1>
        <p>This is the admin page. Manage your application here.</p>
        {/* Add admin-specific functionality here */}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Welcome to Star Pack!</h1>
      {/* Buttons */}
      <button onClick={() => setIsTopicOpen(true)}>Video Topic</button>
      <button onClick={() => setIsBoardsOpen(true)}>Boards</button>
      <button onClick={() => setIsScriptOpen(true)}>Script</button>
      

      {isScriptOpen && <Script scriptOpenPopup={setIsScriptOpen} />}
      {isTopicOpen && <Topic topicOpenPopup={setIsTopicOpen} />}
      {isBoardsOpen && <Boards boardOpenPopup={setIsBoardsOpen} />}
      <h2>This is where influencers make their submissions.</h2>
    </div>
  );
}