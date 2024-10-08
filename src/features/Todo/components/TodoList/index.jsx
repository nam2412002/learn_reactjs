import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [

    ],
}

function TodoList({ todoList }) {
    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}>{todo.name}</li>
            ))}
        </ul>
    );
}

export default TodoList;