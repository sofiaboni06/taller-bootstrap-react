import React from 'react'

function Inicio() {
  return (
    <div className='container'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        flexDirection: "column"
      }}
    >
      <h1 className='text-primary'>
        REACT BOOTSTRAP
      </h1>
      <button className='btn btn-success'>
        ACEPTAR
      </button>
    </div>
  )
}

export default Inicio
