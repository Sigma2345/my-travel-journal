import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
  
  const components = data.map(function(item){
    console.log(item)
    return (
      <Card 
        items = {item}
      />
    )
  })
  
  return (
    <div>
      <Navbar />
      {components}
    </div>
    )
};
