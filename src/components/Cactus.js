import React from 'react'
import PlantList from './PlantList'
import CactusData from '../Data/CactusData'
const Cactus = () => {
    return(
        <div className='container margint'>
            <h1>You are in Cactus Page</h1>
            <hr />
            <div className="content">
                <PlantList Datas={CactusData.data} />
            </div>
        </div>
    );
}
export default Cactus;