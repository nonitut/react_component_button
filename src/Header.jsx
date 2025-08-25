// import logo from './logo.svg';
import React from "react";
// это пример функционального компонента (Современный стандарт)

function Header() {
return (
<header className="header">
    <nav className="nav">
    <div className="logo">
        <h1>Мой Сайт</h1>
    </div>
    <ul className="nav-menu">
        <li><a href="./App.js">Главная</a></li>
        <li><a href="./App.js">О нас</a></li>
        <li><a href="./App.js">Услуги</a></li>
        <li><a href="./App.js">Контакты</a></li>
    </ul>
    </nav>
</header>
);
}


export default Header
// для передачи компонента, писать либо сюда, либо перед началом функции