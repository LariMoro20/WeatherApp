import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className="col-md-12 weather__header">
        <div className='text-center'>
          <img src="./images/logow.png" alt='WeatherAPP logo' className='weather__header-logo' />


        </div>
        <div className="col-md-12 text-center">
          <nav className='navegation'>
            <ul >
              <li> <Link to="/" className=''>Inicial</Link></li>
              <li><Link to="/help" className=''>Ajuda</Link></li>
            </ul>
          </nav>



        </div>

      </div>
    </>
  )
}