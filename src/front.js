import React from 'react';
import './front.js';

const Front = ({course,status,website}) => {
    return (
        <div className='bg-black dib br3 pa3 ma2 grow bw2 shadow-5 cur white'>
            
            <img src={website} alt='course' height='200px' width='200px'/>
            <div>
           <h3 className='underline'>{course}</h3>
            <p>{status}</p>
            </div>
        </div>
            
        
    );
}

export default Front;