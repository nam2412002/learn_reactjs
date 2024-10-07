import React from 'react';
import PropTypes from 'prop-types';

Album2.propTypes = {
    abl2: PropTypes.object.isRequired,
};

function Album2({abl2}) {
    return (
        <div className='album'>
            <p>{abl2.name}</p>
            <p><img src={abl2.thumbnaiUrl} alt={abl2.name} /></p>
            
        </div>
    );
}

export default Album2;