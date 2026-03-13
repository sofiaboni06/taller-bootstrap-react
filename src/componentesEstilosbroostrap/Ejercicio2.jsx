import React from "react";
import { Container, Button } from "react-bootstrap";

function Ejercicio2() {
  return (
    <div className="mt-5">
      {/* 
      El desarrollador aplica mt-5 para agregar un margen superior.
      Esto permite separar este ejercicio de otros componentes que estén arriba.
      */}

      <Container className="p-4 border">

        {/*
        El desarrollador aplica p-4 al Container.
        Esto agrega padding interno para que el contenido no esté pegado a los bordes.
        */}

        <h2 className="text-primary mb-4">
          Ejercicio 2 - Espaciado en React Bootstrap
        </h2>

        {/*
        El desarrollador aplica mb-4 al título.
        Esto crea un margen inferior para separar el título de los botones.
        */}

        <div className="d-flex gap-3">

          {/*
          El desarrollador utiliza d-flex para activar Flexbox.
          Luego aplica gap-3 para generar un espacio uniforme entre los botones.
          */}

          <Button variant="primary" className="px-4 py-2">
            GUARDAR
          </Button>

          {/*
          El desarrollador aplica px-4 y py-2 al botón.
          px-4 agrega padding horizontal.
          py-2 agrega padding vertical.
          Esto mejora el tamaño y la legibilidad del botón.
          */}

          <Button variant="success" className="px-4 py-2">
            ENVIAR
          </Button>

          <Button variant="warning" className="px-4 py-2">
            EDITAR
          </Button>

        </div>

        <p className="mt-4 ms-2">
          Este texto tiene diferentes tipos de espaciado aplicados.
        </p>

        {/*
        El desarrollador aplica:
        mt-4 → margen superior para separar el texto de los botones.
        ms-2 → margen a la izquierda para mover ligeramente el texto.
        */}

      </Container>
    </div>
  );
}

export default Ejercicio2;