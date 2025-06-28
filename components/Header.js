import styles from '../styles/service.module.css';

export default function HeaderService({ title, description }) {
  return (
    <header>
      <img src="/imgs/banner.jpg" alt="Bannière de pages bleu sur fond noir" width="100%" />
      <div className={styles.Service}>
        <h1 className={styles.TitleService}>{title}</h1>
        <p className={styles.DescriptionService}>{description}</p>
      </div>
    </header>
  );
}