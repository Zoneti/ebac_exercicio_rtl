import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Testes para o componente <Post />', () => {
    it('Verifica se a renderização do componente Post acontece corretamente', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });
})