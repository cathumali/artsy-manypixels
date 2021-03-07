import React from 'react';

function Home() {
    return(<>
        <div style={{backgroundImage: `url(https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}} class="jumbotron bg-cover text-white">
            <div class="container py-5 text-center">
                <h1 class="display-4 font-weight-bold">Welcome To Artsy</h1>
                <p class="font-italic mb-0">Collection of works from our iconic artists.</p>
                <br />
                <a href="/artists" role="button" class="btn btn-primary px-5">See Popular Artists</a>
            </div>
        </div>
    
        <div class="container py-5">
            <h2 class="h3 font-weight-bold">Welcome To Artsy</h2>
            <div class="row">
                <div class="col-lg-10 mb-4">
                    <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                    <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                </div>
                <div class="col-lg-8">
                    <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur <strong class="font-weight-bold text-dark">adipisicing elit, sed </strong>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <strong class="font-weight-bold text-dark">reprehenderit in voluptate </strong>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </>)
}

export default Home;