import React  from 'react';
import './Sidebar.css';
import Membertile from './Membertile';

function Sidebar() {
    return (
        <div className="leftContainer">
                    <Membertile
                    name='Pranavdhar'
                    image='https://avatars.githubusercontent.com/u/73348574?s=460&u=b53b92d1b2e3f3a270fc301ee11d3a5e963910d2&v=4'
                    stack='Web Development'
                    />
        </div>
    )
}

export default Sidebar
