import * as React from "react";
import * as Styles from "./footer.module.css";
import SocialNetworks from "../socialNetworks/socialNetworks";

const Footer = () => {
  return (
    <footer>
      <section className={Styles.footerBox}>
        <p className={Styles.footerText}>
          © alealrom |&nbsp;Desarrollado por{" "}
          <a target="_blank" rel="noreferrer" href="https://alealrom.co/">
            Alejandra Álvarez Romero
          </a>
        </p>
        <SocialNetworks />
      </section>
    </footer>
  );
};

export default Footer;
