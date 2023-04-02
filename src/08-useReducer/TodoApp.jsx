import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks/useTodos';

/* const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
} */

export const TodoApp = () => {

    // custom hook useTodo 
    // todos, handleDeleteTodo, handleToggleTodo , handleNewTodo
    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

    /* const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || [] );
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    } */

    return (
        <>
            <h1>TodoApp: { todosCount } <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    {/* TodoList */}
                    <TodoList 
                      todos={todos} 
                      onDeleteTodo={ handleDeleteTodo }
                      onToggleTodo={ handleToggleTodo } 
                    />
                    {/* Fin TodoList */}

                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* Todo Add onNewTodo( todo ) */}
                    {/* {id: new Date()..., description: '', done: false}*/}
                    <TodoAdd onNewTodo={ handleNewTodo } />
                    {/* Fin TodoAdd */}
                </div>

            </div>

        </>
    )
}
