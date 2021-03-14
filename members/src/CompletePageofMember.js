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
                    linkofstat="https://github-readme-stats.vercel.app/api/top-langs/?username=iampranavdhar&theme=radical&layout=compact"/>
                </div>
            </div>
        </div>
    )
}

export default CompletePageofMember