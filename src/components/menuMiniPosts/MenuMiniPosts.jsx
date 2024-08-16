import Link from "next/link";

import styles from "./menuMiniPosts.module.css";

const MenuMiniPosts = ({ key, item }) => {
  let traducao;
  if (item?.catSlug === "fashion") traducao = "Moda";
  if (item?.catSlug === "culture") traducao = "Cultura";
  if (item?.catSlug === "coding") traducao = "Código";
  if (item?.catSlug === "food") traducao = "Comida";
  if (item?.catSlug === "style") traducao = "Estilo";
  if (item?.catSlug === "travel") traducao = "Viagen";

  return (
    <div className={styles.items} key={key}>
      <Link href={`/posts/${item?.slug}`} className={styles.item}>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles[item?.catSlug]}`}>
            {traducao}
          </span>
          <h3 className={styles.postTitle}>{item?.title}</h3>
          <div className={styles.detail}>
            <span className={styles.username}>{item?.user?.name}</span>
            <span className={styles.date}>
              {" "}
              - {item?.createdAt.substring(0, 10)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuMiniPosts;
