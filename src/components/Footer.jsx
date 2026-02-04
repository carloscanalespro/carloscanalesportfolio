import './stylos.css'

export default function Footer(){
    return(
        <>
            <div className='footer'>
                <a href="#">Resume</a>
                <a href="#">Hard Skills</a>
                <a href="#">Soft Skills</a>
                <a href="#">Projects</a>
                ©{new Date().getFullYear()} Carlos Canales
            </div>
            
            
        </>
        
    );
}