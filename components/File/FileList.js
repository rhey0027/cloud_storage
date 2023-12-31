import React from 'react'
import FileItem from './FileItem';

const FileList = () => {

  const filelist = [
    {
      id: 1,
      name: 'Python overview.pdf',
      type: 'pdf',
      size: '312 kb',
      modifiedAt: 'Dec. 12, 2021'
    },
    {
      id: 2,
      name: 'SQL Injection.pdf',
      type: 'pdf',
      size: '122 kb',
      modifiedAt: 'Oct. 02, 2021'
    },
    {
      id: 3,
      name: 'Database.docs',
      type: 'doc',
      size: '12 kb',
      modifiedAt: 'Oct. 23, 2021'
    },
    {
      id: 4,
      name: 'Zero day exploit.png',
      type: 'png',
      size: '312 kb',
      modifiedAt: 'Dec. 28, 2022'
    },
  ]

  return (
    <div className="bg-white pt-5 mt-5 rounded-lg shadow-md">
      <h1 className="text-[20px] font-bold p-2">Recent File/s</h1>
      <div
        className="grid grid-cols-1
          md:grid-cols-2
          text-[15px]
          font-semibold
          bg-gray-200
          text-slate-400
          border-b-[1px]
        "
      >
        <h2>Name</h2>
        <div className="grid grid-cols-3">
          <h2>Date Modified</h2>
          <h2>Size</h2>
          <h2></h2>
        </div>
      </div>
      {filelist&&filelist.map((item, index) => (
        <div  key={index}>
          <FileItem file={item}/>
        </div>
      ))}
    </div>
  );
}

export default FileList
