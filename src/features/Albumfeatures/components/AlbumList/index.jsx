import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import Album2 from '../Album';
AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
    return (
        <ul className='album-list'>{albumList.map(abl =>(
            <li key={abl.id}>
            <Album2 abl2={abl} />
            </li>
        ))}
            
        </ul>
    );
}

export default AlbumList;