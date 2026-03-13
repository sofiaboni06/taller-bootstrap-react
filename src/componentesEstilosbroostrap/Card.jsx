import React from 'react'

function Card() {
  return (
    <div className='container'>
      <div className='card' style={{ width: '300px' }}>
        <img
          src='https://www.esimagenes.com/pimagen/imagenes-stitch.png'
          className='card-img-top'
          alt='Imagen de ejemplo'
        />
        <div className='card-body'>
          {/* Aquí puedes agregar contenido dentro del card-body */}
          <h5 className='card-title'>Ejemplo</h5>
          <p className='card-text'>Ejemplo de texto dentro del card.</p>
          <button className='btn btn-primary'>Aceptar</button>
        </div>
      </div>
    </div>
  )
}

export default Card
