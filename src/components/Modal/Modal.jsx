import React from 'react'
import { Button } from '../Buttons/Buttons'
import Login from '../Forms/Login/Login'

function Modal() {
    return (
        <>
        <div className="modal-custom">
            <div className="modal-custom__header">
                <button className='close-btn'>X</button>
            </div>
            <div className="modal-custom__main">
                <Login />
            </div>
            <div className="modal-custom__footer">

            </div>
        </div>
        </>
    )
}

export default Modal
