import React, { Component } from 'react'; 

 const ProfileDetails = (props) => { 
    const artist = props?.artist; 
    return <>    
        <div class="container-fluid border-bottom bg-white mt-1 pt-md-3 pt-2">
            <div class="d-flex flex-md-row justify-content-around align-items-center">
                <div class="d-flex flex-md-row align-items-center">
                    <div class="p-md-2"> 
                    <img src={ artist?.image?.url } alt="" class="rounded-circle" id="profile" />
                    </div>
                    <div class="p-md-2 p-1" id="info">
                        <h5>{ artist?.name }</h5>
                        <div class="text-muted">{ artist?.nationality }</div>
                    </div>
                </div>
                <div class="d-flex flex-column" id="info">
                    <div class="p-md-1 text-muted"> 
                        <span class="fa fa-envelope-o bg-light p-1 rounded-circle"></span> { artist?.bio }
                    </div> 
                </div>
                <div class="rounded p-lg-2 p-1" id="blue-background">
                    <div class="d-flex flex-md-row align-items-center">
                        <div class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1" id="border-right">
                            <p class="h4">40</p>
                            <div class="text-muted" id="count">Followers</div>
                        </div>
                        <div class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1" id="border-right">
                            <p class="h4">117</p>
                            <div class="text-muted" id="count">Sales</div>
                        </div>
                        <div class="d-flex flex-column align-items-center px-lg-3 px-md-2 px-1" id="border-right">
                            <p class="h4">58</p>
                            <div class="text-muted" id="count">Artworks</div>
                        </div>
                        <div class="d-flex flex-column align-items-center px-lg-4 px-md-2 px-sm-1 px-2">
                            <p class="h4">03</p>
                            <div class="text-muted" id="count">Roles</div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>         
    </>
 } 
export default ProfileDetails;