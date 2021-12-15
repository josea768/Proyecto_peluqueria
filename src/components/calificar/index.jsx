import React from "react";
import {FloatingLabel, Form } from 'react-bootstrap';
const Calificar = () => {
    return ( 
        <div className="formulario">
          <h1 className="titulo">Califica tu experiencia con nosotros</h1>
          <h5 className="subtitulo"> Donde 1 es insatisfecho y 5 es muy satisfecho</h5>

          <h4>1. Califica tu experiencia del 1 al 5</h4>
          <Form className="botones">
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="1"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="2"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
       <Form.Check
        inline
        label="3"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />
       <Form.Check
        inline
        label="4"
        name="group1"
        type={type}
        id={`inline-${type}-4`}
      />
      <Form.Check
        inline
        label="5"
        name="group1"
        type={type}
        id={`inline-${type}-5`}
      />
    </div>
  ))}
</Form>

<h4>2. ¿Que tan satisfecho estas con el servicio brindado?</h4>
          <Form className="botones">
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="1"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="2"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
       <Form.Check
        inline
        label="3"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />
       <Form.Check
        inline
        label="4"
        name="group1"
        type={type}
        id={`inline-${type}-4`}
      />
      <Form.Check
        inline
        label="5"
        name="group1"
        type={type}
        id={`inline-${type}-5`}
      />
    </div>
  ))}
</Form>

<h4>3. ¿Qué tan deacuerdo estas con los precios?</h4>
          <Form className="botones">
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="1"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="2"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
       <Form.Check
        inline
        label="3"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />
       <Form.Check
        inline
        label="4"
        name="group1"
        type={type}
        id={`inline-${type}-4`}
      />
      <Form.Check
        inline
        label="5"
        name="group1"
        type={type}
        id={`inline-${type}-5`}
      />
    </div>
  ))}
</Form>

<h4>4. ¿Nos recomendarias con otras personas?</h4>
          <Form className="botones">
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Si"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="No"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
    </div>
  ))}
</Form>

    <h4>5. Dejanos saber que piensas sobre nosotros</h4>
            <FloatingLabel className="cuadrotexto" controlId="floatingTextarea2" label="Dejanos tu opinión">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '200px', width:'1000px'}}
    />
  </FloatingLabel>
        </div>
     );
}
 
export default Calificar;