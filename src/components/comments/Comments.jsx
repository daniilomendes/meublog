import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comentários</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Escreva um comentário..."
            className={styles.input}
          />
          <button className={styles.button}>Enviar</button>
        </div>
      ) : (
        <Link href="/login">Faça login para escrever um comentário.</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width="50"
              height="50"
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Danilo Mendes</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            excepturi voluptatem impedit ullam saepe, reiciendis corporis
            maiores iure obcaecati similique cum facilis odio in nam repellat
            nostrum temporibus nisi ad.
          </p>
        </div>
      </div>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width="50"
              height="50"
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Danilo Mendes</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            excepturi voluptatem impedit ullam saepe, reiciendis corporis
            maiores iure obcaecati similique cum facilis odio in nam repellat
            nostrum temporibus nisi ad.
          </p>
        </div>
      </div>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width="50"
              height="50"
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Danilo Mendes</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            excepturi voluptatem impedit ullam saepe, reiciendis corporis
            maiores iure obcaecati similique cum facilis odio in nam repellat
            nostrum temporibus nisi ad.
          </p>
        </div>
      </div>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width="50"
              height="50"
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Danilo Mendes</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            excepturi voluptatem impedit ullam saepe, reiciendis corporis
            maiores iure obcaecati similique cum facilis odio in nam repellat
            nostrum temporibus nisi ad.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Comments;
