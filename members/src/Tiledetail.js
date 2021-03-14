import React from 'react';
import './Tiledetail.css';

function Tiledetail({ name, image,expertise,linkofstat}) {
    return (
        <div className='tiledetail'>
            <div className="memberInfoContainer">
                <div className="rightContainer">
                    <div className='basic'>
                        <img className='imageInfo' src={image}/>
                        <p>Name:{name}</p>
                    </div>
                    <div className='details'>
                        <p>{expertise}</p>
                    </div>
                    <div className='langUsed'>
                        <img height="180em" src={linkofstat} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiledetail