import React from 'react'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Cards from '../components/Cards.jsx'
const HomePage = () => {
  return (
    <div>
        <Header/>
        <div className='mt-4 flex gap-x-6'>
            <Sidebar/>
            <Cards/>
            <Sidebar/>
        </div>
    </div>
  )
}

export default HomePage