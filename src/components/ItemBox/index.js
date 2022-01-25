import React from 'react'
import './index.css'

export default function ItemBox({ itens }) {
    return (
        <div className='item_box row'>
            {itens.map((item) => {
                return (
                    <div className=' text-left col-md-4'>
                        <div className="item_box-item row">
                            <div className='col-md-12'>
                                <h2>{item.date} [{item.weekday}]</h2>
                            </div>
                            <div className='col-md-6'>
                                <p>
                                    <b>Descrição: </b> <br />{item.description}<br />
                                    <b>Temperatura Máxima:</b> <br />{item.max}ºC<br />
                                    <b>Temperatura Minima:</b> <br />{item.min}ºC<br />
                                    <b>condition:</b><br /> {item.condition}<br />
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <img alt={item.condition ? item.condition : 'sem imagem'} className="item_box-item-img" src={item.condition ? './images/' + item.condition + '.png' : 'none.png'} onError={(e) => { e.target.onerror = null; e.target.src = "./images/none.png" }} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}