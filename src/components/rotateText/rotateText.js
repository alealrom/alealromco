import React from "react";
import * as Styles from "./rotateText.module.css";

const RotateText = ({ text, children }) => {
  const lenght = text.length;
  const deg = 360 / lenght;
  return (
    <section className={Styles.wrapperRotateText}>
      <span className={Styles.rotateText}>
        <p>
          {text.split("").map((letra, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${deg * i}deg)`,
              }}
            >
              {letra}
            </span>
          ))}
        </p>
      </span>
      {children}
    </section>
  );
};

export default RotateText;
