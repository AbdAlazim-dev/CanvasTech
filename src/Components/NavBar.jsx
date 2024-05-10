import { Link } from "react-router-dom";
import React, { useState } from "react";
import JdwaLogo from "../assets/Aljdwa.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


function NavBar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [Sticky, setSticky] = useState(false)

    const openMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }
    const closeMobileMenu = () => {
        setMobileMenu(false)
    }
    // if The user scrolls down, the navbar will be sticky
    const handleScroll = () => {
        if (window.scrollY < 10) {
          setSticky(true);
        } else {
          setSticky(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    return (
        <>
            <header className="navbar">
                <nav className={`navbar__container ${Sticky ? "top_header" : ""}`}>
                <div 
                    onClick={closeMobileMenu}
                    className={`overlay ${mobileMenu && "active"}`}>
                </div>
                    <Link to="/" className="navbar__container__image">
                        <img src={JdwaLogo} alt="logo"/>
                    </Link>
                    <ul className="navbar__container__links">
                        <li><a href="">عن الجدوى</a></li>
                        <li><a href="">الخدمات الاستشارية</a></li>
                        <li><a href="">مجتمع الجدوى</a></li>
                    <button className="navbar__container__btn">
                        تسجيل الدخول
                    </button>
                    </ul>
                    <button onClick={openMobileMenu}
                        className="navbar__container__mobile__menu">
                        <GiHamburgerMenu/>
                    </button>
                </nav>
                <nav className={`mobile__navbar ${mobileMenu && "active_mobile_menu"}`}>
                    <button className="mobile__navbar__close">
                        <IoMdClose onClick={closeMobileMenu}/>
                    </button>
                    <img src={JdwaLogo} className="logo"/>
                    <ul className="mobile__navbar__links">
                        <li><a href="">عن الجدوى</a></li>
                        <li><a href="">الخدمات الاستشارية</a></li>
                        <li><a href="">مجتمع الجدوى</a></li>
                        <li><a href="">انضم إلينا</a></li>
                        <li><a href="">اتصل بنا</a></li>
                        <li><a href="">تسجيل الدخول</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default NavBar;