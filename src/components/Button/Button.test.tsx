/* 
Ambiente de testes:

- Jest
- React Testing Library

Comentários para descrever cada execução de cada teste.

*/

import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

/* describe agrupa todos os testes */
describe('<Button></Button>', () => {
  /* Teste para verificar se o botão é clicado */
  test('verifica se o botão é clicado', () => {
    /* Cria um mock da função de clique */
    const handleClick = jest.fn();

    /* Renderiza o botão com a função de clique */
    const { getByText } = render(
      <Button onClick={handleClick}>Clique aqui</Button>,
    );

    /* Obtém o elemento do botão */
    const buttonElement = getByText('Clique aqui');

    /* Simula um evento de clique no botão */
    fireEvent.click(buttonElement);

    /* Verifica se a função de clique foi chamada uma vez */
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('verifica se o botão renderiza Clique aqui', () => {
    const { getByText } = render(<Button>Clique aqui</Button>);

    const buttonElement = getByText('Clique aqui');

    fireEvent.click(buttonElement);

    expect(getByText('Clique aqui')).toBeInTheDocument();
  });
});
