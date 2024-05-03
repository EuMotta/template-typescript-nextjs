'use client';

import Image from 'next/image';

import Button from '@/components/Button';
import { ModularCard } from '@/components/Card/Card';
import Container from '@/components/Container';
export default function Home() {
  return (
    <main>
      <Container className=" bg-light-primary flex min-h-[90vh] flex-col justify-between p-10">
        <div className="hidden md:flex" />
        <div className="flex flex-col h-full gap-24 items-center">
          <Image
            className="relative drop-shadow-md w-96"
            src="/logo.svg"
            alt="Motta Logo"
            width="0"
            height="0"
            sizes="100vw"
            priority
          />
          <div className="font-mono lg:w-1/2 ">
            <ModularCard>
              <p className="text-center">
                Este é o template padrão que emprego em meus projetos.
              </p>
            </ModularCard>
          </div>
        </div>
        <div className="flex justify-evenly">
          <Button href="https://github.com/EuMotta" target="_blank" styled>
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/jos%C3%A9-antonio-bueno-motta-61006a26b/"
            target="_blank"
            styled
          >
            LinkedIn
          </Button>
        </div>
      </Container>
    </main>
  );
}
