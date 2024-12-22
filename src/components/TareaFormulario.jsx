import React, { useState } from 'react';

const FormularioRegistro = () => {
  // Estados para manejar los valores de cada campo
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState(''); // Estado para mostrar el mensaje final

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    setMensaje(
      `¡Gracias, ${nombre}!\nTus datos han sido registrados.\nMateria Cursada: ${materia}\nFecha de cursado: ${fecha}`
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
        <h2>Registro de Datos Personales y Materias Estudiadas</h2>
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


            {/* Campo de materia */}
            <label>
            Materias Cursadas:
            <input
                type="text"
                value={materia}
                onChange={(e) => setMateria(e.target.value)}
                placeholder="Ingresa la materia"
            />
            </label>

            {/* Campo de fecha */}
            <label>
            Fecha de cursado:
            <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
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
                color: 'green',
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

export default FormularioRegistro;