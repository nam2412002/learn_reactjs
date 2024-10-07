import React, { useState } from 'react';
import PropTypes from 'prop-types';

Couter.propTypes = {
    
};

function Couter(props) {
    const [cout,setcout] = useState(0);
    return (
        <div>
            {cout}
            <button onClick={()=> setcout(x => x+1)}>tang</button>
        </div>
    );
}

export default Couter;