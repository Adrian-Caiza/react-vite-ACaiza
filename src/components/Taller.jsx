import React, { useState } from 'react';

const Taller = () => {
  // Estados para manejar los valores de cada campo
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  const [credito, setCredito] = useState(''); // Nuevo estado para número de crédito
  const [docente, setDocente] = useState(''); // Nuevo estado para docente
  const [mensaje, setMensaje] = useState(''); // Estado para mostrar el mensaje final

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    setMensaje(
      `¡Gracias, ${nombre}!\nTus datos han sido registrados.\nMateria: ${materia}\nFecha: ${fecha}`
    );
  };

  return (
  <div
      style={{
        justifyContent: 'center', 
        alignItems: 'center',  
        textAlign: 'center', 
        minHeight: '50vh',
        flexDirection: 'column', 
        margin: '10px 0',
      }}
>
    <div>
      <h2>Registro de Estudiante</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Campo de nombre */}
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </label>

        {/* Campo de correo */}
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
          />
        </label>

        {/* Campo de carrera */}
        <label>
          Carrera:
          <input
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            placeholder="Ingresa tu carrera"
          />
        </label>

        {/* Campo de materia */}
        <label>
          Materia:
          <input
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Ingresa la materia"
          />
        </label>

        {/* Campo de fecha */}
        <label>
          Fecha de inscripción:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>

        {/* Campo de número de crédito */}
        <label>
            Número de crédito:
            <input
              type="text"
              value={credito}
              onChange={(e) => setCredito(e.target.value)}
              placeholder="Ingresa el número de crédito"
            />
          </label>

          {/* Campo de docente */}
          <label>
            Docente:
            <input
              type="text"
              value={docente}
              onChange={(e) => setDocente(e.target.value)}
              placeholder="Ingresa el nombre del docente"
            />
          </label>

        {/* Botón de envío */}
        <button type="submit">Registrar</button>
      </form>

      {/* Mensaje de confirmación */}
      {mensaje && (
        <div
          style={{
            marginTop: '20px',
            color: 'black',
            whiteSpace: 'pre-line',
          }}
        >
          {mensaje}
        </div>
      )}
      </div>
  </div>
  );
};

export default Taller;