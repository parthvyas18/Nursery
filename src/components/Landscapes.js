import React from 'react'
import PlantList from './PlantList'
import LandscapeData from '../Data/LandspaceData'
const Landscapes = () => {
    return(
        <div className='container margint'>
            <h1>You are in Landscapes Page</h1>
            <hr/>
            <div className="content">
                <PlantList Datas={LandscapeData.data} />
            </div>
        </div>
    );
}
export default Landscapes;