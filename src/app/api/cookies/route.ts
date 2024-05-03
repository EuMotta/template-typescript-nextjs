import { cookies } from 'next/headers';
export async function GET() {
  try {
    cookies().set('Cookie1', 'Motta');
    cookies().set('Cookie2', 'Motta', { secure: true });
    cookies().set({
      name: 'Cookie3',
      value: 'Motta',
      httpOnly: true,
      path: '/',
    });
    return new Response('cookies');
  } catch {
    return new Response('Erro');
  }
}
