import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, { data } from '../data/DataContext'


const App = props => {

    return (
        <DataContext.Provider value={data}>

            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}

export default App