import { Container } from './styles'

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className='title'>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$ 1000,00</td>
            <td>Casa</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento Website</td>
            <td className='deposit'>R$ 12.000,00</td>
            <td>Desemvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
