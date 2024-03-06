import React from 'react'
import json from '../JsonFile/Weddingpics.json'

const WeddingEvent = () => {
    const weddingitem = json.Wedding[0];
    return (
        <div>
            Wedding event
            <h1>{weddingitem.id}</h1>
            <p>{weddingitem.name}</p>
            <div className='h-60 w-60'>
                <img src={weddingitem.Mainimg} alt="" />
            </div>
        </div>
    )
}

export default WeddingEvent
