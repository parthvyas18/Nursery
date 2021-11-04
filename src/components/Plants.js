import React from 'react';
import '../styles/Plants.css';
const Plants = ({ image, Name }) => {
    return (
        <div>
            <div className="card Cardi">
                <img className="card-img-top" src={image} height="300" alt="Image not Found" />
                <div className="card-body">
                    <h5 className="card-title">{Name}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div className="d-flex align-center justify-content-between">
                        <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Info
                        </button>
                        <a href="https://www.facebook.com/profile.php?id=100010879801732" className="btn btn-light" target="_blank" alt='facebook'>Enquire</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Plants;