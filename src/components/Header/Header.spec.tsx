import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('Test Header component', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByText('<Johnatan />')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Experiências')).toBeInTheDocument()
    expect(screen.getByText('Projetos')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })
})
