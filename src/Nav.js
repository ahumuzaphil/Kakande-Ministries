
import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { UnorderedListOutlined,CloseOutlined } from "@ant-design/icons"
import { useState, useEffect } from 'react';

export default function Nav(){
    const [bar, setBar] = useState(true)
    const [screen, setScreen] = useState(window.innerWidth)
    const [list, setList] = useState(true)

    function cross(){
   setList(prevList => !prevList )
    }

    function nav(){
        setBar(prevBar => !prevBar  )
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreen(window.innerWidth);
        }
            window.addEventListener('resize', changeWidth)

            return () => {
                window.removeEventListener('resize', changeWidth)
            }
        
    }, [])
    return(
        <div className='nav'>
        <Link to="/">
        <img src="/logo.png" className="home_logo" width="100rem" alt="home" />
        </Link>

        {(bar || screen > 960) && (
        <ul className='menu_list'>
        <li>
        <Link to='./prayer' className='menu'>Prayer</Link>
        </li>
        <li>
        <Link to='prophecy' className='menu'>Prophecy</Link>
        </li>
        <li>
        <Link to='Miracle' className='menu'>Miracle</Link>
        </li>
        <li>
        <Link to='preaching' className='menu'>Preachings</Link>
        </li>
        <li>
        <Link to='contacts' className='menu' id='cont'>Contact</Link>
        </li>
        </ul>
        )}
        <Button  onClick={nav} className='bar' >{list ? <CloseOutlined  onClick={cross}/> : <UnorderedListOutlined onClick={cross}/>}</Button>
        
        </div>
    )
}