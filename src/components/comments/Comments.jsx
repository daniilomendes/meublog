"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

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
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          data?.map((item) => (
            <div className={styles.comment} key={item._id}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image
                    src={item.user.image}
                    alt={item.user.name}
                    width="50"
                    height="50"
                    className={styles.image}
                  />
                )}

                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>
                    {item.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>

              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Comments;
