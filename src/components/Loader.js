import React from 'react';
import '../styles/popular.css';

const Loader = () => {
    return (
        <div class="row d-flex justify-content-center mt-100">
            <div class="col-md-6">
                <h2 class="text-center">Loading...</h2>
                <div class="progress">
                    <div class="progress-bar">
                        <div class="progress-shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loader;