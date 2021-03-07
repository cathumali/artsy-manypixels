import React from 'react';
import '../styles/popular.css';

const Loader = () => {
    return (
        <div className="row d-flex justify-content-center mt-100">
            <div className="col-md-6">
                <h2 className="text-center">Loading...</h2>
                <div className="progress">
                    <div className="progress-bar">
                        <div className="progress-shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loader;