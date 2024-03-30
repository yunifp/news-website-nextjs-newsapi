import React from 'react'

const Tag = ({data}:{data:string}) => {
  return (
    <div className='bg-zinc-600 rounded-md px-2 py-1 shadow-md text-xs text-zinc-200'>{data}</div>
  )
}

export default Tag