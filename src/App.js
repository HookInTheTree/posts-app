import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/UI/navbar/MyNavbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/authContext";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    let isAuth = localStorage.getItem("auth");
    if (isAuth === "true"){
      setIsAuth(true);
    }
  })

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <MyNavbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
