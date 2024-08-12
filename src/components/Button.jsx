import React from 'react'

const Button = ({children}) => {
  return (
    <button className='px-6 py-2 font-semibold rounded-lg border-none bg-primary hover:bg-secondary hover:shadow-md flex flex-nowrap items-center gap-2 group text-lg duration-200'>{children} </button>
  )
}

export default Button