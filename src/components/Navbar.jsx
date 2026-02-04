import './stylos.css'
import code from '../assets/svgs/code.svg'

export default function Navbar(){
    return(
        <div className='navbar'>
            <img src={code} alt="" />
            <a href="#">Resume</a>
            <a href="#">Hard Skills</a>
            <a href="#">Soft Skills</a>
            <a href="#">Projects</a>
        </div>
    );
}