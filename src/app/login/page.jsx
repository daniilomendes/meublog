"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Carregando...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Entrar com o Google
        </div>
        {/* <div className={styles.socialButton}>Entrar com o GitHub</div>
        <div className={styles.socialButton}>Entrar com o Facebook</div> */}
      </div>
    </div>
  );
};

export default LoginPage;
