import { Button, Card, Container } from 'react-bootstrap'

function CardRB() {
  return (
    <Container >
      <Card style={{ width: '300px' }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYHaD2MIX6VtuBBKiV9YnaJgHMAKP0hr7QA&s"
          alt="Imagen ejemplo"
        />
        <Card.Body>
          <Card.Title>Ejemplo</Card.Title>
          <Card.Text>Ejemplo de texto dentro del card.</Card.Text>
          <Button variant="dark">Aceptar</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CardRB
