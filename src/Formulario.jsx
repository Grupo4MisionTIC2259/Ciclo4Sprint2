import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleInputChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + " " + datos.apellido);
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="col-sm-6" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Ingrese nombre"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Ingrese apellido"
            type="text"
            name="apellido"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            ENVIAR
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
