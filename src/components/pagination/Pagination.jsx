import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Anterior</button>
      <button className={styles.button}>Próximo</button>
    </div>
  );
};

export default Pagination;
