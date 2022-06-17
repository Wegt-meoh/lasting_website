import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'


//拟态效果的登陆界面

export default function LoginDemo() {

    const navigate = useNavigate()

    const [ActicityState, setActicityState] = useState('login')
    let [userName, SetUserName] = useState('')
    let [password, SetPassword] = useState('')

    function changeActivityState() {
        if (ActicityState === 'login') {
            setActicityState('register')
        } else {
            setActicityState('login')
        }
        alert("activity state change")
    }

    function handleClick() {
        // navigate('/shower')
    }

    return (
        <div className='App-login-background'>
            <div className='App-login-board'>
                <div className='App-login-title' onClick={changeActivityState}>
                    <div>{ActicityState === 'login' ? 'login' : 'register'}</div>
                </div>
                <div className='App-login-content'>
                    <div className='App-login-input'>
                        <span>EMAIL</span>
                        <input type="text" value={userName} onChange={e => SetUserName(e.target.value)} placeholder='example@email.com' />
                    </div>
                    <div className='App-login-input'>
                        <span>PASSWORD</span>
                        <input type="text" value={password} onChange={e => SetPassword(e.target.value)} placeholder='enter password here' />
                    </div>
                    {ActicityState === 'login' ? null :
                        <div className='App-login-input'>
                            <span>ENSUREPASSWORD</span>
                            <input type="text" placeholder='enter password again' />
                        </div>
                    }
                    <button onClick={handleClick} className='App-login-button'>{ActicityState === 'login' ? 'login' : 'register'}</button>
                </div>
            </div>
        </div>
    )
}
