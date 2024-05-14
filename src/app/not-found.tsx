'use client';

import EmptyState from '@/components/EmptyState/EmptyState';

export default function Error() {
  return (
    <EmptyState
      title="Página não encontrada"
      subtitle="Você acessou uma pagina que não existe"
    />
  );
}
