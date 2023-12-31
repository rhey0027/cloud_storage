import Image from 'next/image'
import menu from '../data/menu'
import { useState } from 'react';
import CreateFolder from './Folder/CreateFolder';


const Sidebar = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="sidebar w-[250px] h-screen sticky top-0 z-10 shadow-lg
     bg-white p-10 px-5"
    >
      <div className="appLogo justify-center flex">
        <Image
          src="/assets/logo/ec2.png"
          alt="logo"
          width={70}
          height={70}
          priority={true}
        />
      </div>
      <p className="cloud-storage font-bold text-center text-[22px] text-orange-500">
        Cloud Storage
      </p>
      <button className="bg-blue-500 flex gap-2 w-full items-center justify-center text-white p-2 px-5 rounded-md hover:scale-105 transition-all duration-200 mt-5 font-semibold text-1xl ">
        Add File
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
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <button className="bg-orange-500 flex gap-2 w-full items-center justify-center text-white p-2 px-5 rounded-md hover:scale-105 transition-all duration-200 mt-5 font-semibold text-1xl"
      onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Add Folder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
      </button>
      <div className="userContent2 pt-5 mt-10">
        {menu.list.map((item, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            key={item.id}
            className={`flex gap-3 items-center mb-3 p-2 cursor-pointer transition-all rounded-md duration-200 
          ${activeIndex == index ? "bg-violet-500 w-full text-red-300" : null}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d={item.logo}
              />
            </svg>
            <div className="font-bold">{item.name}</div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-auto">
          <CreateFolder/>
        </div>
      </dialog>
      <footer className="bg-black p-2 absolute bottom-0 left-0">
        <h1 className="text-[10px] text-center  text-slate-400">
          Copyright&#169; | All Rights Reserved 2023 RYU Developer
        </h1>
      </footer>
    </div>
  );
}

export default Sidebar
