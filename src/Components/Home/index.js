//Dependencies
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <div class="content">
        <h2>Bienvenido al sitio web de DAC</h2>
      </div>
      <div class="tagline">
          <strong>Descripcion:</strong>
          <p>Brindaremos un servicio tecnológico el cual apoya de manera proactiva tanto a los docentes como a <br></br>
             alumnos en el sistema de registro de asistencias a clases.</p>
          <p>El sistema registrará y almacenera información relevante de la institución: alumnos, docentes, carreras,<br></br>
             materias de las mismas y aulas. Con toda la información recolectada será posible mantener actualizado<br></br>
             el estado de la situación que incluirá calificaciones y asistencias de los alumnos de forma sistemática a<br></br>
             través de un lector biométrico de huellas dactilares. </p>
      </div>
      </div>
    );
  }
}

export default Home;
