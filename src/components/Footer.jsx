import './stylos.css'

export default function Footer(){
    return(
        <>
            <div className='footer'>
                <a href="#">Resume</a>
                <a href="#">Hard Skills</a>
                <a href="#">Soft Skills</a>
                <a href="#">Projects</a>
            </div>
            <div id='footer-cpr'>
                Carlos Canales Portfolio ©{new Date().getFullYear()} Created by Carlos Canales
            </div>
        </>
        
    );
}