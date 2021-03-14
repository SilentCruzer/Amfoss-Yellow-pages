import React from 'react';
import './Tiledetail.css';

function Tiledetail({ name, image,expertise,linkofusedlang,linkofstat}) {
    return (
        <div className='tiledetail'>
            <div className="memberInfoContainer">
                <div className="rightContainer">
                    <div className='basic'>
                        <img className='imageInfo' src={image}/>
                        <p className='text'><span className='label'>Name: </span>{name}</p>
                    </div>
                    <div className='details'>
                        <p className='text'><span className='label'>Expertise:</span>
                            {expertise}</p>
                    </div>
                    <div className='langUsed'>
                        <img height="180em" src={linkofusedlang} />  
                        <img height="180em" src={linkofstat} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiledetail