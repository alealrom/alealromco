import React, { useState, useEffect } from "react";
import * as Styles from "./header.module.css";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles/globalStyles";
import SocialNetworks from "../socialNetworks/socialNetworks";
import Toggle from "../toggle/toggle";

function defaultTheme() {
  const themeSave = window.localStorage.getItem("theme");
  return themeSave ? themeSave : "light";
}
const Header = () => {
  const [theme, setTheme] = useState(defaultTheme());

  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  const themeToggle = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const icon =
    theme === "dark" ? (
      <svg viewBox="-4 -5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M11.75 5.5C11.1977 5.5 10.75 5.05228 10.75 4.5V2C10.75 1.44772 11.1977 1 11.75 1H12.25C12.8023 1 13.25 1.44772 13.25 2V4.5C13.25 5.05228 12.8023 5.5 12.25 5.5H11.75Z"
            fill="#D96191"
          ></path>{" "}
          <path
            d="M16.4194 7.22698C16.0289 6.83646 16.0289 6.20329 16.4194 5.81277L18.1872 4.045C18.5777 3.65447 19.2109 3.65447 19.6014 4.045L19.9549 4.39855C20.3455 4.78908 20.3455 5.42224 19.9549 5.81277L18.1872 7.58053C17.7967 7.97106 17.1635 7.97106 16.773 7.58053L16.4194 7.22698Z"
            fill="#D96191"
          ></path>{" "}
          <path
            d="M18.5 11.75C18.5 11.1977 18.9477 10.75 19.5 10.75H22C22.5523 10.75 23 11.1977 23 11.75V12.25C23 12.8023 22.5523 13.25 22 13.25H19.5C18.9477 13.25 18.5 12.8023 18.5 12.25V11.75Z"
            fill="#D96191"
          ></path>{" "}
          <path
            d="M16.7728 16.4194C17.1633 16.0289 17.7965 16.0289 18.187 16.4194L19.9548 18.1872C20.3453 18.5777 20.3453 19.2109 19.9548 19.6014L19.6012 19.9549C19.2107 20.3455 18.5775 20.3455 18.187 19.9549L16.4192 18.1872C16.0287 17.7967 16.0287 17.1635 16.4192 16.773L16.7728 16.4194Z"
            fill="#D96191"
          ></path>{" "}
          <path
            d="M12.25 18.5C12.8023 18.5 13.25 18.9477 13.25 19.5V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V19.5C10.75 18.9477 11.1977 18.5 11.75 18.5H12.25Z"
            fill="#D96191"
          ></path>{" "}
          <path
            d="M7.58059 16.773C7.97111 17.1635 7.97111 17.7967 7.58059 18.1872L5.81282 19.955C5.4223 20.3455 4.78913 20.3455 4.39861 19.955L4.04505 19.6014C3.65453 19.2109 3.65453 18.5778 4.04505 18.1872L5.81282 16.4195C6.20334 16.0289 6.83651 16.0289 7.22703 16.4195L7.58059 16.773Z"
            fill="#D96191"
          ></path>{" "}
          <path
            d="M5.5 12.25C5.5 12.8023 5.05228 13.25 4.5 13.25H2C1.44772 13.25 1 12.8023 1 12.25V11.75C1 11.1977 1.44772 10.75 2 10.75H4.5C5.05228 10.75 5.5 11.1977 5.5 11.75V12.25Z"
            fill="#D96191"
          ></path>{" "}
          <path
            d="M7.22722 7.58059C6.8367 7.97111 6.20353 7.97111 5.81301 7.58059L4.04524 5.81282C3.65472 5.4223 3.65472 4.78913 4.04524 4.39861L4.3988 4.04505C4.78932 3.65453 5.42248 3.65453 5.81301 4.04505L7.58078 5.81282C7.9713 6.20334 7.9713 6.83651 7.58078 7.22703L7.22722 7.58059Z"
            fill="#D96191"
          ></path>{" "}
          <path
            d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"
            fill="#D96191"
          ></path>{" "}
        </g>
      </svg>
    ) : (
      <svg viewBox="-4 -5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z"
            fill="#D96191"
          ></path>{" "}
        </g>
      </svg>
    );

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <StaticImage
                  src="../../images/icon.png"
                  alt="Logo alealrom"
                  placeholder="tracedSVG"
                  layout="fixed"
                  width={110}
                  height={63}
                />
              </Link>
            </li>
            <li className={Styles.navItem}>
              <Link className={Styles.navLinks} to="/profile">
                Perfil
              </Link>
            </li>
            <li className={Styles.navItem}>
              <Link className={Styles.navLinks} to="/blog">
                Blog
              </Link>
            </li>
            <SocialNetworks />
            <Toggle theme={themeMode} toggleTheme={themeToggle} icon={icon} />
          </ul>
        </nav>
      </header>
    </ThemeProvider>
  );
};

export default Header;
