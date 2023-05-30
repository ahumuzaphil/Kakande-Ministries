import React from 'react';

export default function Vidp(props){
    return(
        
        <div className='content_vidp'>
   <iframe width="350" height="205" src={props.video.vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   <div className='vidp_info'>
   <p>{props.video.desc}:</p>
   <p>{props.video.info}</p>
   </div>
   </div>
   
        
    )
}