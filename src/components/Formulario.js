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

// const actualizarTarea = (e) =>{
//   //obtener el value de mi input
//   // console.log(e.target.value);
//   //actualizar el state
//   setTarea(e.target.value.trim());
// }

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log('prueba desde submit');
  //actualizar la lista de tareas
  setArregloTareas([...arregloTareas, tarea]);
  setTarea('');
}

//aqui va el maquetado y un poquito de logica
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control 
          type="text" 
          placeholder="Ingrese una tarea" 
          onChange={(e)=> setTarea(e.target.value.trim())}
          value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      {/* aqui invoco a la lista de tareas */}
      <ListaTareas arregloTareas={arregloTareas}></ListaTareas>
    </div>
  );
};

export default Formulario;
