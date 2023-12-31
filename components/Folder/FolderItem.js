import Image from 'next/image'
import React from 'react'

const FolderItem = ({folder}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-[120px] border-[1px] rounded-md p-5 bg-white hover:bg-orange-100 duration-200'>
      <Image
        src='/assets/folders/folder.ico'
        width={50}
        height={50}
        alt='folder icon'
        className=' cursor-pointer'
      />
      <h2 className='line-clamp-2 font-mono pt-1'>{folder.name}</h2>
    </div>
  )
}

export default FolderItem
