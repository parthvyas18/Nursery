import React from 'react';
import PlantList from './PlantList'
import '../styles/Home.css'
import HomeData from '../Data/HomeData'
const Home = () => {
    return(
    <div className='container margint'>
         Welcome to Home Page
        <div className="content">
            <PlantList Datas={HomeData.data}/>
            <PlantList Datas={HomeData.data}/>
        </div>
       
    </div>
    );
}
export default Home