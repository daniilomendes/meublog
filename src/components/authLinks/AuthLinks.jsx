"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Entrar
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Criar
          </Link>
          <span className={styles.link}>Sair</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Início</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Sobre</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Entrar</Link>
          ) : (
            <>
              <Link href="/write">Criar </Link>
              <span className={styles.link}>Sair</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
