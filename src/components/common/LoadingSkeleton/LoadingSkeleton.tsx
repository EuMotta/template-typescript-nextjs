import styles from './LoadingSkeleton.module.css';
export default function LoadingSkeleton() {
  return (
    <div className={styles.skeleton_section}>
      <div className={styles.skeleton_content}>
        <div>
          <div className={styles.skeleton_loading}>
            <h1 className="text_gradient text-center">Carregando</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
