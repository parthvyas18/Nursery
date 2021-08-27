import React from 'react';
import Plants from './Plants'
import img1 from '../images/Plant1.jpeg'
import img2 from '../images/Plant2.jpeg'
import img3 from '../images/Plant3.jpeg'
import img4 from '../images/Plant4.jpeg'
const PlantList = () => {
    return (
        <>
            <div className='row'>
                <div className="col-sm-3">
                    <Plants image={img1} />
                </div>
                <div className="col-sm-3">
                    <Plants image={img2} />
                </div>
                <div className="col-sm-3">
                    <Plants image={img3} />
                </div>
                <div className="col-sm-3">
                    <Plants image={img4} />
                </div>
                <div className="col-sm-3">
                    <Plants image={img1} />
                </div>
                <div className="col-sm-3">
                    <Plants image={img2} />
                </div>
                <div className="col-sm-3">
                    <Plants image={img3} />
                </div>
                <div className="col-sm-3">
                    <Plants image={img4} />
                </div>
                <div className="col-sm-3">
                    <Plants image={img1} />
                </div>
            </div>
        </>
    );
}
export default PlantList;