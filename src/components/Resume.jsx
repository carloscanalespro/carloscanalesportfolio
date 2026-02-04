import './stylos.css'
import avatarUser from '../assets/img/avatar.png'

export default function Resume(){
    return(
        <div className='resume onhover radius'>
            <img src={avatarUser} id='avatar'></img>

            <div className='card'>
                <h2 id='name'>Carlos Canales</h2>
                <div id='myresume'>
                    <p>Soy desarrollador back-end recién egresado con 1 año de experiencia. Me dedico a <br/>
                    hacer back-end para aplicaciones web basadas en tecnologías Python, JavaScript y Linux. <br/>
                    Tengo experiencia en desarrollo de interfaces de aplicación, optimización de código, y despliegue<br/>
                    de aplicaciones. Siempre estoy buscando mejorar mis habilidades y mantenerme al día con las últimas<br/>
                    tendencias en la industria.</p>
                </div>
                <div id='contactme'>
                    <p>Ubicación: Tijuana, B.C., México</p>
                    <p>Celular: 6644743187</p>
                    <p>Correo: carloscanalespro@gmail.com</p>
                    <p>Portafolio: <a href="#">carloscanales.dev</a> </p>
                </div>
            </div>
            
            

        </div>
    );
}