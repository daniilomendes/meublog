import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categorias Populares</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Estilo
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Moda
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Comida
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Viagens
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Cultura
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Programação
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
