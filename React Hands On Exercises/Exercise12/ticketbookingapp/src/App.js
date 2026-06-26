import { useState } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ margin: "40px" }}>

      {isLoggedIn ? (
        <>
          <UserPage />
          <LogoutButton onClick={logout} />
        </>
      ) : (
        <>
          <GuestPage />
          <LoginButton onClick={login} />
        </>
      )}

    </div>
  );
}

export default App;