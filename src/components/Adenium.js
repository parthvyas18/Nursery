import React from 'react'
import PlantList from './PlantList'
import AdeniumData from '../Data/AdeniumData'
const Adenium = () => {
    return (
        <div className='container margint'>
            <h1>You are in Adeniums Page</h1>
            <hr />
            <div className="content">
                <PlantList Datas={AdeniumData.data} />
            </div>
        </div>
    );
}
export default Adenium;