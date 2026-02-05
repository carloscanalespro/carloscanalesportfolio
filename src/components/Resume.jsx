import './stylos.css'
import avatarUser from '../assets/img/profilecv.jpeg'
import mappin from '../assets/svgs/map-pin.svg'
import mail from '../assets/svgs/mail.svg'
import github from '../assets/svgs/brand-github.svg'

export default function Resume(){
    return(
        <div className='resume' id='1'>
            <img src={avatarUser} id='avatar'></img>

            <div className='card'>
                <h2 id='name'>Carlos Canales</h2>
                <div id='myresume'>
                    <p>Soy desarrollador back-end con 1 año de experiencia. Me dedico a
                    hacer back-end para aplicaciones web basadas en tecnologías Python, JavaScript y Linux.
                    Tengo experiencia en desarrollo de interfaces de aplicación, optimización de código, y despliegue
                    de aplicaciones. Siempre estoy buscando mejorar mis habilidades y mantenerme al día con las últimas
                    tendencias en la industria.</p>
                </div>
                <div id='contactme'>
                    <div>
                        <img src={mappin}></img>
                        <p>Tijuana, B.C., México</p>
                    </div>
                    <div>
                        <img src={mail}></img>
                        <p>carloscanalespro@gmail.com</p>
                    </div>
                    <div>
                        <img src={github} alt="" />
                        <a href="https://github.com/carloscanalespro">carloscanalespro</a>
                    </div>
                    
                </div>
            </div>
            
            

        </div>
    );
}