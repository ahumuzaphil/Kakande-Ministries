import React from 'react'
import { Input,Button,Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { HeartOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function Donate(props){
    return(
      <div>
      <div className='header'>
        <img src="/Prophet.png" className="pic" id='res' height="auto" width="51.5%" alt="Prophet" />
        <div className='header_info'>
        <Link to='/' className='about'>ABOUT US</Link>
        <h2 className='tkm'>THE KAKANDE MINISTRIES</h2>
        <p className='abt'>THE KAKANDE MINISTRIES</p>
        <p className='abt' >“A LIFE CHANGING MINISTRY”</p>
        <p className='abt' >DESTINED TO TAKE THE GOSPEL OF OUR LORD JESUS CHRIST</p>
        <p className='abt'>TO THE FOUR CORNERS OF THE WORLD</p>
        <h4 className='mat'>MATTHEW 24 :14</h4>
        <Link to='/' className='read'>Read More</Link>
        </div>
        </div>

        <div className='main'>
        <div className='video'>
        <h2>HAVE FAITH IN GOD</h2>
        <iframe width="590" height="350" className='stream' src="https://www.youtube.com/embed/DTQILCh5_5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className ='main_el'>
        <HeartOutlined className='heart'/>
        <h3>DONATE</h3>
        <h2>REACH OUT WITH THE LITTLE YOU HAVE,AND</h2>
        <h2 className='bot'>IF IT WILL NOT MULTIPLY!</h2>
        <Link className='donate'>DONATE ONLINE</Link>
        </div>
        </div>

        <div className='container_donate'>
        <div className='donate_hand'>
        <img src="/Hands.png" className="hand" width="150rem" height="150rem" alt="Prophet" />
        <h3>PRAYER REQUEST</h3>
        <p className='word'>Send us your prayer request we will stand steadfastly in faith with you!</p>
        <p className='word'>call us or simple fill the form</p>
        <p className='num'>CALL @ 256200414550</p>
        </div>
        <div className='content_donate'>
        <p>Feel free to ask for details, don't save any questions!</p>
        <Input className='wid' placeholder="Your name" />
        <Input className='wid' placeholder="Your email address" />
        <Input className='wid' placeholder="Your phone number" />
        <Input className='wid' placeholder="Your country" />
        <Input className='wid' placeholder="Your age" />
        <Input className='wid' placeholder="Your location or address" />
        <Input className='wid' placeholder="Your Sickness/Problem" />
        <Input className='wid' placeholder="How long had the sickness" />
        <Input className='wid' placeholder="Your location or address" />

      <div className='text_area'>

      <TextArea 
      rows={6} 
      placeholder="Do you have or use any garget for support? Such as neck collar or lamber cosset" 
      className="area"  
      maxLength={100} 
      />
      <TextArea 
      rows={6} 
      placeholder="Prayer Request" 
      className="area"  
      maxLength={100} 
      />
      </div>
      
      <Upload >
    <Button icon={<UploadOutlined />} className="upload">Upload file</Button>
  </Upload>
      <Button type="primary" className='submit_donate'>SUBMIT REQUEST</Button>
        </div>
        
        </div>

        <div className='test_container'>
    <div className='test_content'>
    <h1>TESTIMONY</h1>
    <p>Jesus Christ is the same, yesterday, today and forever Hebrews 13:8. He still saves, heals and delivers. Be blessed as you watch amazing faith building testimonies of people who were prayed for by Prophet Samuel Kakande.</p>
    <div className='frame'>
    <iframe width="350" height="250" className='tvid' src="https://www.youtube.com/embed/FMoXkz31k5A"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe width="350" height="250" className='tvid' src="https://www.youtube.com/embed/nFqRUV8gixk"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <iframe width="350" height="250" className='tvid' src="https://www.youtube.com/embed/dOTztva1LH0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <Button type="primary" className='submit_donate'>SEND TESTIMONY</Button>
    </div>
    </div>
    
    <div className='news_container'>
      <h1>NEWS & EVENTS</h1>
      <div className='news_content'>
      <img src="/imgE.png" className="new_img" width="43%" height=""alt="Prophet" />
      <div>
        <div className='event'>
        <img src="/imgE2.png" className="event_img" width="100rem" alt="Prophet" />
        <div>
        <p>Website Update</p>
        <p>
        We are currently upgrading all sections of our website in order to provide you with the best and most current information […]
        </p>
        </div>
        </div>

        <div className='event'>
        <img src="/imgE3.png" className="event_img" width="100rem" alt="Prophet" />
        <div>
        <p>Beware of scammers</p>
        <p>
        This is the ONLY and Official Website for our Ministry This is the ONLY and official Facebook page […]
        </p>
        </div>
        </div>

        <div className='event'>
        <img src="/imgE4.png" className="event_img" width="100rem" alt="Prophet" />
        <div>
        <p>Happy new year</p>
        <p>
        Kakande Ministries welcomes you to a New Year Grand Night Prayer due to take place on the 31st December 2016 at the church. […]
        </p>
        </div>
        </div>

      </div>
    </div>
    </div>
    </div>    
    )
}

<iframe width="560" height="315" src="https://www.youtube.com/embed/nFqRUV8gixk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>