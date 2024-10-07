import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList'; 


TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const Concho = [
        {
            id: 1 ,
            name: 'nam'
        },
        {
            id: 2,
            name: 'duocker'
        },
        {
            id: 3,
            name:'train'
        },
    ]

    
    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={Concho}/>
        </div>
    );
}

export default TodoFeature;