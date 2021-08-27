import React from 'react';
import '../styles/Plants.css';
const Plants = ({ image }) => {
    return (
        <div>
            <div className="card Cardi">
                <img className="card-img-top" src={image} height="300" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Plant Name</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="https://www.facebook.com/profile.php?id=100010879801732" className="btn btn-primary" target="_blank">Enquire</a>
                </div>
            </div>
        </div>
    );
}
export default Plants;