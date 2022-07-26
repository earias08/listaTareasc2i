import React, {useState} from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const Formulario = () => {
//aqui va la logica
//crear un state
const [arregloTareas, setArregloTareas] = useState([]);
const [tarea, setTarea] = useState('');

//aqui va el maquetado y un poquito de logica
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      {/* aqui invoco a la lista de tareas */}
      <ListaTareas></ListaTareas>
    </div>
  );
};

export default Formulario;
