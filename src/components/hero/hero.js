import React from "react";
import * as Styles from "./hero.module.css";
import ale from "../../images/ale.png"
import RotateText from "../rotateText/rotateText";

const Hero = () => {
  return (
    <section className={Styles.hero}>
      <span>
        <p className={Styles.phrase}>"Son nuestras <span className={Styles.word}>decisiones </span>las que muestran lo que podemos llegar a <span className={Styles.word}>ser</span>, mucho más que nuestras propias <span className={Styles.word}>habilidades.</span>"</p>
        <p className={Styles.author}>― J. K. Rowling</p>
      </span>
      <span>
        <p className={Styles.firstName}>Alejandra</p>
        <span>
          <p className={Styles.lastName}>Romero</p>
          <p className={Styles.surname}>Álvarez&nbsp;</p>
        </span>
      </span>
      <div>
        <RotateText text=". alejandra álvarez romero . alealrom ">
          <img
            src={ale}
            alt= ""
          />
        </RotateText>
      </div>
    </section>
  );
};

export default Hero;
