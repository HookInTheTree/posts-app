import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MyNavbar.module.css"
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context/authContext";

const MyNavbar = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)

  const exit = (event) => {
    event.preventDefault();
    setIsAuth(false);
    localStorage.setItem("auth", "false");
  }

  return (
    <div className={classes.navbar}>
      <MyButton onClick={exit}>Выход</MyButton>
      <div className={classes.navbar__links}>
        <Link to="/posts">Посты</Link>
        <Link to="/about">О Проекте</Link>
      </div>
    </div>
  );
};

export default MyNavbar;
