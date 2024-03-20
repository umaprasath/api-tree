import React from 'react'
import CollapsibleTreeWithAction from './CollapsibleTreeWithAction'

function App () {
  const data = {
    name: 'Consumers',
    children: [
      {
        name: 'Consumer 1',
        children: [
          {
            name: 'APP 1',
            children: [
              { name: 'APP 1.1' },
              { name: 'APP 1.2' }]
          },
          {
            name: 'APP 2',
            children: [
              { name: 'APP 1.1' },
              { name: 'APP 1.2' }]
          }
        ]
      },
      {
        name: 'Consumer 2',
        children: [
          {
            name: 'APP 1',
            children: [
              { name: 'APP 2' },
              { name: 'APP 1.2' }]
          },
          {
            name: 'APP 2',
            children: [
              { name: 'APP 1.1' },
              { name: 'APP 1.2' }]
          }
        ]
      },
      {
        name: 'Consumer 3',
        children: [
          { name: 'APP 3.1' },
          { name: 'APP 3.2' }
        ]
      }
    ]
  }

  return (
    <div className='App'>
      <h1>Consumer and API Dependency Tree</h1>
      <CollapsibleTreeWithAction  />
    </div>
  )
}

export default App
