import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ paqueteTareas }) => {
  return (
    <ListGroup>
      {paqueteTareas.map((tarea, i) => (
        <ItemTarea key={i} nombreTarea={tarea} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
