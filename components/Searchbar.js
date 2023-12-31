import React from 'react'

const Searchbar = () => {
  return (
  <div>
    <div className="flex gap-4 bg-white p-2 rounded-lg items-center w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
        >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
          <input 
            type="text"
            placeholder='Search...'
            className='outline-none w-full text-[14px] text-gray-700'
            onKeyDown={(e) => e.key=='Enter' && console.log(e.target.value)}
          />
    </div>
  </div>
  );
}

export default Searchbar
