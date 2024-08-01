import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Olá, aqui é o Danilo!</b> Descubra mais sobre minhas histórias e
        ideias.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Sinta-se à vontade para ver tudo que está acontecendo de mais novo.
          </h1>
          <p className={styles.postDesc}>
            Estou muito feliz em ter você aqui no meu cantinho da web. Este blog
            nasceu da minha paixão por desenvolvimento, e aqui eu compartilho
            minhas experiências, aprendizados e ideias sobre programação. Eu
            adoraria ouvir suas opiniões, sugestões e histórias! Sinta-se à
            vontade para deixar comentários nos posts que você gostar e se
            conectar comigo nas redes sociais.
          </p>
          <button className={styles.button}>Veja mais!</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
