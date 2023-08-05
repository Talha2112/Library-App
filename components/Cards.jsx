import React from 'react'

const Cards = ({title , author , page}) => {
  return (
    <div className=' flex items-center flex-wrap justify-center '>
        <div class="w-30 h-60 rounded overflow-hidden shadow-lg mt-5">
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The title of the book is : {title}</div>
    <p class="text-gray-700 text-base">The name of the Author : 
      {author}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="">It contain's {page} pages</span>

  </div>
</div>
    </div>
  )
}

export default Cards