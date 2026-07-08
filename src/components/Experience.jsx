import './stylos.css'

import gglobal from '../assets/img/gglobal.webp'
import coronas from '../assets/img/coronas.jpg'
import clubtijuana from '../assets/img/clubtijuana2.jpg'
import spi from '../assets/img/spi_real.png'

export default function Experience() {
    return (
        <div className='experience' id='4'>
            <h3>Experience</h3>
            <div className='jobs'>
                <img src={clubtijuana} alt="" width={50} />
                <div>
                    <b>Desarrollo de programa de gestion academia de futbol - Xolos Club Tijuana
                    </b>
                    <br />
                    <i>Tijuana, B.C., México </i>
                    <br />
                    abril - Julio 2026
                    <br />
                    <ul>
                        <li>
                            Analicé y actualize UI/UX basados en disenos para nueva imagen del programa.
                        </li>
                        <li>Mantuve y unifique modulos nuevos y existentes dentro del programa para obtener consistencia y mejor flujo de trabajo.</li>
                    </ul>
                </div>
            </div>

            <div className='jobs'>
                <img src={gglobal} alt="" />
                <div>
                    <b>Desarrollo de asistente virtual de documentación de programa WMS - G-Global Logistics</b>
                    <br />
                    <i>Tijuana, B.C., México </i>
                    <br />
                    Marzo - Julio 2025
                    <br />
                    <ul>
                        <li>Analicé y probé software WMS propio de la empresa y cree debidos manuales de usuario.</li>
                        <li>Desarrolle un flujo RAG el cual procesa y almacena  información de los manuales de usuario en una base de datos para entrenar al asistente virtual.</li>
                        <li>Diseñe y codifique una interfaz simple de usuario para interactuar con el asistente virtual.</li>
                        <li>Utilicé Docker para convertir en contendores el software que compone al asistente virtual y lo desplegué en un servidor Linux para su uso.</li>
                    </ul>
                </div>

            </div>
            <div className='jobs'>
                <img src={spi} alt="" width={50} height={50} />
                <div>
                    <b>Desarrollo y optimización de back-end- SPI</b>
                    <br />
                    <i>Tijuana, B.C., México </i>
                    <br />
                    Enero 2024 - Enero 2025
                    <br />
                    <ul>
                        <li>
                            Desarrolle software back-end para un software en desarrollo de barbería y panadería.
                        </li>
                        <li>Analicé y optimicé código de APIs para reducir la carga y acelerar la velocidad de proyectos ya existentes.</li>
                        <li>Mantuve y produje scripts para instalación y ejecución de varios proyectos.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='jobs'>
                <img src={coronas} alt="" />
                <div>
                    <b>Desarrollo de aplicación para gestión de torneos de artes marciales - Corona’s Tang Soo Do</b>
                    <br />
                    <i>Tijuana, B.C., México </i>
                    <br />
                    Julio - Septiembre 2025
                    <br />
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