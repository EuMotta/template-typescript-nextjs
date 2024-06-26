'use client';

import { useRouter } from 'next/navigation';

import Button from '../Button';
import Heading from '../Header/Heading';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  label?: string;
  reset?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Aconteceu um problema!',
  subtitle = 'Não sei ainda o que é, mas vou descobrir!',
  label = 'Tente novamente',
  showReset,
  reset,
}: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div className={styles.emptyState_content}>
      <Heading center title={title} subtitle={subtitle} />
      <div className={styles.emptyState_buttons}>
        {showReset && <Button onClick={() => reset && reset()}>{label}</Button>}
        <Button onClick={() => router.push('/')}>Voltar</Button>
      </div>
    </div>
  );
};

export default EmptyState;
