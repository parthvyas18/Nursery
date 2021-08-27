import React from 'react';
import PlantList from './PlantList'
import '../styles/Home.css'
import HomeData from './Data/Home'
const Home = () => {
    return(
    <div className='container margint'>
         Welcome to Home Page
        <div className="content">
            <PlantList />
        </div>
       
    </div>
    );
}
export default Home