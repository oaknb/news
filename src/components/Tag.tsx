import React from 'react'

const Tag = ({data}:{data:string}) => {
  return (
    <div className='bg-gray-700 rounded-md px-5 py-2 shadow-md text-xs text-white'>{data}</div>
  )
}

export default Tag