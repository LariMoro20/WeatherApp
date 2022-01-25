import React from 'react'
import './index.css'

export default function BoxMessage({ title, message }) {
    return (
        <div className='box_message row'>
            <div className="col-md-12 text-center">
                <h3>{title}</h3>
            </div>
            <div className="col-md-12">
                <p>{message}</p>
            </div>

        </div>
    )
}