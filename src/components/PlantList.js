import React, { useState, useEffect } from 'react';
import Plants from './Plants'
const PlantList = ({ Datas }) => {
    const RenderedData = Datas.map((data) => {
        return (
            <div className="col-sm-3">
                <Plants image={data.img} Name={data.name} />
            </div>
        );
    })
    return (
        <>
            <div className='row'>
                {RenderedData}
            </div>
        </>
    );
}
export default PlantList;