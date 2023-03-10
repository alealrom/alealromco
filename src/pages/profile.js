import * as React from "react";
import * as Styles from "./profile.module.css";
import CV from "../assets/CV_ALEJANDRA_ALVAREZ_ROMERO_.pdf";
import Layout from "../components/layout";
import ale from "../images/ale.png";

const Profile = () => {
  return (
    <Layout pageTitle={"Perfil | alealrom.co"}>
      <main className={Styles.profile}>
        <section className={Styles.profileBox}>
          <span>
            <img className={Styles.profilePic} src={ale} alt="" />
            <h2 className={Styles.profileName}>Ale</h2>
            <p className={Styles.profileMail}>
              <a target="_blank" rel="noreferrer" href="mailto:ale@alealrom.co">
                ale@alealrom.co
              </a>
            </p>
            <p className={Styles.profileCV}>
              <a target="_blank" rel="noreferrer" href={CV}>
                🡳 CV
              </a>
            </p>
          </span>
          <span>
            <h2 className={Styles.profileTitle}>
              Nuestras decisiones marcan el camino hacia nuestro máximo
              potencial.
            </h2>
            <br/>
            <span className={Styles.profileText}>
              <p>
                ¡Hola soy Ale! Comunicadora Social - Periodista de profesión con
                cinco años de experiencia en el mundo laboral y una gran amante
                de explorar nuevos mundos, nuevas habilidades y nuevas
                oportunidades.
              </p>
              <p>
                Desde siempre he creído firmemente que todos tenemos la
                posibilidad de reinventarnos. Sin importar la edad, puede ser a
                los 15, a los 30 o a los 50 años. Lo que sí importa y hace
                relevante el proceso de reinventarnos es que tengamos las ganas
                al 110% y especialmente que creamos desde lo más profundo de
                nuestro corazón !que podemos lograrlo!.
              </p>
              <p>
                Y es ahí donde después de cinco años sintiéndome perdida y sin
                rumbo, decidí reinventarme y enfocarme en descubrir mi máximo
                potencial. Desde muy joven he sentido mucha curiosidad por el
                mundo digital, y con esas ganas ávidas de reinventarme y crecer,
                hace casi dos años empecé a estudiar Desarrollo Web, encontrando
                en el desarrollo front-end una nueva manera de expresar mi
                creatividad y viendo ante mí la magia de como un código toma
                vida y se convierte en un sitio web funcional.
              </p>
              <p>
                Ya sea que esté trabajando en un proyecto web emocionante o
                conectándome con nuevos colegas, estoy lista para llevar mis
                habilidades y mi pasión al siguiente nivel.
              </p>
            </span>
          </span>
        </section>
      </main>
    </Layout>
  );
};

export default Profile;
