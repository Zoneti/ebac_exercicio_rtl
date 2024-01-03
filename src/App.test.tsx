import { render, screen } from "@testing-library/react"
import App from "./App"

describe('Testes para Componente principal App', () => {
    it('Verifica se a renderização do componente App acontece corretamente', () => {
        render(<App />)
        expect(screen.getByTestId('btn-comment')).toBeInTheDocument()
    })
})