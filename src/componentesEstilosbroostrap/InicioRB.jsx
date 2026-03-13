
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import React from 'react'

function InicioRB() {
  return (
    <div>
      <Container className="py-4">
        {/* Aplica margin-bottom al título para separar el botón */}
        <h1 className='text-danger mb-3'>React Bootstrap</h1>
        <Button variant='danger'>ACEPTAR</Button>
      </Container>
    </div>
  )
}

export default InicioRB
