import React from 'react'

const IndexView = ({world, foo: onclick}) => (
    <div>
        <h1>Home Page</h1>
        <h2>Hello {world}</h2>
        <a onClick={onclick}>click me</a>
    </div>
)

export default IndexView
