import React from 'react'

export const data = {
    number: 123,
    text: 'Context API test'
}

const DataContext = React.createContext(null)

export default DataContext