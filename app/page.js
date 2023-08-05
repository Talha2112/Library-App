'use client'

import Cards from '@/components/Cards';
import Popup from '@/components/Popup'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showModal , setShowModal] = useState(false);
  const [books , setBooks] = useState([])
  const [cardData , setCardData] = useState({
    title:'' , author:'' , page: '',
  })
  const handleShowModal = () => {
    setShowModal(!showModal);
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }
  const formData = (data) => {
    // setCardData(data)
    setBooks([...books , data])
  }

  
 return (
  <div className=''>
    <header className='flex justify-around mt-5 shadow-md'>
      <h1 className='text-5xl pb-5 font-play font-bold'>BookShelf</h1>
      <button  class="button-5 bg-green-500 border-transparent rounded-md shadow-sm py-2  inline-flex items-center text-white hover:bg-green-600 focus:outline-none  ease-in h-12 w-20 text-sm justify-center font-bold transition-all shadow-green-500" >LOGIN</button>
    </header>
    <div className='flex items-center justify-center mt-10'>
    <button  className="middle none center mr-4 rounded-lg bg-green-500 px-8 text-sm font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:bg-green-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-5 py-4"
    data-ripple-light="true" onClick={handleShowModal}>Add Book</button>
      
    </div>
      { showModal && <Popup onClose={handleCloseModal} dataOfForm={formData}/>}
      <div className='flex justify-center flex-wrap mx-2 space-y-5 lg: space-x-10 lg:items-center'>

        { cardData.title && cardData.author && cardData.page && <Cards title={cardData.title} author={cardData.author} page={cardData.page}/>  }
        {books.map((item , index) => (
          <Cards
          key = {index}
          title={item.title}
          author= { item.author }
          page= { item.page }
          />)
      )}
    
      </div>
  </div>
  
  )
}
