import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore
          tenetur quasi sunt pariatur hic velit qui cumque architecto ullam
          veniam, voluptate omnis. Velit quos perspiciatis ex.
        </p>
        <Link href="/" className={styles.link}>
          Leia mais
        </Link>
      </div>
    </div>
  );
};

export default Card;
