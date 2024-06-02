import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'

interface Todo
{
    id : number
    title : string
    completed : boolean
}

const Todo : React.FC = () =>
{
    const [ todos, setTodos ] = useState<Todo[]>( [] )
    const [ newTodo, setNewTodo ] = useState( '' )
    const [ error, setError ] = useState<string | null>( null )

    useEffect( () =>
    {
        try
        {
            fetch( 'http://127.0.0.1:8000/api/todos/' )
                .then( response => response.json() )
                .then( data => setTodos( data ) )
                .catch( err => setError( 'Failed to fetch todos' ) )
        } catch ( err )
        {
            setError( 'Unexpected error occurred' )
        }
    }, [] )

    const addTodo = () =>
    {
        if ( newTodo.trim() )
        {
            const newTodoItem = { id: Date.now(), title: newTodo, completed: false }
            setTodos( [ ...todos, newTodoItem ] )
            setNewTodo( '' )
        } else
        {
            setError( 'Todo title cannot be empty' )
        }
    }

    const toggleTodo = ( id : number ) =>
    {
        setTodos( todos.map( todo => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ) ) )
    }

    const deleteTodo = ( id : number ) =>
    {
        setTodos( todos.filter( todo => todo.id !== id ) )
    }

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Todo Today</h1>
            { error && <div className="text-red-500 mb-4">{ error }</div> }
            <div className="flex mb-4">
                <input
                    type="text"
                    value={ newTodo }
                    onChange={ ( e ) =>
                    {
                        setNewTodo( e.target.value )
                        setError( null )
                    } }
                    className="border p-2 flex-grow rounded-l"
                    placeholder="Add a new todo"
                />
                <button onClick={ addTodo } className="bg-blue-500 text-white p-2 rounded-r">Add</button>
            </div>
            <ul>
                { todos.map( todo => (
                    <TodoItem
                        key={ todo.id }
                        id={ todo.id }
                        title={ todo.title }
                        completed={ todo.completed }
                        toggleTodo={ toggleTodo }
                        deleteTodo={ deleteTodo }
                    />
                ) ) }
            </ul>
        </div>
    )
}

export default Todo
