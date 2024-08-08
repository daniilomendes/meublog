import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="blog" width={50} height={50} />
          <h1 className={styles.logoText}>Danilo Mendes</h1>
        </div>
        <p className={styles.desc}>
          Este blog nasceu da minha paixão por desenvolvimento, e aqui
          compartilha-se experiências, aprendizados e ideias sobre variados
          assuntos. Adoraria ouvir suas opiniões, sugestões e histórias!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Página Ínicial</Link>
          <Link href="/">Postagens</Link>
          <Link href="/">Sobre</Link>
          <Link href="/">Contatos</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Categorias</span>
          <Link href="/">Código</Link>
          <Link href="/">Viagens</Link>
          <Link href="/">Comida</Link>
          <Link href="/">Cultura</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Redes Sociais</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twiter</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
