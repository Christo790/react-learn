import React from 'react'
import Card from './component/card.jsx'
import Nav from './component/nav.jsx'

const App = () => {
    return (
        <div className="card">
            <Card user='John Doe'/>
            <Card user='Jane Smith'/>
            <Card user='Bob Johnson'/>
        </div>
    )
}

export default App
