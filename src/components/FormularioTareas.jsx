import React from "react";
import { Button, Form } from "react-bootstrap";

const FormularioTareas = () => {
  return (
    <div>
      <Form>
        <Form.Group className="d-flex my-3" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese aqui su tarea"
            autoFocus
          ></Form.Control>
          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormularioTareas;
