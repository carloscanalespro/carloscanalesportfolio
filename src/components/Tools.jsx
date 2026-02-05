import './stylos.css'

import vscode from '../assets/svgs/vscode.svg'
import postman from '../assets/svgs/postman.svg'
import git from '../assets/svgs/git.svg'
import n8n from '../assets/svgs/n8n.svg'
import teams from '../assets/svgs/microsoft-teams.svg'
import copilot from '../assets/svgs/copilot.svg'

export default function Tools(){
    return(
            <div className='tools radius' id='2'>
                <h3>Tools</h3>

                <div className='hardgridtools'>
                    <div>
                        <img src={vscode} alt="" className='icons'/>
                        <p>Vscode</p>
                    </div>
                    <div>
                        <img src={postman} alt="" className='icons' />
                        <p>Postman</p>
                    </div>
                    <div>
                        <img src={git} alt="" className='icons' id='linux'/>
                        <p>Git</p>
                    </div>
                    <div>
                        <img src={n8n} alt=""  id='docker'/>
                        <p>N8n</p>
                    </div>
                    <div>
                        <img src={teams} alt="" className='icons'/>
                        <p>Teams</p>
                    </div>
                    <div>
                        <img src={copilot} alt="" className='icons'/>
                        <p>Microsot 365</p>
                    </div>
                    
                </div>
                
            </div>
    );
}1