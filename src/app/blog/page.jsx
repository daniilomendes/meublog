import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  let traducao;
  if (cat === "fashion") traducao = "Modas";
  if (cat === "culture") traducao = "Culturas";
  if (cat === "coding") traducao = "Códigos";
  if (cat === "food") traducao = "Comidas";
  if (cat === "style") traducao = "Estilos";
  if (cat === "travel") traducao = "Viagens";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{traducao}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};
export default BlogPage;
