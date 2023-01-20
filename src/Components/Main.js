import React from 'react'
import Burger from './Burger/Burger'
import Header from './Header/Header'

const Main = props => {
  return (
    <div>
        <Header/>
        <div className='container'>
          <Burger/>
        </div>
    </div>
  )
}

export default Main