import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  let traducao;
  if (item.catSlug === "fashion") traducao = "Moda";
  if (item.catSlug === "culture") traducao = "Cultura";
  if (item.catSlug === "coding") traducao = "Código";
  if (item.catSlug === "food") traducao = "Comida";
  if (item.catSlug === "style") traducao = "Estilo";
  if (item.catSlug === "travel") traducao = "Viagen";

  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            alt={item.title}
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{traducao}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Leia mais
        </Link>
      </div>
    </div>
  );
};

export default Card;
