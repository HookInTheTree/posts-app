import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context/authContext';

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
    }

    return (
        <div>
            <h1>Страница входа</h1>
            <form onSubmit={login}>
                <MyInput type='tenxt' placeholder='Введите логин'/>
                <MyInput type='password' placeholder='Введите пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;