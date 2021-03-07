import React, { Component } from 'react';
import ArtistCards from './ArtistsCards'
import {gql, useQuery} from '@apollo/client'
import { Container, Row, Col  } from 'react-bootstrap';
import Loader from '../../components/Loader';

const query = gql`
                query {
                    popular_artists {
                    artists {
                      image {
                        url
                      }
                      id
                      name 
                      nationality
                      years
                        artworks {
                            id
                            title
                            is_for_sale
                            price
                            image {
                              image_url
                          }
                        }
                      }
                    }
                }`
 
 
 const PopularArtists = () => {
    const { data, loading } = useQuery(query);
    const artists = data?.popular_artists?.artists || {};
    if(loading) {
        return <Loader />
    }
    return <>    
        <Container>
          <Row>    
            <Col> 
              <h1 >Popular Artists </h1>
            </Col>
          </Row>
          <Row>    
            <Col>   
              <ArtistCards artists={artists} />
            </Col>
          </Row>
        </Container> 
    </>
 } 
export default PopularArtists;