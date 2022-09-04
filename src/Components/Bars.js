import React from 'react'

const Bars = ({title}) => {
  return (
      <div className="flex w-body justify-between m-auto mt-7 mb-7 trip">
          <p className='text'>
           {title}   
          </p>
          <p>
              *
          </p>
    </div>
  )
}

export default Bars