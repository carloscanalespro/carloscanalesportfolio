import './stylos.css'
import code from '../assets/svgs/code.svg'

export default function Navbar(){
    return(
        <div className='logomove'>
            <img src={code} alt="" />
            <div className='navbar'>
                <a href="#1">Resume</a>
                <a href="#2">Hard Skills</a>
                <a href="#3">Soft Skills</a>
                <a href="#4">Experience</a>
                <a href="#5">Projects</a>
            </div>
        </div>
    );
}