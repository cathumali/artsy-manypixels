import React from 'react';
import {gql, useQuery} from '@apollo/client'
import '../../styles/artworks.css';
import '../../styles/profile.css';
import ProfileDetails from './ProfileDetails';
import Loader from '../../components/Loader';

import Artworks from './Artworks';
 
 const getQuery = (id) => {
    const query = gql`
    query {
        artist(id: "${id}"){
            name
            id
            birthday
            bio
            nationality
            years
            image {
                url
            }
            artworks {
                id
                title
                description
                is_for_sale
                price
                image {
                  image_url
                  url
                }
            }
        }
    }`
    return query;
 }

 const Artist = (props) => {
    const id = props.match?.params?.id; 
    const query = getQuery(id);
    const { data, loading } = useQuery(query);
    const artist = data?.artist;

    if(loading) {
        return <Loader />
    }
    return <>    
        <ProfileDetails artist={artist} />
        <Artworks loading={loading} artist={artist} />
    </>
 } 
export default Artist;