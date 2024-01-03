import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Verificar a adição de dois comentários a um Post', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('texto-comentario'), {
            target: {
                value: 'Comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comment'));

        fireEvent.change(screen.getByTestId('texto-comentario'), {
            target: {
                value: 'Segundo comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comment'));

        expect(screen.getAllByTestId('commentarios')).toHaveLength(2);
    });
});