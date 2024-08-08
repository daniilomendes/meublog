import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* Primeira parte */}
      <h2 className={styles.subtitle}>{"O que há de novo"}</h2>
      <h1 className={styles.title}>Mais Popular</h1>
      <MenuPosts withImage={false} />

      {/* Segunda parte */}
      <h2 className={styles.subtitle}>Descubra por tópico</h2>
      <h1 className={styles.title}>Categorias</h1>
      <MenuCategories />

      {/* Terceira parte */}
      <h2 className={styles.subtitle}>Selecionado pelo editor</h2>
      <h1 className={styles.title}>Favoritos do editor</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
