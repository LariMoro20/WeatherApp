import React from 'react'
import './index.css'

export default function HeaderWeather({ weather }) {
    return (
        <div className='weather_box row'>


            <div className='col-md-9 row'>
                <div className='col-md-12'>
                    <h2>{weather.city}</h2>
                </div>
                <div className='col-md-4 row'>

                    <p>
                        <b>Data: </b> {weather.date}<br />
                        <b>Horário: </b> {weather.time}<br />
                        <b>Periodo atual: </b> {weather.currently}<br />
                    </p>
                </div>
                <div className='col-md-4 row'>
                    <p>
                        <b>Temperatura:</b> {weather.temp}ºC<br />
                        <b>Humidade: </b> {weather.humidity}<br />
                        <b>Velocidade do vento: </b> {weather.wind_speedy}
                    </p>
                </div>
                <div className='col-md-4 row'>
                    <p>
                        <b>Nascer do sol: </b> {weather.sunrise}<br />
                        <b>Por do sol: </b> {weather.sunset}<br />
                        <b>Descrição: </b> {weather.description}
                    </p>
                </div>
            </div>
            <div className='col-md-3'>
                <img alt={weather.condition_slug ? weather.condition_slug : 'sem imagem'} className="weather-box_img" src={weather.condition_slug ? './images/' + weather.condition_slug + '.png' : './images/none.png'} onError={(e) => { e.target.onerror = null; e.target.src = "./images/none.png" }} />
            </div>
        </div>
    )
}