import React from 'react'
import UrlForm from '../components/UrlForm'
import OverlayList from '../components/OverlayList'
import Navbar from '../components/Navbar'
import {Toaster} from 'react-hot-toast'

function App() {

  

  return (
    <div>
      <Toaster/>
      <Navbar/>
      <main className='lg:flex justify-between'>
        <UrlForm/>
        <div className='w-full flex justify-center'>
          <OverlayList/>
        </div>
      </main>
    </div>
  )
}

export default App
