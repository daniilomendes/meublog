import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Seja bem vindo!</b> Descubra mais histórias e ideias.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Sinta-se à vontade para ver e comentar tudo.
          </h1>
          <p className={styles.postDesc}>
            Este blog nasceu da minha paixão por desenvolvimento, e aqui
            compartilha-se experiências, aprendizados e ideias sobre variados
            assuntos. Adoraria ouvir suas opiniões, sugestões e histórias!
            Sinta-se à vontade para deixar comentários nos posts que você gostar
            e se conectar comigo nas redes sociais.
          </p>
          <p className={styles.postDesc}>Continue descendo!</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
