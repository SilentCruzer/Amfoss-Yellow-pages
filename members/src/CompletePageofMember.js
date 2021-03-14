import React from 'react';
import './CompletePageofMember.css';
import Sidebar from './Sidebar';
import Tiledetail from './Tiledetail';


function CompletePageofMember() {
    return (
        <div className='detailedview'>
            <div className="page">
                <Sidebar className='sidebar'/>
                <div>
                    <Tiledetail
                    name='Pranavdhar'
                    expertise='
                    Developed full-stack web applications which processed, analyzed, and rendered data visually.
Liaised with back end developers, front end developers, quality assurance testers, and CTO as needed.
Managed time-sensitive updates, including content changes and database upgrades.
Planned, wrote, and debugged web applications and software with complete accuracy.
'
                    linkofstat="https://github-readme-stats.vercel.app/api?username=iampranavdhar&theme=radical&show_icons=true"
                    linkofusedlang="https://github-readme-stats.vercel.app/api/top-langs/?username=iampranavdhar&theme=radical&layout=compact"/>
                </div>
            </div>
        </div>
    )
}

export default CompletePageofMember