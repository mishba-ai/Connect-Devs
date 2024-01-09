import React from 'react'
import Header from '../components/Header.jsx'
import Sidebarlinks from '../components/Sidebarlinks.jsx'
import Cards from '../components/Cards.jsx'
const HomePage = () => {
  return (
    <div>
        <Header/>
        <div className='mt-4 flex gap-x-6'>
            <Sidebarlinks/>
            <Cards/>
            
            {/* <Sidebar/> */}
        </div>
    </div>
  )
}

export default HomePage