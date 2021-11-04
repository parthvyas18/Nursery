import React from 'react';
import PlantList from './PlantList'
import '../styles/Home.css'
import HomeData from '../Data/HomeData'
import Carousal from './Carousal'
import CategoriesData from '../Data/Categories';
const Home = () => {
    return(
    <div className=' margint' >
        
        <div  className='carousal'>
         <Carousal Datas={CategoriesData.data}/>
        </div>

        <div className='container'>
            <PlantList Datas={HomeData.data}/>
            <PlantList Datas={HomeData.data}/>
        </div>
       
    </div>
    );
}
export default Home