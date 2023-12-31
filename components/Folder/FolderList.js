import React from 'react'
import FolderItem from './FolderItem'


const FolderList = () => {

  const fList = [
    {
      id: 1,
      name: 'Document'
    },
    {
      id: 2,
      name: 'Videos'
    },
    {
      id: 3,
      name: 'Pictures'
    },
    {
      id: 4,
      name: 'Projects'
    },
    {
      id: 5,
      name: 'Designs'
    },
    {
      id: 6,
      name: 'Clients'
    },
  ]
  return (
    <div className='bg-white p-4 mt-5 rounded-lg shadow-md'>
      <h1 className='font-bold text-[18px] items-center'>Recent Folder/s
      <span className='text-blue-400 float-right font-normal'>View All</span>
      </h1>
      <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {fList.map((item)=>(
          <FolderItem key={item.id} folder={item}/>
        ))}
      </div>
    </div>
  )
}

export default FolderList
