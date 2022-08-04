import React, {useState, useEffect} from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";


const Formulario = () => {
//aqui va la logica
let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
//crear un state
const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);
const [tarea, setTarea] = useState('');

//ciclo de vida del componentes
useEffect(()=>{
  console.log('prueba de ciclo de vida');
  localStorage.setItem('listaTareas', JSON.stringify(arregloTareas))
},[arregloTareas]);

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

const borrarTarea = (nombre) =>{
  let arregloModificado = arregloTareas.filter((valor)=>{return valor !== nombre});
  //actualizar el state
  setArregloTareas(arregloModificado);
}

//aqui va el maquetado y un poquito de logica
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control 
          type="text" 
          placeholder="Ingrese una tarea" 
          onChange={(e)=> setTarea(e.target.value.trimStart())}
          value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      {/* aqui invoco a la lista de tareas */}
      <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTareas>
    </div>
  );
};

export default Formulario;
