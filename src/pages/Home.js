import '../App.css';
import React, { useState } from "react"
import HeaderWeather from '../components/HeaderWeather';
import ItemBox from '../components/ItemBox';
import BoxMessage from '../components/BoxMessage';
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function Home() {
    const [weather, setWeathers] = useState([]);
    const [cityInput, setCityInput] = useState('');
    const [stateInput, setStateInput] = useState('');
    const [error, setError] = useState('');
    const [key, setKey] = useState('');

    function getWeather(city, state, key) {
        if (city.length > 0 && state.length > 0 && key.length) {
            axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${key}&city_name=${cityInput},${stateInput}`)
                .then(res => {
                    setWeathers(res.data.results)
                    setError('')
                }).catch((e) => {
                    console.log('Houve algum erro: ', e)
                    setError('Houve algum problema com a api, verifique os dados enviados e a sua chave')
                })
        } else {
            setError('ATENÇÃO! Informe todos os dados')
        }
    }

    return (
        <div className="row">
            <div className="weather__form row">
                <div className="col-md-12 weather__form-header">
                    <h2>Bem vindos ao WeatherApp!</h2>
                    <p> Aqui, você pode pesquisar a temperatura de uma determinada região no momento e a previsão para os próximos dias. <br />
                        Para que a consulta seja realizada, é necessario criar uma chave gratuita no site: <a href='https://hgbrasil.com/status/weather'>
                            https://hgbrasil.com/status/weather
                        </a>.
                        <br />
                        Caso precise de ajuda, acesse nosso <Link to="/help">passo a passo</Link> </p>
                    <small>{error}</small>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    getWeather(cityInput, stateInput, key)
                }} className="row">
                    <div className=" col-md-4">
                        <input type='text' placeholder='Campinas' className='form-control'
                            onChange={(e) => {
                                setCityInput(e.target.value)
                            }}
                        />

                    </div>
                    <div className=" col-md-4">
                        <input type='text' placeholder='SP' className='form-control'
                            onChange={(e) => {
                                setStateInput(e.target.value)
                            }}
                        />

                    </div>
                    <div className=" col-md-2">
                        <input type='text' placeholder='Sua chave de api' className='form-control'
                            onChange={(e) => {
                                setKey(e.target.value)
                            }}
                        />

                    </div>
                    <div className=" col-md-2">
                        <input className='form-control' type='submit' value='Procurar' />
                    </div>
                </form>

            </div>

            <div className="weather_content">
                {typeof weather === "undefined" || weather.length <= 0 ? (

                    <BoxMessage title="" message="" />
                ) : (
                    <>
                        <HeaderWeather weather={weather} />
                        <h2>Próximos 10 dias</h2>
                        <ItemBox itens={weather.forecast} />
                    </>
                )}
            </div>
        </div>


    );
}

