import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
 
const CreateFolder = () => {

  const [createFolderName, setCreateFolderName] = useState();
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const onCreate = () => {
    console.log(createFolderName)
  } 

  return (
    <>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className='w-full items-center flex flex-col justify-center gap-3'>
          <Image
            src='/assets/folders/folder.ico'
            alt='folder' 
            width={70} 
            height={70} 
            />
            <input 
              type="text"
              placeholder='Enter folder name'
              className='p-2 border-[1px] outline-none rounded-md w-full'
              // onChange={(e) => console.log(e.target.value)}
              onChange={(e) => setCreateFolderName(e.target.value)}
            />
            <button className='bg-orange-400 p-2 w-full rounded-md text-white font-bold text-[18px]'
            onClick={() => onCreate()}
            >
              Create
            </button>
        </div>
      </form>
    
    </>
  );
}

export default CreateFolder
