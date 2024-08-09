import styles from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Entrar com o Google</div>
        {/* <div className={styles.socialButton}>Entrar com o GitHub</div>
        <div className={styles.socialButton}>Entrar com o Facebook</div> */}
      </div>
    </div>
  );
};

export default LoginPage;
