import React from 'react'
import Todo from './components/Todo'
import "./App.css";

const App : React.FC = () =>
{
    return (
        <div className="container mx-auto p-4">
            <Todo />
        </div>
    )
}

export default App
