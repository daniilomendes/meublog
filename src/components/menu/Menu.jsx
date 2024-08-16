import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import MenuMiniPosts from "../menuMiniPosts/MenuMiniPosts";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Menu = async ({ page, cat }) => {
  const { posts } = await getData(page, cat);

  return (
    <div className={styles.container}>
      {/* Primeira parte */}
      <h2 className={styles.subtitle}>{"O que há de novo"}</h2>
      <h1 className={styles.title}>Mais Popular</h1>
      {posts?.map((item) => (
        <MenuMiniPosts key={item._id} item={item} />
      ))}

      {/* Segunda parte */}
      <h2 className={styles.subtitle}>Descubra por tópico</h2>
      <h1 className={styles.title}>Categorias</h1>
      <MenuCategories />

      {/* Terceira parte */}
      <h2 className={styles.subtitle}>Selecionado pelo editor</h2>
      <h1 className={styles.title}>Favoritos do editor</h1>
      {posts?.map((item) => (
        <MenuPosts key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
