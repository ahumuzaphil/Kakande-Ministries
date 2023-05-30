import React from 'react';
import { FacebookFilled,
    TwitterSquareFilled,
    GooglePlusSquareFilled,
    YoutubeFilled,
    HeatMapOutlined,
    MessageOutlined,
    YahooFilled,
    PhoneOutlined } from '@ant-design/icons';
import { Link } from   'react-router-dom'

export default function footer(){
    return(
        <div className='footer_container'>
        <img src="/logo.png" className="footer_logo" width="170rem" alt="home" />
        <div className='connect_container'>
        <div className='connect'>
        <FacebookFilled
        className='icon_foo'
         />
        <p>Facebook</p>
        </div>
        <div className='connect_2'>
        <TwitterSquareFilled
        className='icon_foo'
         />
        <p>Twitter</p>
        </div>
        <div className='connect'>
        <GooglePlusSquareFilled
        className='icon_foo'
         />
        <p>Google plus</p>
        </div>
        <div className='connect_2'>
        <YoutubeFilled
        className='icon_foo'
         />
        <p>Youtube</p>
        </div>
        <div className='connect'>
        <YahooFilled
        className='icon_foo'
         />
        <p>Yahoo</p>
        </div>

        </div>

        <div className='sub_container'>
        <div className='footer_sub'>
        <h3>ABOUT</h3>
        <p>
        We are a community of people loving each other and our Lord. Be completely humble and gentle, be patient, bearing with one another in love. We are a community Lord. Come and worship with us, and your life will be transformed forever! God bless you.
        </p>
        </div>
        <div className='footer_sub'>
        <h3>NAVIGATION</h3>
        <p className='container_link'>
        <Link to="prayer" className='footer_link'>- Prayer</Link>
        </p>
        <p className='container_link'>
        <Link to="preachings" className='footer_link'>- Preachings</Link>
        </p>
        <p className='container_link'>
        <Link to="miracle" className='footer_link'>- Miracle</Link>
        </p>
        <p className='container_link'>
        <Link to="prophecy" className='footer_link'>- Prophecy</Link>
        </p>
        </div>
        <div className='footer_sub'>
        <h3>CONTACT US</h3>
        <div className='contact_ftr'>
        <HeatMapOutlined className='posta'/>   <span>Address :</span>
        <p className='ftr'>
        Mulago, Ku Bbiri Round-About, P.O. Box 16616, Kampala, Uganda.
        </p>
        </div>
        <div className='contact_ftr'>
        <PhoneOutlined className='posta'/>   <span>Phone :</span>
        <p className='ftr'>
        +256 200 414550, +256 703 532714
        </p>
        </div>
        <div className='contact_ftr'>
        <MessageOutlined className='posta'/>   <span>Address</span>
        <p className='ftr'>
        contactus@Kakandeministries.org
        </p>
        </div>
        </div>
        </div>
        <p className='bottom'>© Copyright 2023 The Kakande Ministries. All Rights Reserved.</p>
        </div>
    )
}