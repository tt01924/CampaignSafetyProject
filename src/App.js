import { useState } from "react";

import Login from "./Login";
import Script from "./Script";
import Topic from "./Topic";
import Boards from "./Boards"; 
import "./Style.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login
  const [isAdmin, setIsAdmin] = useState(false); // Admin 

  const [isScriptOpen, setIsScriptOpen] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [isBoardsOpen, setIsBoardsOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutBack] = useState(false);

  // Handle login
  const handleLogin = async (username, password) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true);
        setIsAdmin(data.role === "admin");
      } else {
        alert("Invalid login credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login.");
    }
  };

  const handleLogout = async () => {
    try {
      // Example: Pass the username and any submissions to the backend
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "current_user", // Replace with actual username
          submissions: [], // Replace with actual submissions if applicable
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setIsLoggedIn(false); // Reset login state
        setIsAdmin(false); // Reset admin state
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  if (isAdmin) {
    return (
      <div className="App">
        <h1>Welcome, Admin!</h1>
        <p>This is the admin page. Manage influencer submissions here.</p>
        <button onClick={handleLogout}>Logout</button>
        {/* Add admin-specific functionality here */}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Welcome to Star Pack !</h1>
      {/* Buttons */}
      <button onClick={() => setIsTopicOpen(true)}>Video Topic</button>
      <button onClick={() => setIsBoardsOpen(true)}>Boards</button>
      <button onClick={() => setIsScriptOpen(true)}>Script</button>
      <button onClick={handleLogout}>Logout</button>

      {isScriptOpen && <Script scriptOpenPopup={setIsScriptOpen} />}
      {isTopicOpen && <Topic topicOpenPopup={setIsTopicOpen} />}
      {isBoardsOpen && <Boards boardOpenPopup={setIsBoardsOpen} />}
      <h2>This is where influencers make their submissions.</h2>
    </div>
  );
}
