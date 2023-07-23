import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setlistaTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setlistaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (tareaBorrar, index) => {
    let listaTareasFiltrada = listaTareas.filter((itemListaTareas, i) => {
      itemListaTareas !== tareaBorrar && index === i;
      console.log(i);
    });
    console.log(index);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex my-3" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese aqui su tarea"
            autoFocus
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          ></Form.Control>
          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form.Group>
        <ListaTareas
          paqueteTareas={listaTareas}
          borrarTarea={borrarTarea}
        ></ListaTareas>
      </Form>
    </>
  );
};

export default FormularioTareas;
