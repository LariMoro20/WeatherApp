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
            <div className="weather_form row">
                <div className="col-md-12 weather_form-header">
                    <h2>Consulta de temperatura</h2>
                    <p>Para que a consulta seja realizada, é necessario criar uma chave gratuita em: 
                        <a href='https://hgbrasil.com/status/weather'>https://hgbrasil.com/status/weather</a>.<br />
                        Caso precise de ajuda, acesse nosso <Link to="/help">passo a passo</Link> </p>
                    <small>{error}</small>
                </div>
                <form onSubmit={(info) => {
                    info.preventDefault();
                    getWeather(cityInput, stateInput, key)
                }} className="row">
                    <div className=" col-md-4">
                        <input type='text' placeholder='Campinas' className='form-control'
                            onChange={(e) => {
                                setCityInput(e.target.value)
                            }}
                        />
                        {cityInput.length === 0
                            ? 'Preencha o campo de cidade'
                            : ''
                        }<br />
                    </div>
                    <div className=" col-md-4">
                        <input type='text' placeholder='SP' className='form-control'
                            onChange={(e) => {
                                setStateInput(e.target.value)
                            }}
                        />
                        {stateInput.length === 0
                            ? 'Preencha o campo do estado'
                            : ''
                        }
                    </div>
                    <div className=" col-md-2">
                        <input type='text' placeholder='Sua chave de api' className='form-control'
                            onChange={(e) => {
                                setKey(e.target.value)
                            }}
                        />
                        {key.length === 0
                            ? 'Preencha o campo de chave'
                            : ''
                        }<br />
                    </div>
                    <div className=" col-md-2">
                        <input className='form-control' type='submit' value='Procurar' />
                    </div>
                </form>

            </div>

            <div className="weather_content">
                {typeof weather === "undefined" || weather.length <= 0 ? (

                    <BoxMessage title="Realize a pesquisa no formulario acima" message="" />
                ) : (
                    <>
                        <HeaderWeather weather={weather} />
                        <h2>Próximos dias</h2>
                        <ItemBox itens={weather.forecast} />
                    </>
                )}
            </div>
        </div>


    );
}

