import React, {Component} from 'react';
import './MainMenu.css';

class MainMenu extends Component {
    render() {
        return (
            <div class="app">
                  <div class="wrapper">
                      <div class="header">
                        <h1><span>DAC </span>System</h1>
                      </div>
                      <div class="nav">
                         <ul>
                           <li><span1>HOME</span1></li>
                           <li><span2>TEACHERS</span2></li>
                           <li><span3>STUDENTS</span3></li>
                           <li><span4>SUBJECTS</span4></li>
                           <li><span5>CLASSROOMS</span5></li>
                         </ul>
                      </div>
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
                    <div class="copyright">
                        <p>Digital Attendance Control &nbsp;|&nbsp; Company</p>
                    </div>
                  </div>
            </div>
        );
    }
}

export default MainMenu;
