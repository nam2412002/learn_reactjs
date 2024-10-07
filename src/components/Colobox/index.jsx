import React, { useState } from 'react';
import PropTypes from 'prop-types';

Box.propTypes = {
    
};

function Box(props) {
    const [color,setcolor] = useState('white');
    return (
        <div>
            {color}
            <button onClick={() =>setcolor('black')} >chane to black </button>
            <button onClick={() =>setcolor('white')}>chane to white </button>
        </div>
    );
}

export default Box;