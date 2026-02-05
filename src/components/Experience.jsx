import './stylos.css'

import gglobal from '../assets/img/gglobal.webp'
import coronas from '../assets/img/coronas.jpg'
export default function Experience(){
    return(
        <div className='experience' id='4'>
            <h3>Experience</h3>
            <div className='jobs'>
                <img src={gglobal} alt="" />
                <div>
                    <b>Desarrollo de asistente virtual de documentación de programa WMS - G-Global Logistics</b>
                    <br/>
                    <i>Tijuana, B.C., México </i>
                    <br/>
                    Marzo - Julio 2025 
                    <br/>
                    <ul>
                        <li>Analicé y probé software WMS propio de la empresa y cree debidos manuales de usuario.</li>
                        <li>Desarrolle un flujo RAG el cual procesa y almacena  información de los manuales de usuario en una base de datos para entrenar al asistente virtual.</li>
                        <li>Diseñe y codifique una interfaz simple de usuario para interactuar con el asistente virtual.</li>
                        <li>Utilicé Docker para convertir en contendores el software que compone al asistente virtual y lo desplegué en un servidor Linux para su uso.</li>
                    </ul>
                </div>
                
            </div>
            <div className='jobs'>
                <img src={coronas} alt="" />
                <div>
                    <b>Desarrollo de aplicación para gestión de torneos de artes marciales - Corona’s Tang Soo Do</b>
                    <br/>
                    <i>Tijuana, B.C., México </i>
                    <br/>
                    Julio - Septiembre 2025  
                    <br/>
                    <ul>
                        <li>Lleve a cabo APIs REST para gestionar el envío y recibimiento de información dentro de la aplicación.</li>
                        <li>Desarrolle interfaces de usuario sencillas y simples de usar para el usuario.</li>
                        <li>Mantuve y produje scripts para instalación y ejecución de la aplicación.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}