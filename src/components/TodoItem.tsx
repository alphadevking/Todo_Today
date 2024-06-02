import React from 'react'

interface TodoItemProps
{
    id : number
    title : string
    completed : boolean
    toggleTodo : ( id : number ) => void
    deleteTodo : ( id : number ) => void
}

const TodoItem : React.FC<TodoItemProps> = ( { id, title, completed, toggleTodo, deleteTodo } ) =>
{
    return (
        <li className="flex justify-between items-center p-4 rounded shadow mb-2">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={ completed }
                    onChange={ () => toggleTodo( id ) }
                    className="mr-2"
                />
                <span className={ completed ? 'line-through text-gray-500' : '' }>{ title }</span>
            </div>
            <button onClick={ () => deleteTodo( id ) } className="text-red-700 font-bold text-xl">x</button>
        </li>
    )
}

export default TodoItem
