import React from 'react'; 
 
const Artworks = (props) => { 
    const artist = props?.artist; 
    return <>   
        <div className="container-fluid mt-2 mb-5 p-5" >
            <div className="products">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> 
                            <span className="font-weight-bold text-uppercase">Artworks</span> 
                        </div>
                        <div className="row g-3">
                            { artist?.artworks?.length && artist?.artworks.map( (artwork,key)=> {
                                return (
                                    <div className="col-md-3" key={key}>
                                        <div className="card"> 
                                            <img src={ artwork?.image?.url } className="card-img-top"/>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between"> 
                                                    <span className="font-weight-bold">{ artwork?.title }</span>
                                                    <span className="font-weight-bold">{ artwork?.price }</span> 
                                                </div>
                                                <p className="card-text mb-1 mt-1">
                                                    {/* { artwork?.description } */}
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                </p> 
                                            </div>
                                            <hr/>
                                            <div className="card-body">
                                                <div className="text-right buttons"> 
                                                    <button className="btn btn-outline-dark">Contact for price</button>{' '}
                                                    <button className="btn btn-dark">SAve</button> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })} 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>
 } 
export default Artworks;