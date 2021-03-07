import React , { Fragment } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/popular.css';

const ArtistsCards = (props) => {
    const { artists } = props;
    return(<>
        <div className="container mt-5 d-flex justify-content-center">
            <div className="row">            
                { artists?.length && artists.map( (artist,key) => {
                    return(<Fragment key={key}>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" >
                            <div className="my-card"> 
                                <img className="my-card-img" src={ artist.image.url } />
                                <div className="my-card-body trainer-card-body">
                                    <h5 > 
                                        <Link to={`/artist/${artist.id}`} className="text-dark"> { artist.name } </Link>
                                    </h5>
                                    <div>
                                        <span>{ artist.nationality }</span><br />
                                        <span>{ artist.years }</span>
                                    </div>
                                    <div className="social-icons"> 
                                    </div> 
                                    <a href="#" className="my-card-btn">Follow</a>
                                </div>
                            </div>
                        </div>
                    </Fragment>)
                })}  
            </div>
        </div>


    </>
    )
}
export default ArtistsCards;