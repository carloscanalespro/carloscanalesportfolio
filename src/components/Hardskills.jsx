import './stylos.css'

import python from '../assets/svgs/python.svg'
import javascript from '../assets/svgs/javascript.svg'
import linux from '../assets/svgs/linux.svg'
import docker from '../assets/svgs/docker.svg'
import fastapi from '../assets/svgs/fastapi.svg'
import django from '../assets/svgs/django.svg'

export default function Hardskills(){
    return(
            <div className='hardskills radius'>
                <h3>Hard skills</h3>

                <div className='hardgrid'>
                    <div>
                        <img src={python} alt="" className='icons'/>
                        <p>Python</p>
                    </div>
                    <div>
                        <img src={javascript} alt="" className='icons' />
                        <p>Javascript</p>
                    </div>
                    <div>
                        <img src={linux} alt="" className='icons' id='linux'/>
                        <p>Linux</p>
                    </div>
                    <div>
                        <img src={docker} alt=""  id='docker'/>
                        <p>Docker</p>
                    </div>
                    <div>
                        <img src={fastapi} alt="" className='icons'/>
                        <p>Fastapi</p>
                    </div>
                    <div>
                        <img src={django} alt="" className='icons'/>
                        <p>Django</p>
                    </div>
                </div>
                
            </div>
    );
}1