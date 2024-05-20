import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    {
      id: 1,
      name: 'Ana Silva',
      email: 'ana.silva@example.com',
    },
    {
      id: 2,
      name: 'Bruno Souza',
      email: 'bruno.souza@example.com',
    },
    {
      id: 3,
      name: 'Carla Pereira',
      email: 'carla.pereira@example.com',
    },
    {
      id: 4,
      name: 'Daniel Oliveira',
      email: 'daniel.oliveira@example.com',
    },
    {
      id: 5,
      name: 'Eva Costa',
      email: 'eva.costa@example.com',
    },
  ];
  return NextResponse.json(users, { status: 200 });
}
