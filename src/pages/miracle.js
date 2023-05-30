import React from 'react';
import { Link } from 'react-router-dom'
import Vidp from '../videos/vidp'
import mir from '../Data/miracle';

export default function Miracle(){
    const pra = mir.map(item =>{
        return(
          <div >
          <Vidp
          key={item.id} 
          video={item}
          
          />
          </div>
        )
      })

    return(
        <div>
        <div className="container_pray">
        <span className="cont_proph">
    <Link to='/' className="proph">Home</Link>
    <Link to='/' className="proph">_Miracle</Link>
    </span>
    <h1>MIRACLE</h1>
   </div> 
   <div className="content-proph">
   <div className="cont-info">
   <h1>MIRACLE</h1>
   <p>At the Kakande Ministries, the man of God Prophet Samuel Kakande takes us back to the old times of the bible speaking prophecy into the lives of those who come to him seeking for God’s intervention.</p>
   <p>Jesus Christ has given Prophet Samuel Kakande the Grace to see and reveal to the people their past, present and future. Remember a prophecy comes to save, heal and deliver.</p>
   <p>Before time in Israel, when a man went to inquire of God, thus he spoke, come and let us go to the seer, for he that is now called a Prophet was beforetime called a Seer 1 Samuel 9:9.</p>
   <p>Surely the Lord God will do nothing, but he reveals his secret unto His servants the Prophets (Amos 3:7)</p>
   <p>For the prophecy came not in old time by the will of man, but Holy Men of God spoke as they were moved by the Holy Spirit (2 Peter 1:21)</p>
   <p>Watch our prophecy videos and witness how the Lord God Almighty manifests Himself through the Man of God Prophet Samuel Kakande by the power of the Holy Spirit</p>
   <p>Remember , The Lord reveals to save!</p>
   </div>
   <img src="/PROPHECIES.png" className="img-link" width="550rem" alt="Prophet" />
   </div>
   <h2 className="hd">VIDEOS</h2>
   
   <section className="vidp">{pra}</section>
   
   </div>
    )
}