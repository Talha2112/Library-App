import React from 'react'
import Image from 'next/image'
import crossImage from '../assets/cross1.png';
import { useState } from 'react';

const Popup = ({onClose , dataOfForm}) => {
    const [title , setTitle] = useState('');
    const [author , setAuthor] = useState('');
    const [page, setPages] = useState('');
    const [readStatus , setReadStatus] = useState(false);
    const handleForm = (e) => {
        e.preventDefault();
        onClose();
        dataOfForm({title , author , page})

    }
   
  return (
    <div className="overflow-hidden fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-gray-900">
    <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4 font-inter">Add New Book</h2>
        <Image src={crossImage} alt="Close" className="w-3 h-3 cursor-pointer relative bottom-1" onClick={onClose} />
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Title:
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block font-medium mb-1">
            Author Name:
          </label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            id="author"
            name="author"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pages" className="block font-medium mb-1">
            Pages:
          </label>
          <input
            value={page}
            onChange={(e) => setPages(e.target.value)}
            type="number"
            id="pages"
            name="pages"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="flex items-center mb-4">
          <input onChange={(e) => setReadStatus(e.target.checked)} type="checkbox" id="read" name="read" className="mr-2" />
          <label htmlFor="read">Read It?</label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            onClick={handleForm}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Popup