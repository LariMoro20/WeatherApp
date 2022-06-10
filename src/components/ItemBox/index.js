import React from 'react'
import './index.css'

export default function ItemBox({ itens }) {
    return (
        <div className='item_box row'>
            {itens.map((item) => {
                return (
                    <div className=' text-left col-md-3'>
                        <div className="item_box-item row">
                            <div className='col-md-12'>
                                <h2 className='item_box-item-title'>{item.date} [{item.weekday}]</h2>
                            </div>
                            <div className='col-md-12 text-center'>
                                <img alt={item.condition ? item.condition : 'sem imagem'} className="item_box-item-img" src={item.condition ? './images/' + item.condition + '.png' : 'none.png'} onError={(e) => { e.target.onerror = null; e.target.src = "./images/none.png" }} />
                            </div>
                            <div className='col-md-12'>
                                <p className='item_box-item-text'>
                                    <b>Descrição: </b> {item.description}<br />
                                    <b>Temperatura Máx.:</b> {item.max}ºC<br />
                                    <b>Temperatura Min.:</b> {item.min}ºC<br />
                                </p>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    )
}